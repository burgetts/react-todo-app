import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import Todo from './Todo'

it('renders without crashing', function () {
    render(<Todo text="test this component" />)
})

it('matches snapshot', function () {
    const {asFragment} = render(<Todo text="test this component" />)
    expect(asFragment()).toMatchSnapshot()
})