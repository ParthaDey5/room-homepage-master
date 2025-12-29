import React from 'react'

function Card2() {
  return (
    <>
    <h1 className="w-full font-bold tracking-tight text-[10rem] lg:text-[3.1rem] leading-[10rem] lg:leading-[3.1rem]">We are available all across the globe </h1>
      <p className="text-[4.45rem] lg:text-[1.135rem] leading-[6rem] lg:leading-[1.55rem] font-semibold tracking-tighter my-15 lg:my-6">
        With stores all over the
    world, it's easy for you to find furniture for your home or place of
    business. Locally, we’re in most major cities throughout the country. Find
    the branch nearest you using our store locator. Any questions? Don't
    hesitate to contact us today.
      </p>
      <button className="w-fit flex items-center gap-20 lg:gap-5 cursor-pointer my-22 lg:my-0">
        <p className="uppercase text-black font-semibold text-[4rem] lg:text-[1rem] tracking-[3.3rem] lg:tracking-[0.9rem]">Shop now</p>
        <img src="/images/icon-arrow.svg" alt="icon-arrow" srcset="" className="w-40 lg:w-10"/>
      </button>
      
    </>
  )
}

export default Card2