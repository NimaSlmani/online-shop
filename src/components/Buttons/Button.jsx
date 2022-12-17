
const Button = ({text,theme}) => {
  return (
    <button className={`
                        text-14 flex justify-center items-center relative font-robotoMedium h-[50px] w-full ${theme === 'light' ? 'bg-yellow-200 text-black-200' : 'bg-pruple-200 text-gray-200'}
                        before:content-[''] before:w-[10px] before:h-[10px] before:rounded-full before:absolute before:z-0 before:transition-all before:opacity-0 ${theme === 'light' ? 'bg-gray-200' : 'before:bg-pink-500'}
                        hover:before:w-full hover:before:h-full hover:before:rounded-none hover:before:opacity-100
                      `}>
                        <span className="relative z-10">{text}</span>
                      </button>
  )
}

export default Button