"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: () => api?.scrollPrev(),
          scrollNext: () => api?.scrollNext(),
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault()
              api?.scrollPrev()
            } else if (e.key === "ArrowRight") {
              e.preventDefault()
              api?.scrollNext()
            }
          }}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden h-full">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-10 w-10 rounded-full",
        orientation === "horizontal"
          ? "-left-14 top-1/2 -translate-y-1/2"
          : "-top-14 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-10 w-10 rounded-full",
        orientation === "horizontal"
          ? "-right-14 top-1/2 -translate-y-1/2"
          : "-bottom-14 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-5 w-5" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

interface CarouselDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical"
}

const CarouselDots = React.forwardRef<HTMLDivElement, CarouselDotsProps>(
  ({ className, direction = "horizontal", ...props }, ref) => {
  const { api } = useCarousel()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const onInit = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setScrollSnaps(api.scrollSnapList())
  }, [])

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  React.useEffect(() => {
    if (!api) return

    onInit(api)
    onSelect(api)

    api.on("reInit", onInit)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api.off("reInit", onInit)
      api.off("reInit", onSelect)
      api.off("select", onSelect)
    }
  }, [api, onInit, onSelect])

  return (
    <div ref={ref} className={cn("flex", direction === "vertical" ? "flex-col" : "flex-row", className)} {...props}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          className={cn(
            "rounded-full transition-all duration-500 ease-in-out bg-current",
            direction === "vertical"
              ? (index === selectedIndex ? "h-10 w-1.5 opacity-100" : "h-3 w-1.5 opacity-30 hover:opacity-60")
              : (index === selectedIndex ? "w-10 h-1.5 opacity-100" : "w-3 h-1.5 opacity-30 hover:opacity-60")
          )}
          onClick={() => api?.scrollTo(index)}
        />
      ))}
    </div>
  )
})
CarouselDots.displayName = "CarouselDots"

const CarouselFraction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { api } = useCarousel()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const onInit = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
  }, [])

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCurrent(api.selectedScrollSnap() + 1)
  }, [])

  React.useEffect(() => {
    if (!api) return

    onInit(api)
    onSelect(api)

    api.on("reInit", onInit)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api.off("reInit", onInit)
      api.off("reInit", onSelect)
      api.off("select", onSelect)
    }
  }, [api, onInit, onSelect])

  if (count === 0) return null

  return (
    <div ref={ref} className={cn("flex items-center gap-1 font-bold tracking-[0.2em] text-zinc-900 text-sm", className)} {...props}>
      <button 
        onClick={() => api?.scrollPrev()} 
        className="hover:text-blue-600 transition-colors cursor-pointer p-1"
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <span className="min-w-[3ch] text-center">{current} / {count}</span>
      <button 
        onClick={() => api?.scrollNext()} 
        className="hover:text-blue-600 transition-colors cursor-pointer p-1"
        aria-label="Next slide"
      >
        &gt;
      </button>
    </div>
  )
})
CarouselFraction.displayName = "CarouselFraction"

const CarouselCustomNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { canScrollPrev, canScrollNext, scrollPrev, scrollNext } = useCarousel()

  return (
    <div ref={ref} className={cn("flex items-center gap-6 text-xs md:text-sm font-bold tracking-[0.15em] text-zinc-400", className)} {...props}>
      <button 
        onClick={scrollPrev} 
        disabled={!canScrollPrev}
        className="hover:text-blue-500 transition-colors disabled:opacity-30 disabled:hover:text-zinc-400 uppercase flex items-center"
      >
        <span className="mr-2 text-lg leading-none">&larr;</span> PREV
      </button>
      <button 
        onClick={scrollNext} 
        disabled={!canScrollNext}
        className="hover:text-blue-500 transition-colors disabled:opacity-30 disabled:hover:text-zinc-400 uppercase flex items-center"
      >
        NEXT <span className="ml-2 text-lg leading-none">&rarr;</span>
      </button>
    </div>
  )
})
CarouselCustomNav.displayName = "CarouselCustomNav"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  CarouselFraction,
  CarouselCustomNav,
}
