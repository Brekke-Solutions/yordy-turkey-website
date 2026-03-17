import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import AnnouncementBanner from '../components/AnnouncementBanner.jsx'

/**
 * FeatureCard – Small card used in the "Why Yordy?" section.
 */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-brand-cream shadow-sm">
      <div
        className="text-4xl mb-3"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold text-brand-brown mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

/**
 * Home – Primary landing page for Yordy Turkey Farm.
 *
 * Sections:
 *  1. AnnouncementBanner  – seasonal ordering CTA (toggleable)
 *  2. HeroBanner          – headline, tagline, hero image
 *  3. Features            – "Why Yordy?" value proposition cards
 *  4. Order CTA           – prominent call-to-action to the order form
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Seasonal announcement banner */}
      <AnnouncementBanner visible={true} />

      <main id="main-content" className="flex-1">
        {/* Hero section */}
        <HeroBanner />

        {/* Why Yordy? */}
        <section
          className="py-16 sm:py-20 bg-white"
          aria-labelledby="features-heading"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2
              id="features-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-center text-brand-brown mb-4"
            >
              Why Yordy Turkey Farm?
            </h2>
            <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
              For over 40 years, the Yordy family has been raising premium turkeys right here
              in central Illinois.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon="🌿"
                title="Pasture Raised"
                description="Our turkeys roam freely on open pasture, resulting in leaner, more flavorful birds."
              />
              <FeatureCard
                icon="🏡"
                title="Family Farm"
                description="A family-run operation in Morton, IL dedicated to quality and humane animal care."
              />
              <FeatureCard
                icon="🦃"
                title="Fresh, Never Frozen"
                description="Pick up your turkey fresh for maximum flavor and freshness at your holiday table."
              />
            </div>
          </div>
        </section>

        {/* Order CTA section */}
        <section
          className="py-16 sm:py-20 bg-brand-cream"
          aria-labelledby="order-cta-heading"
        >
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2
              id="order-cta-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown mb-4"
            >
              Reserve Your Turkey Today
            </h2>
            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              Thanksgiving turkeys sell out fast. Fill out our simple order form and
              we&apos;ll hold a bird just for you.
            </p>
            <Link
              to="/order-form"
              className="btn-primary text-lg"
              aria-label="Go to the turkey order form"
            >
              Go to Order Form
            </Link>
          </div>
        </section>

        {/* Farm info / contact teaser */}
        <section
          className="py-14 sm:py-16 bg-white"
          aria-labelledby="visit-heading"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2
                  id="visit-heading"
                  className="font-serif text-3xl font-bold text-brand-brown mb-4"
                >
                  Come Visit Us
                </h2>
                <address className="not-italic text-gray-600 space-y-2 mb-6">
                  <p className="font-semibold text-gray-800">Yordy Turkey Farm</p>
                  <p>2000 S. Main Street</p>
                  <p>Morton, IL 61550</p>
                  <p className="mt-3">
                    <a
                      href="tel:3092632891"
                      className="text-brand-brown hover:text-brand-orange transition-colors font-medium"
                    >
                      309-263-2891
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:info@yordyturkey.com"
                      className="text-brand-brown hover:text-brand-orange transition-colors font-medium"
                    >
                      info@yordyturkey.com
                    </a>
                  </p>
                </address>
                <Link
                  to="/hours-contact"
                  className="btn-secondary"
                  aria-label="View our hours and contact information"
                >
                  Hours &amp; Directions
                </Link>
              </div>

              {/* Map placeholder */}
              <div
                className="rounded-xl bg-brand-cream h-56 sm:h-72 flex items-center justify-center text-brand-brown/40"
                aria-label="Farm location map placeholder"
                role="img"
              >
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-sm font-medium">Morton, IL 61550</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
