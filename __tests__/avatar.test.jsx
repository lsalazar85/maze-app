/**
 * @jest-environment jsdom
 */

import  { render } from '@testing-library/react'
import Avatar from "@/components/Avatar";

describe('Avatar', () => {
    const state = { x: 1, y: 0 }

    it('should render correctly', () => {
        const { asFragment } = render(<Avatar x={state.x} y={state.y} />);

        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    })

    it('render component without props', () => {
        const { asFragment } = render(<Avatar />);

        expect(asFragment()).toBeDefined();
        expect(asFragment()).toMatchSnapshot();
    })
})