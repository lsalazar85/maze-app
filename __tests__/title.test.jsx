/**
 * @jest-environment jsdom
 */

import {render, screen} from '@testing-library/react'
import Title from "@/components/Title";


describe('Maze', () => {
    const text = 'Maze Game'

    it('should render correctly', () => {
        const { asFragment } = render(<Title title={text} />)

        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    })

    it('should render correctly with title', () => {
        render(<Title title={text} />)

        const title = screen.getByText(/maze game/i)
        expect(title).toBeInTheDocument()
    })
})