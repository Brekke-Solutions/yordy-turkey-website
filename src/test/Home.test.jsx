import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../pages/Home.jsx'

describe('Home page', () => {
  function renderHome() {
    return render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )
  }

  it('renders without crashing', () => {
    expect(() => renderHome()).not.toThrow()
  })

  it('renders the hero headline', () => {
    renderHome()
    expect(
      screen.getByRole('heading', { name: /Yordy Turkey Farm/i, level: 1 }),
    ).toBeInTheDocument()
  })

  it('renders the announcement banner', () => {
    renderHome()
    expect(screen.getByText(/Thanksgiving Ordering Now Open/i)).toBeInTheDocument()
  })

  it('renders a link to the order form', () => {
    renderHome()
    const orderLinks = screen.getAllByRole('link', { name: /order/i })
    expect(orderLinks.length).toBeGreaterThan(0)
    // At least one should point to /order-form
    const hasOrderFormLink = orderLinks.some(
      (link) => link.getAttribute('href') === '/order-form',
    )
    expect(hasOrderFormLink).toBe(true)
  })

  it('renders the navbar', () => {
    renderHome()
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    renderHome()
    expect(screen.getByRole('navigation', { name: /footer navigation/i })).toBeInTheDocument()
  })

  it('renders the farm address in the contact section', () => {
    renderHome()
    // Address appears in the visit section and the footer
    const addressElements = screen.getAllByText(/2000 S\. Main Street/i)
    expect(addressElements.length).toBeGreaterThan(0)
  })
})
