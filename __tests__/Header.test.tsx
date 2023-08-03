import {render,screen} from '@testing-library/react';
import React from 'react';
import Header from '../src/components/Header';
describe(Header,()=>{
         it('should render header', () => {
                  render(<Header/>);
                  const headertext=screen.getByRole('heading',{name:'TODO LIST'});
                  expect(headertext).toBeInTheDocument();
         })
})