import { Link } from 'react-router-dom'

/**
 * HeroBanner – Full-width hero section for the homepage.
 * Displays the main headline, tagline, and a farm-themed background.
 */
export default function HeroBanner() {
  return (
    <section
      className="relative bg-brand-brown text-white overflow-hidden"
      aria-label="Hero banner"
    >
      {/* Background overlay pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '10px 10px',
        }}
        aria-hidden="true"
      />

      {/* Farm imagery placeholder (SVG turkey silhouette) */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 400 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          fill="currentColor"
        >
          {/* Stylized turkey silhouette */}
          <ellipse cx="200" cy="200" rx="80" ry="60" />
          <circle cx="200" cy="110" r="40" />
          <ellipse cx="200" cy="90" rx="50" ry="25" transform="rotate(-20 200 90)" />
          <rect x="170" y="240" width="20" height="40" rx="5" />
          <rect x="210" y="240" width="20" height="40" rx="5" />
          <ellipse cx="220" cy="115" rx="15" ry="8" />
          <circle cx="228" cy="110" r="5" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-28 md:py-36">
        <div className="max-w-2xl">
          <p className="text-brand-cream font-semibold uppercase tracking-widest text-sm mb-3">
            Morton, Illinois
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Yordy Turkey Farm
          </h1>
          <p className="text-xl sm:text-2xl text-brand-cream font-serif italic mb-8">
            You&apos;ll taste the difference.
          </p>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
            Locally raised, pasture-grown turkeys delivered straight from our family farm
            to your Thanksgiving table for over 40 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/order-form"
              className="btn-primary text-center"
              aria-label="Order your turkey now"
            >
              Order Your Turkey
            </Link>
            <Link
              to="/about"
              className="btn-secondary text-center"
              aria-label="Learn more about Yordy Turkey Farm"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
