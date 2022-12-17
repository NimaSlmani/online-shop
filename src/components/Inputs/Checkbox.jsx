
const Checkbox = ({cls,name,theme}) => {
  return (
    <div className={`flex items-center cursor-pointer ${cls}`}>
        <input type="checkbox" name={name} id={name} 
            className={`relative w-[3px] cursor-pointer before:content-[''] before:transition-all before:w-[12px] before:h-[12px] before:border-[1.5px] before:absolute ${theme !== 'light' ? 'before:border-pink-500 before:bg-white checked:before:bg-pink-500' : 'before:border-yellow-200 before:bg-pruple-100 checked:before:bg-yellow-200'}`}
        />
        <label htmlFor={name} className={`text-14 font-euclidReqular ml-[14px] cursor-pointer ${theme !== 'light' ? 'text-black-100' : 'text-gray-400'}`}>Remember me</label>
    </div>
  )
}

export default Checkbox