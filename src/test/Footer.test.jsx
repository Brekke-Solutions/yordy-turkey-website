import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

describe('Footer', () => {
  it('renders the Facebook link', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    )
    const fbLink = screen.getByRole('link', { name: /facebook/i })
    expect(fbLink).toHaveAttribute('href', 'https://www.facebook.com/YordyTurkeyFarm')
  })

  it('renders the farm address', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    )
    expect(screen.getByText(/2000 S\. Main Street/i)).toBeInTheDocument()
    expect(screen.getByText(/Morton, IL 61550/i)).toBeInTheDocument()
  })

  it('renders footer navigation links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    )
    const nav = screen.getByRole('navigation', { name: /footer navigation/i })
    expect(nav).toBeInTheDocument()
    expect(nav.querySelectorAll('a').length).toBeGreaterThanOrEqual(5)
  })
})
