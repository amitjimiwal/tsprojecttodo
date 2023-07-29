const SelectCategory = () => {
  return (
    <select className="rounded-xl p-2">
         <option value="all">All</option>
         <option value="incomplete">Incomplete</option>
         <option value="complete">Completed</option>
    </select>
  )
}

export default SelectCategory
