import { render, screen, fireEvent } from "@testing-library/react";
// import React from "react";
import TodoInputBox from "../src/components/TodoInputBox";

describe(TodoInputBox, () => {
  it("all the fields are rendered with initial conditions", () => {
    const toggle = jest.fn();
    render(<TodoInputBox toggle={toggle} />);
    const heading = screen.getByText("Add Todo");
    expect(heading).toBeInTheDocument();
    const input = screen.getByPlaceholderText("Enter todo");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    const selectelement = screen.getByLabelText("selectinputcategory");
    expect(selectelement).toBeInTheDocument();
    expect(selectelement).toHaveValue('incompleted');
    const addtaskbutton=screen.getByRole('button',{name:"Add Task"});
    expect(addtaskbutton).toBeInTheDocument();
    const button = screen.getByRole('button',{name:'Cancel'});
    expect(button).toBeInTheDocument();
  });
  it("input fields are changing on Onchange",()=>{
    const toggle = jest.fn();
    render(<TodoInputBox toggle={toggle} />); 
    const input = screen.getByPlaceholderText("Enter todo");
    fireEvent.change(input,{target:{value:'yoyoyoy'}});
//     expect((input as HTMLInputElement).value).toEqual('yoyoyoy');
    expect(input).toHaveValue('yoyoyoy')
  })
  it("the toggle and submit functions are being fired properly",()=>{
         const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
         const toggle = jest.fn();
         render(<TodoInputBox toggle={toggle} />); 
         const input = screen.getByPlaceholderText("Enter todo");
         fireEvent.keyDown(input,{key:'Enter'})
         const button = screen.getByRole('button',{name:'Cancel'});
         const addtaskbutton=screen.getByRole('button',{name:"Add Task"});
         fireEvent.click(button);
         fireEvent.click(addtaskbutton)
         expect(alertMock).toHaveBeenCalledTimes(2)
         expect(toggle).toHaveBeenCalledTimes(3);
  })
  it("submit button is working properly",()=>{
         const toggle = jest.fn();
         render(<TodoInputBox toggle={toggle} />); 
         const input = screen.getByPlaceholderText("Enter todo");
         fireEvent.change(input,{target:{value:'amit'}});
         expect(input).toHaveValue('amit');
         const addtaskbutton=screen.getByRole('button',{name:"Add Task"});
         fireEvent.click(addtaskbutton)
         expect(input).toHaveValue('');
         expect(toggle).toHaveBeenCalledTimes(1);
  })
});
