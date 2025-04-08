import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from '@/app/(frontend)/page'

describe('<HomePage />', () => {
  test('renders the home page with the correct heading', async () => {
    // Render the async HomePage component
    render(await HomePage())

    // Wait for the heading to appear in the document
    await waitFor(() => {
      expect(screen.getByText(/Welcome to Rebecca's Study App/i)).toBeInTheDocument()
    })
  })
})
