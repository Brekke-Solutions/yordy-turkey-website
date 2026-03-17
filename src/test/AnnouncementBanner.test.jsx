import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AnnouncementBanner from '../components/AnnouncementBanner.jsx'

describe('AnnouncementBanner', () => {
  it('renders the default message and CTA when visible', () => {
    render(
      <MemoryRouter>
        <AnnouncementBanner visible={true} />
      </MemoryRouter>,
    )
    expect(screen.getByText(/Thanksgiving Ordering Now Open/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /click here to order/i })).toBeInTheDocument()
  })

  it('does not render when visible is false', () => {
    const { container } = render(
      <MemoryRouter>
        <AnnouncementBanner visible={false} />
      </MemoryRouter>,
    )
    expect(container).toBeEmptyDOMElement()
  })

  it('renders a custom message', () => {
    render(
      <MemoryRouter>
        <AnnouncementBanner visible={true} message="Christmas Orders Open" ctaLabel="Order now" />
      </MemoryRouter>,
    )
    expect(screen.getByText(/Christmas Orders Open/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /order now/i })).toBeInTheDocument()
  })

  it('CTA link points to /order-form by default', () => {
    render(
      <MemoryRouter>
        <AnnouncementBanner visible={true} />
      </MemoryRouter>,
    )
    const link = screen.getByRole('link', { name: /click here to order/i })
    expect(link).toHaveAttribute('href', '/order-form')
  })
})
