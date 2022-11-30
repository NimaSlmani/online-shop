
const Operator_Button = ({Icon}) => {
  return (
    <div className="
                    w-[26px] h-[26px] rounded-full border-pink-500 bg-pink-200 border-[1.5px] text-pink-500 flex justify-center items-center relative cursor-pointer
                    before:absolute before:content-[''] before:w-[50%] before:h-[50%] before:bg-pink-500 before:rounded-full before:transition-all before:opacity-0
                    hover:before:w-full hover:before:h-full hover:before:opacity-100
                    hover:border-0 hover:text-white
    "><Icon className='z-10' size={16}/></div>
  )
}

export default Operator_Button