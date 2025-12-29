import React from 'react'

function Card3() {
  return (
    <>
    <h1 className="w-full font-bold tracking-tight text-[10rem] lg:text-[3.1rem] leading-[10rem] lg:leading-[3.1rem]">Manufactured with the best materials</h1>
      <p className="text-[4.45rem] lg:text-[1.135rem] leading-[6rem] lg:leading-[1.55rem] font-semibold tracking-tighter my-15 lg:my-6">
        Our modern furniture store provide a high level of quality. Our company has
    invested in advanced technology to ensure that every product is made as
    perfect and as consistent as possible. With three decades of experience in
    this industry, we understand what customers want for their home and office.
      </p>
      <button className="w-fit flex items-center gap-20 lg:gap-5 cursor-pointer my-22 lg:my-0">
        <p className="uppercase  text-black font-semibold text-[4rem] lg:text-[1rem] tracking-[3.3rem] lg:tracking-[0.9rem]">Shop now</p>
        <img src="/images/icon-arrow.svg" alt="icon-arrow" srcset="" className="w-40 lg:w-10"/>
      </button>
      
    </>
  )
}

export default Card3