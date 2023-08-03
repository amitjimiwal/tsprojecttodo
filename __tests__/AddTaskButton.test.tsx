import {fireEvent, render,screen} from '@testing-library/react'
import React from 'react';

import AddTaskButton from '../src/components/AddTaskButton';

describe(AddTaskButton,()=>{
         test('should render and all buttons are working', () => {
                  const mocksubmitfunction=jest.fn();
                  const mocktogglefunction=jest.fn();
                  render(<AddTaskButton submit={mocksubmitfunction} toggle={mocktogglefunction}/>);
                  const addtaskbutton=screen.getByRole('button',{name:"Add Task"});
                  expect(addtaskbutton).toBeInTheDocument();
                  fireEvent.click(addtaskbutton);
                  expect(mocksubmitfunction).toHaveBeenCalled();
                  expect(mocktogglefunction).toHaveBeenCalled();
         })
})