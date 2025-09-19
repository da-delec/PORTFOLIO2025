import Link from "next/link"

const navigationLinks = [
  { href: "#", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="mclane-grid py-4">
        <div className="col-span-6 md:col-span-8">
          <Link href="#" className="mclane-text-base font-cormorant-light text-white hover:text-gray-300 transition-colors">
            Corentin Delesalle
          </Link>
        </div>
        
        <div className="col-span-6 md:col-span-16 flex justify-end">
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href} 
                className="mclane-text-sm font-cabinet text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}