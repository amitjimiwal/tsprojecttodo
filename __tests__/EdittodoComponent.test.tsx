import {fireEvent, render,screen} from '@testing-library/react';
import React from 'react';
import EditTodoComponent from '../src/components/EditTodoComponent';

describe(EditTodoComponent, () => {
  it("should render properly with props",()=>{
         const function1=jest.fn();
         const function2=jest.fn();
         render(<EditTodoComponent handleUpdate={function1} setCurrenttitle={function2} currentTitle='test case'/>)
         const input=screen.getByLabelText('edit-todo');
         expect(input).toHaveAttribute("type", "text");
         const editbutton=screen.getByTestId("callupdate");
         expect(editbutton).toBeInTheDocument();
         expect(input).toBeInTheDocument();
  })
  it("should call update function when we click on edit and Enter key press and should call change function when we change input",()=>{
         const function1=jest.fn();
         const function2=jest.fn();
         render(<EditTodoComponent handleUpdate={function1} setCurrenttitle={function2} currentTitle='test case'/>);
         const input=screen.getByLabelText('edit-todo');
         const editbutton=screen.getByTestId("callupdate");
         fireEvent.keyDown(input,{key:"Enter"})
         fireEvent.click(editbutton);
         fireEvent.change(input,{target:{value:"test"}});
         expect(function2).toHaveBeenCalled();
         expect(function1).toHaveBeenCalledTimes(2);
  })
})
