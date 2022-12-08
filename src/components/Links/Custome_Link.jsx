import {Link} from 'react-scroll'

const Custome_Link = ({icon,text,path,cls,offset}) => {
  return (
    <Link smooth={true} offset={offset} to={path} className=
                                {`${cls} w-full h-[150px] lg:h-full  bg-yellow-300 text-black-100 flex justify-center items-center relative cursor-pointer
                                before:w-[20px] before:h-[20px] before:border-[1.5px] before:border-black-100 before:rounded-full before:absolute before:z-0 before:opacity-0 before:transition-all
                                hover:before:opacity-100 hover:before:w-full hover:before:h-full hover:before:rounded-none
                                `}>
                                  <div className="flex flex-col items-center relative">
                                    <div className="w-[50px] h-[50px] bg-black-100 text-yellow-300 rounded-bl-[50%] rounded-tl-[50%] rounded-tr-[50%] rounded-br-[5px] flex justify-center items-center">{icon}</div>
                                    <p className="text-14 font-robotoMedium pt-[10px]">{text}</p>
                                  </div>
    </Link>
  )
}

export default Custome_Link