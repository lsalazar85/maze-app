/**
 * @jest-environment jsdom
 */

import  { render } from '@testing-library/react'
import Avatar from "@/components/Avatar";

describe('Avatar', () => {
    const state = { x: 1, y: 0 }

    it('should render correctly', () => {
        const { asFragment } = render(<Avatar position={state} />);

        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    })
})