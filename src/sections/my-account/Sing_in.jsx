import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"
import { setLogin_page_check } from "../../features/slices/style_slice"

import Primary_Title from "../../components/Text/Primary_Title"
import Button from "../../components/Buttons/Button"
import Input from "../../components/Inputs/Input"
import Checkbox from "../../components/Inputs/Checkbox"

const Sing_in = () => {
  let [theme,setTheme] = useState('light')
  let dispatch = useDispatch()

  useEffect(()=>{
    if(window.innerWidth >= 1024){
        setTheme('dark')
    }
  },[])

  return (
    <div className="pt-[170px] relative z-20 lg:pt-[60px]">
      <Primary_Title text="Login" theme={theme}/>
      <form className="pt-3 lg:w-3/12">
          <Input placeholder="Email..." theme={theme}/>
          <Input placeholder="Password..." theme={theme}/>
          <Checkbox name="remember" theme={theme} cls='mb-[20px]'/>
          <Button text='Submit' theme={theme} />
          <p className={`text-14 font-euclidReqular mt-[15px] ${theme === 'light' ? 'text-gray-300' : 'text-black-100'}`}>
              Ut Enim Ad Minim Veniam, Quis? <span onClick={()=>dispatch(setLogin_page_check(false))} className={theme === 'light' ? 'text-yellow-200 cursor-pointer' : 'text-pruple-200 cursor-pointer'}>Register</span>
          </p>
      </form>
    </div>
  )
}

export default Sing_in