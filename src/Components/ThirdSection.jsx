import React from 'react'
import ThirdSectionCards from './ThirdSectionCards'

const ThirdSection = () => {
  return (
    <div className='py-[7vw]'>
      <p className='text-center font-semibold text-5xl p-8'>Why BloodLink?</p>
      <h1 className='text-center text-3xl font-bold p-5 text-[#FF0000]'>Revolutionizing Blood Donation</h1>
      <p className='text-center font-semibold p-8 text-xl'>BloodLink is not just another platform; it’s a smarter, faster way to connect those in need with life-saving donors.</p>
        <ThirdSectionCards/>
    </div>
  )
}

export default ThirdSection
