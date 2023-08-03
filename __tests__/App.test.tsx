import {fireEvent, render,screen} from '@testing-library/react'
// import React from 'react'
import App from '../src/App'

describe(App,()=>{
         it("jest runnning",()=>{
                  expect(true).toBe(true);
         })
         it('root div is rendered without crashing',()=>{
                  render(<App/>)
                  const rootdiv=screen.getByTestId("rootdiv")
                  expect(rootdiv).toBeInTheDocument();
         })
         it("todo input box is opening on clicking and closing",()=>{
                  render(<App/>);
                  const button=screen.getByRole('button',{name:'Add Task'})
                  fireEvent.click(button);
                  const heading = screen.getByText("Add Todo");
                  expect(heading).toBeInTheDocument();
         })
         it("on clicking the add task button todo is added in the local storage")
})