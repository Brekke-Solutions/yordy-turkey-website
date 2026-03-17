import { Link } from 'react-router-dom'

/**
 * AnnouncementBanner – Toggleable seasonal CTA banner.
 *
 * @param {object} props
 * @param {boolean} [props.visible=true]  Whether the banner is shown.
 * @param {string}  [props.message]       Custom banner message.
 * @param {string}  [props.ctaLabel]      CTA button text.
 * @param {string}  [props.ctaTo]         React Router destination path for the CTA.
 */
export default function AnnouncementBanner({
  visible = true,
  message = 'Thanksgiving Ordering Now Open',
  ctaLabel = 'Click here to order',
  ctaTo = '/order-form',
}) {
  if (!visible) return null

  return (
    <div
      role="banner"
      aria-label="Seasonal announcement"
      className="bg-brand-orange text-white text-center py-3 px-4"
    >
      <p className="text-sm sm:text-base font-semibold inline">
        {message}
        {' – '}
        <Link
          to={ctaTo}
          className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label={ctaLabel}
        >
          {ctaLabel}
        </Link>
      </p>
    </div>
  )
}
