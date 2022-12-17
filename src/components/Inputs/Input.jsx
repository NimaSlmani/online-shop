
const Input = ({placeholder,value,onChange,theme}) => <input placeholder={placeholder} onChange={onChange} value={value} className={`text-14 bg-transparent border-b-[1px] pb-2 w-full mb-[20px] ${theme === 'light' ? 'text-gray-100 border-gray-300/90 placeholder:text-gray-300/90 focus:border-gray-200' : 'text-pruple-100 border-gray-800 placeholder:text-gray-700 focus:border-pruple-100'}`} />

export default Input