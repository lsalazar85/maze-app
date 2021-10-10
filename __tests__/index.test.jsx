/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from "../pages";

beforeEach(() => {
  render(<Home />);
})

describe('Home', () => {
  it('should render correctly with title', () => {
    const title = screen.getByText(/maze game/i)
    expect(title).toBeInTheDocument()
  })
})
