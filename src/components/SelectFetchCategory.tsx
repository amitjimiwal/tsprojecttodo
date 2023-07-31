import React, { useContext } from "react"
import { ConText } from "../context/AppContext"

const SelectFetchCategory = () => {
  const { settype } = useContext(ConText);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    settype(e.target.value);
  }
  return (
    <select className="rounded-xl p-2" onChange={handleChange}>
      <option value="all">All</option>
      <option value="incompleted">Incompleted</option>
      <option value="completed">Completed</option>
    </select>
  )
}

export default SelectFetchCategory
