import {fireEvent, render,screen} from '@testing-library/react';
// import React from 'react';
import OpenTaskInputButton from '../src/components/OpenTaskInputButton';
describe(OpenTaskInputButton, () => {
  it("renders button with Add task text",()=>{
       const toggle=jest.fn();
       render(<OpenTaskInputButton toggle={toggle} open={false}/>)
       const button=screen.getByRole('button',{name:'Add Task'})
       expect(button).toBeInTheDocument();
  })
  it("renders button with Close text",()=>{
         const toggle=jest.fn();
         render(<OpenTaskInputButton toggle={toggle} open={true}/>)
         const button=screen.getByRole('button',{name:'Close'})
         expect(button).toBeInTheDocument();
    })
    it("On click toggle function is called",()=>{
         const toggle=jest.fn();
         render(<OpenTaskInputButton toggle={toggle} open={true}/>)
         const button=screen.getByRole('button')
         fireEvent.click(button);
         expect(toggle).toHaveBeenCalled();
    })
})
