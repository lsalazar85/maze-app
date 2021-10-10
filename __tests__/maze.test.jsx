/**
 * @jest-environment jsdom
 */

import  { render } from '@testing-library/react'
import Maze from "@/components/Maze";

describe('Maze', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Maze />)

        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    })
})