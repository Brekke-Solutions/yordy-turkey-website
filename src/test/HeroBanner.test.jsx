import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner.jsx'

describe('HeroBanner', () => {
  it('renders the main headline', () => {
    render(
      <MemoryRouter>
        <HeroBanner />
      </MemoryRouter>,
    )
    expect(
      screen.getByRole('heading', { name: /Yordy Turkey Farm/i, level: 1 }),
    ).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(
      <MemoryRouter>
        <HeroBanner />
      </MemoryRouter>,
    )
    expect(screen.getByText(/You'll taste the difference/i)).toBeInTheDocument()
  })

  it('renders the Order Your Turkey CTA link', () => {
    render(
      <MemoryRouter>
        <HeroBanner />
      </MemoryRouter>,
    )
    expect(screen.getByRole('link', { name: /order your turkey/i })).toBeInTheDocument()
  })
})
