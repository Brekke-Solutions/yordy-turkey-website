import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-brown text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand / about */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-3 text-brand-cream">
              Yordy Turkey Farm
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Fresh, farm-raised turkeys in Morton, IL. You&apos;ll taste the difference.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-3 text-brand-cream">Contact</h3>
            <address className="not-italic text-sm text-gray-300 space-y-1">
              <p>2000 S. Main Street</p>
              <p>Morton, IL 61550</p>
              <p className="mt-2">
                <a
                  href="tel:3092632891"
                  className="hover:text-white transition-colors"
                >
                  309-263-2891
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@yordyturkey.com"
                  className="hover:text-white transition-colors"
                >
                  info@yordyturkey.com
                </a>
              </p>
            </address>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-3 text-brand-cream">Follow Us</h3>
            <a
              href="https://www.facebook.com/YordyTurkeyFarm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              aria-label="Yordy Turkey Farm on Facebook"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
              </svg>
              Facebook
            </a>
            <nav aria-label="Footer navigation" className="mt-4">
              <ul className="text-sm text-gray-300 space-y-1 list-none p-0 m-0">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/turkey-products" className="hover:text-white transition-colors">
                    Turkey Products
                  </Link>
                </li>
                <li>
                  <Link to="/order-form" className="hover:text-white transition-colors">
                    Order Form
                  </Link>
                </li>
                <li>
                  <Link to="/hours-contact" className="hover:text-white transition-colors">
                    Hours &amp; Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-center text-xs text-gray-400">
          <p>
            &copy; {currentYear} Yordy Turkey Farm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
