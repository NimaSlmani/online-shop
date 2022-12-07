const Button_Border = ({children,click}) => {
  return (
    <div
        onClick={click} 
        className="
                    flex justify-center items-center text-pruple-200 font-robotoReqular text-14 border-[1.5px] border-pink-400 h-[50px] w-full relative
                    before:content-[''] before:w-[10px] before:h-[10px] before:rounded-full before:bg-pink-500 before:absolute before:z-0 before:transition-all before:opacity-0
                    hover:before:w-full hover:before:h-full hover:before:rounded-none hover:before:opacity-100
                    hover:border-0 hover:text-white
                    ">
                        <span className="relative z-10">{children}</span>
                    </div>
  )
}

export default Button_Border