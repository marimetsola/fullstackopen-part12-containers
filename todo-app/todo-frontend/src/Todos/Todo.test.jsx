import {render, screen} from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
    const todo = {
        text: 'todo testausta varten',
        done: false
    }

    render(<Todo todo={todo} onClickComplete={() => {}} onClickDelete={() => {}}/>)
    
    const element = screen.getByText('todo testausta varten')
    expect(element).toBeDefined()
})