import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import TodoList from './TodoList'

it('renders without crashing', function () {
    render(<TodoList  />)
})

it('matches snapshot', function () {
    const {asFragment} = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot()
})

it('adds to do', function() {
    const {getByLabelText, getByText, queryByText} = render(<TodoList />)
    const input = getByLabelText('To do:')
    const btn = getByText('Add')

    expect(queryByText('laundry')).not.toBeInTheDocument()
    fireEvent.change(input, {target: {value: 'laundry'}})
    fireEvent.click(btn)

    expect(getByText('laundry')).toBeInTheDocument()
})

it('deletes to do', function() {
    const {getByLabelText, getByText, queryByText} = render(<TodoList />)
    const input = getByLabelText('To do:')
    const btn = getByText('Add')

    fireEvent.change(input, {target: {value: 'laundry'}})
    fireEvent.click(btn)

    expect(getByText('laundry')).toBeInTheDocument()

    const deleteBtn = getByText('❌')
    fireEvent.click(deleteBtn)
    expect(queryByText('laundry')).not.toBeInTheDocument()
})