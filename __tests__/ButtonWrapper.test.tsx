import {fireEvent, render,screen} from '@testing-library/react';
// import React from 'react';
import ButtonWrapper from '../src/components/ButtonWrapper';

describe(ButtonWrapper,()=>{
         it('Should render the button with child', () => {
                  render(<ButtonWrapper>Click Me</ButtonWrapper>);
                  const button = screen.getByRole('button',{name:'Click Me'});
                  expect(button).toBeInTheDocument();
         });
         it('Should call the toggle function on click', () => {
                  const toggle=jest.fn();
                  render(<ButtonWrapper toggle={toggle}>Click Me</ButtonWrapper>);
                  const button = screen.getByRole('button',{name:'Click Me'});
                  fireEvent.click(button);
                  expect(toggle).toHaveBeenCalled();
         });
})
