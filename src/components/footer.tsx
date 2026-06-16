import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 md:py-24 border-t border-zinc-900">
      <div className="max-w-[1400px] mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-start">
            <h3 className="text-2xl font-black text-white tracking-tighter mb-6 uppercase">Atharva Engineers</h3>
            <p className="text-sm leading-relaxed mb-8">
              Delivering excellence in engineering, structural design, and turnkey execution. Transforming visions into reality with uncompromising precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-sky-500 transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors text-sm">Sectors</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors text-sm">Careers</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-sky-500 transition-colors text-sm">Conceptual Design</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors text-sm">Basic & Detail Engineering</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors text-sm">Procurement Assistance</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors text-sm">Construction Management</Link></li>
              <li><Link href="#" className="hover:text-sky-500 transition-colors text-sm">Turnkey Execution</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">123 Engineering Blvd, Suite 400<br/>Tech District, Innovation City 90210</span>
              </li>
              <li className="flex items-center gap-4">
                <svg className="w-5 h-5 text-sky-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+18005550199" className="text-sm hover:text-sky-500 transition-colors">+1 (800) 555-0199</a>
              </li>
              <li className="flex items-center gap-4">
                <svg className="w-5 h-5 text-sky-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@atharvaengineers.com" className="text-sm hover:text-sky-500 transition-colors">contact@atharvaengineers.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Atharva Engineers. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
