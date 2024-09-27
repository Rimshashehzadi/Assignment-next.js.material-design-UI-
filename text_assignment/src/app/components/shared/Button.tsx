import React, { FC } from 'react'

const Button:FC<{text:string}> = ({text}) => {
  return (
    <div>
         <button className="bg-[#7B5AFF] text-white px-6 py-2 rounded-full
     hover:shadow-lg font-medium text-xl hover:scale-105 duration-300  ">{text}</button>
    </div>
  )
}

export default Button