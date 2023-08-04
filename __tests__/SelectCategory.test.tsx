import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import SelectFetchCategory from "../src/components/SelectFetchCategory";
import SelectInputCategory from "../src/components/SelectInputCategory";
import AppContext from "../src/context/AppContext";

describe("category test", () => {
  it("render fetch category properly", () => {
    render(
      <AppContext>
        <SelectFetchCategory />
      </AppContext>
    );
    const selectelement = screen.getByLabelText("selectfetchcategory");
    expect(selectelement).toBeInTheDocument();
    const option = screen.getAllByRole("option");
    expect(option.length).toEqual(3);
  });
  it("render input category properly", () => {
    const setcategory = jest.fn();
    render(<SelectInputCategory setcatagory={setcategory} />);
    const selectelement = screen.getByLabelText("selectinputcategory");
    expect(selectelement).toBeInTheDocument();
    const option = screen.getAllByRole("option");
    expect(option.length).toEqual(2);
  });
  it("should call the update function on Onchange in input and input is being changed", () => {
    const setcategory = jest.fn();
    render(<SelectInputCategory setcatagory={setcategory} />);
    const selectelement = screen.getByLabelText("selectinputcategory");
    fireEvent.change(selectelement, { target: { value: "incompleted" } });
    expect(selectelement).toHaveValue("incompleted");
    fireEvent.change(selectelement, { target: { value: "completed" } });
    expect(selectelement).toHaveValue("completed");
    expect(setcategory).toHaveBeenCalledTimes(2);
  });
  it("should call the update function on Onchange in fetch and change the value", () => {
    render(
      <AppContext>
        <SelectFetchCategory />
      </AppContext>
    );
    const selectelement = screen.getByLabelText("selectfetchcategory");
    expect(selectelement).toHaveValue("all")
    fireEvent.change(selectelement, { target: { value: "incompleted" } });
    expect(selectelement).toHaveValue("incompleted");
    fireEvent.change(selectelement, { target: { value: "completed" } });
    expect(selectelement).toHaveValue("completed");
  });
});
