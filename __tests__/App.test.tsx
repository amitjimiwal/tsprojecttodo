import { fireEvent, render, screen } from "@testing-library/react";
// import React from "react";
import App from "../src/App";

describe(App, () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it("jest runnning", () => {
    expect(true).toBe(true);
  });
  it("root div is rendered without crashing", () => {
    render(<App />);
    const rootdiv = screen.getByTestId("rootdiv");
    expect(rootdiv).toBeInTheDocument();
  });
  it("todo input box is opening on clicking and closing", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Add Work" });
    fireEvent.click(button);
    const heading = screen.getByText("Add Todo");
    expect(heading).toBeInTheDocument();
  });
  it("on clicking the add task button todo is added in the local storage", () => {
    // beforeEach(() => {
    //          window.localStorage.clear();
    // });
    render(<App />);
    const button = screen.getByRole("button", { name: "Add Work" });
    fireEvent.click(button);
    const input = screen.getByPlaceholderText("Enter todo");
    fireEvent.change(input, { target: { value: "yoyoyoy" } });
    const addtaskbutton = screen.getByRole("button", { name: "Add Task" });
    fireEvent.click(addtaskbutton);
    const todoitem = screen.getByText("yoyoyoy");
    expect(todoitem).toBeInTheDocument();
  });
  it("on deleting the task button todo is deleted in the local storage", () => {
    // beforeEach(() => {
    //          window.localStorage.clear();
    // });
    render(<App />);
    const button = screen.getByRole("button", { name: "Add Work" });
    fireEvent.click(button);
    const input = screen.getByPlaceholderText("Enter todo");
    fireEvent.change(input, { target: { value: "amit" } });
    const addtaskbutton = screen.getByRole("button", { name: "Add Task" });
    fireEvent.click(addtaskbutton);
    const todoitem = screen.getByText("amit");
    const deletebutton = screen.getAllByTestId("deletebutton");
    fireEvent.click(deletebutton[0]);
    expect(todoitem).not.toBeInTheDocument();
  });
  it("on checking the checkbox button status is updated", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Add Work" });
    fireEvent.click(button);
    const input = screen.getByPlaceholderText("Enter todo");
    fireEvent.change(input, { target: { value: "amit" } });
    const addtaskbutton = screen.getByRole("button", { name: "Add Task" });
    fireEvent.click(addtaskbutton);
    const checkbox = screen.getByTestId("istaskcompleted");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    const todoitem = screen.getByText("amit");
    expect(todoitem.outerHTML).toEqual("<s>amit</s>");
    fireEvent.click(checkbox);
    const todoitem2 = screen.getByText("amit");
    expect(todoitem2.outerHTML).toEqual('<h3 class="tracking-wide">amit </h3>');
  });
  it("on edit the task is updated",()=>{
         render(<App />);
         const button = screen.getByRole('button',{name:'Add Work'})
         fireEvent.click(button)
         const input=screen.getByPlaceholderText('Enter todo')
         fireEvent.change(input,{target:{value:"amit"}})
         const addTaskButton=screen.getByRole('button',{name:'Add Task'})
         fireEvent.click(addTaskButton);
         const edittodobutton = screen.getByTestId("edittodobutton");
         fireEvent.click(edittodobutton);
         const editinput=screen.getByLabelText('edit-todo');
         fireEvent.change(editinput,{target:{value:"test amit"}});
         const updatetodo=screen.getByTestId("callupdate");
         fireEvent.click(updatetodo);
         expect(screen.getByText('test amit')).toBeInTheDocument();
  })
});
