"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	MenuIcon,
	XIcon,
	BookOpen,
	Users,
	Briefcase,
	Target,
	Building,
	Zap,
	Award,
	Layout,
	Settings,
	Hammer,
	Leaf,
	Phone,
	Mail
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuLink,
	type NavItemType,
	NavGridCard,
	NavSmallItem,
	NavLargeItem,
} from '@/components/ui/navigation-menu';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export const aboutLinks: NavItemType[] = [
	{ title: 'Overview', href: '/about', description: 'Learn about our company', icon: BookOpen },
	{ title: 'Founder', href: '/founder', description: 'Meet the visionaries', icon: Users },
	{ title: 'Vision and Mission', href: '/vision-mission', description: 'Our core values', icon: Target },
	{ title: 'Infrastructure', href: '/infrastructure', description: 'State of the art facilities', icon: Building },
	{ title: 'Our Strength', href: '/our-strength', description: 'What sets us apart', icon: Zap },
	{ title: 'Achievements', href: '/achievements', description: 'Awards and recognition', icon: Award },
];

export const serviceLinks: NavItemType[] = [
	{ title: 'Overview', href: '/services', description: 'All engineering solutions', icon: BookOpen },
	{ title: 'Civil & Structural', href: '/services/civil-structural', description: 'Robust structural designs', icon: Building },
	{ title: 'Architectural', href: '/services/architectural', description: 'Innovative space planning', icon: Layout },
	{ title: 'Detailed Engineering', href: '/services/detailed-engineering', description: 'Precision and detail', icon: Settings },
	{ title: 'HVAC', href: '/services/hvac', description: 'Heating and ventilation', icon: Zap },
	{ title: 'Electrical', href: '/services/electrical', description: 'Power systems', icon: Zap },
	{ title: 'Turnkey Execution', href: '/services/turnkey', description: 'End to end solutions', icon: Hammer },
	{ title: 'Green Building Solutions', href: '/services/green-building', description: 'Sustainable designs', icon: Leaf },
];

export default function NavigationMenuDemo() {
	return (
		<header className="sticky top-0 z-50 w-full bg-slate-50 flex flex-col">
			<div
				aria-hidden="true"
				className={cn(
					'absolute inset-0 -z-10 h-full w-full bg-white',
					'bg-[radial-gradient(color-mix(in_oklab,--theme(--color-foreground/.2)30%,transparent)_2px,transparent_2px)]',
					'bg-[size:12px_12px]',
				)}
			/>

			<div className="bg-zinc-900 text-zinc-100 py-1.5 px-4 hidden sm:block">
				<div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-medium">
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-1.5">
							<Phone className="size-3.5" />
							<span>+91 123 456 7890</span>
						</div>
						<div className="flex items-center gap-1.5">
							<Mail className="size-3.5" />
							<span>info@atharvaengineers.com</span>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<Link href="#" className="hover:text-zinc-300 transition-colors"><FaFacebook className="size-3.5" /></Link>
						<Link href="#" className="hover:text-zinc-300 transition-colors"><FaTwitter className="size-3.5" /></Link>
						<Link href="#" className="hover:text-zinc-300 transition-colors"><FaLinkedin className="size-3.5" /></Link>
						<Link href="#" className="hover:text-zinc-300 transition-colors"><FaInstagram className="size-3.5" /></Link>
					</div>
				</div>
			</div>

			<div className="bg-white text-zinc-950 sticky top-0 z-50 w-full border-b shadow-sm">
				<div className="flex h-16 max-w-7xl mx-auto items-center justify-between px-4">
					<div className="flex items-center gap-3">
						<Image src="/image.png" alt="Atharva Engineers Logo" width={40} height={40} className="object-contain" />
						<p className="text-lg sm:text-xl font-bold tracking-wide" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>Atharva Engineers</p>
					</div>
					<DesktopMenu />

					<div className="flex items-center gap-2 lg:hidden">
						<MoileNav />
					</div>
				</div>
			</div>
		</header>
	);
}

function DesktopMenu() {
	return (
		<NavigationMenu className="hidden lg:block">
			<NavigationMenuList className="gap-2">
				<NavigationMenuItem>
					<NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
						<Link href="/">
							Home
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>About Us</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid w-full md:w-[750px] lg:w-[900px] md:grid-cols-[1fr_.40fr]">
							<ul className="grid grow grid-cols-2 gap-4 p-4 md:border-r">
								{aboutLinks.slice(0, 2).map((link) => (
									<li key={link.title}>
										<NavGridCard link={link} className="min-h-36" href={link.href} />
									</li>
								))}
								<div className="col-span-2 grid grid-cols-2 gap-x-4">
									{aboutLinks.slice(2, 4).map((link) => (
										<li key={link.title}>
											<NavLargeItem href={link.href} link={link} />
										</li>
									))}
								</div>
							</ul>
							<ul className="space-y-2 p-4">
								{aboutLinks.slice(4, 6).map((link) => (
									<li key={link.title}>
										<NavLargeItem href={link.href} link={link} />
									</li>
								))}
							</ul>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>Services</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid w-full md:w-[750px] lg:w-[900px] md:grid-cols-[1fr_.30fr]">
							<ul className="grid grow gap-4 p-4 md:grid-cols-3 md:border-r">
								{serviceLinks.slice(0, 3).map((link) => (
									<li key={link.title}>
										<NavGridCard link={link} href={link.href} />
									</li>
								))}
							</ul>
							<ul className="space-y-1 p-4">
								{serviceLinks.slice(3, 8).map((link) => (
									<li key={link.title}>
										<NavSmallItem item={link} href={link.href} className="gap-x-1" />
									</li>
								))}
							</ul>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
						<Link href="/projects">
							Projects
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
						<Link href="/gallery">
							Gallery
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>



				<NavigationMenuItem>
					<NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
						<Link href="/contact">
							Contact Us
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function MoileNav() {
	const dropdowns = [
		{
			id: 'About Us',
			list: aboutLinks,
		},
		{
			id: 'Services',
			list: serviceLinks,
		},
	];

	const singleLinks = [
		{ title: 'Home', href: '/' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'Gallery', href: '/gallery' },

		{ title: 'Contact Us', href: '/contact' },
	];

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="ghost" className="rounded-full lg:hidden">
					<MenuIcon className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent
				className="bg-black/90 supports-[backdrop-filter]:bg-black/60 w-full gap-0 backdrop-blur-xl text-white border-zinc-800"
				showClose={false}
			>
				<div className="flex h-16 items-center justify-between border-b border-zinc-800 px-4">
					<div className="flex items-center gap-3 bg-white/10 p-1.5 rounded-md backdrop-blur-md">
						<Image src="/image.png" alt="Atharva Engineers Logo" width={32} height={32} className="object-contain bg-white rounded-sm p-0.5" />
						<p className="text-lg font-bold tracking-wide pr-2" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>Atharva Engineers</p>
					</div>
					<SheetClose asChild>
						<Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10 hover:text-white">
							<XIcon className="size-5" />
							<span className="sr-only">Close</span>
						</Button>
					</SheetClose>
				</div>
				<div className="container grid gap-y-6 overflow-y-auto px-4 pt-6 pb-12">
					<ul className="grid gap-2">
						{singleLinks.slice(0, 1).map(link => (
							<li key={link.title}>
								<SheetClose asChild>
									<Link href={link.href} className="block py-2 text-base font-semibold">
										{link.title}
									</Link>
								</SheetClose>
							</li>
						))}
					</ul>
					
					<Accordion type="multiple" className="w-full">
						{dropdowns.map((section) => (
							<AccordionItem key={section.id} value={section.id} className="border-b-0">
								<AccordionTrigger className="capitalize py-2 text-base font-semibold hover:no-underline">
									{section.id}
								</AccordionTrigger>
								<AccordionContent className="space-y-1 pb-4">
									<ul className="grid gap-1 pl-4 border-l border-zinc-800">
										{section.list.map((link) => (
											<li key={link.title}>
												<SheetClose asChild>
													<Link href={link.href} className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors">
														{link.title}
													</Link>
												</SheetClose>
											</li>
										))}
									</ul>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>

					<ul className="grid gap-2">
						{singleLinks.slice(1).map(link => (
							<li key={link.title}>
								<SheetClose asChild>
									<Link href={link.href} className="block py-2 text-base font-semibold">
										{link.title}
									</Link>
								</SheetClose>
							</li>
						))}
					</ul>
				</div>
			</SheetContent>
		</Sheet>
	);
}
