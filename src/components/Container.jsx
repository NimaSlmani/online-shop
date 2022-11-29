import React from 'react'

const Container = ({children,bg}) => {
  return (
    <div className={`w-full py-[100px] px-[30px] md:py-[150px] md:px-[50px] lg:px-[60px] ${bg}`}>{children}</div>
  )
}

export default Container