import React from 'react'

function Card1() {
  return (
    <>
        <h1 className="w-full font-bold tracking-tight text-[10rem] lg:text-[3.1rem] leading-[10rem] lg:leading-[3.1rem]">Discover innovative ways to decorate</h1>
      <p className="text-[4.45rem] lg:text-[1.135rem] leading-[6rem] lg:leading-[1.55rem] font-semibold tracking-tighter my-15 lg:my-6">
        We provide unmatched quality, comfort, and style for
    property owners across the country. Our experts combine form and function in
    bringing your vision to life. Create a room in your own style with our
    collection and make your property a reflection of you and what you love.
      </p>
      <button className="w-fit flex items-center gap-20 lg:gap-5 cursor-pointer my-22 lg:my-0">
        <p className="uppercase text-black font-semibold text-[4rem] lg:text-[1rem] tracking-[3.3rem] lg:tracking-[0.9rem]">Shop now</p>
        <img src="/images/icon-arrow.svg" alt="icon-arrow" srcset="" className="w-40 lg:w-10"/>
      </button>
      
    </>
  )
}

export default Card1