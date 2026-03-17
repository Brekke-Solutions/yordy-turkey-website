import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Turkey Products', to: '/turkey-products' },
  { label: 'Order Form', to: '/order-form' },
  { label: 'Hours & Contact', to: '/hours-contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-brand-brown text-white shadow-md">
      {/* Top contact bar */}
      <div className="bg-brand-green text-sm py-2">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-end gap-2 sm:gap-6 items-center">
          <a
            href="mailto:info@yordyturkey.com"
            className="hover:text-brand-cream transition-colors"
            aria-label="Email us"
          >
            info@yordyturkey.com
          </a>
          <a
            href="tel:3092632891"
            className="hover:text-brand-cream transition-colors"
            aria-label="Call us"
          >
            309-263-2891
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo / site name */}
          <Link
            to="/"
            className="text-xl font-serif font-bold hover:text-brand-cream transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cream rounded"
          >
            Yordy Turkey Farm
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex gap-6 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-brand-cream focus:outline-none focus:ring-2 focus:ring-brand-cream rounded px-1 ${
                      isActive ? 'text-brand-cream border-b-2 border-brand-cream' : ''
                    }`
                  }
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 rounded hover:bg-brand-green transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cream"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul
            id="mobile-menu"
            className="md:hidden mt-4 flex flex-col gap-2 list-none m-0 p-0 border-t border-white/20 pt-4"
          >
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded text-sm font-medium transition-colors hover:bg-brand-green focus:outline-none focus:ring-2 focus:ring-brand-cream ${
                      isActive ? 'bg-brand-green text-brand-cream' : ''
                    }`
                  }
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
