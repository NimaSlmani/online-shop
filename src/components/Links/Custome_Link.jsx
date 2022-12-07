import Link from "next/link"

const Custome_Link = ({icon,text,path,cls}) => {
  return (
    <Link href={path} className=
                                {`${cls} w-full h-[150px] lg:h-full  bg-yellow-300 text-black-100 flex justify-center items-center flex-col relative
                                before:w-[20px] before:h-[20px] before:border-[1.5px] before:border-pruple-200
                                `}>
        <div className="w-[50px] h-[50px] bg-black-100 text-yellow-300 rounded-bl-[50%] rounded-tl-[50%] rounded-tr-[50%] rounded-br-[5px] flex justify-center items-center">{icon}</div>
        <p className="text-14 font-robotoReqular pt-[10px]">{text}</p>
    </Link>
  )
}

export default Custome_Link