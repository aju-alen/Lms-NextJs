import React from 'react'

const Authlayout = ({children}:{children:React.ReactNode}) => {
  return (

    <div className=' h-full flex justify-center items-center bg-fuchsia-200'>
      {children}
    </div>
  )
}

export default Authlayout