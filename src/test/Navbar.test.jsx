import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    expect(screen.getAllByRole('link', { name: /^Home$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /About/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /Turkey Products/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /Order Form/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /Hours/i }).length).toBeGreaterThan(0)
  })

  it('renders the contact email in the top bar', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    expect(screen.getByText('info@yordyturkey.com')).toBeInTheDocument()
  })

  it('renders the contact phone in the top bar', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    expect(screen.getByText('309-263-2891')).toBeInTheDocument()
  })
})
