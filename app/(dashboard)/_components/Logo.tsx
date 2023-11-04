import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image src={'/logo.svg'} alt='logo' height={130} width={130} className=' flex items-center gap-x-2 ml-4' />
    </div>
  )
}

export default Logo