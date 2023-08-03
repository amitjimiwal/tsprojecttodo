import {render,screen} from '@testing-library/react'
import React from 'react'
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
})