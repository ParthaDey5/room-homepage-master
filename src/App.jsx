import { useState } from 'react'
import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'

function App() {
  const [number, setNumber]= useState(1);

  const handleLeft = () => {
  setNumber(prev => prev > 1 ? prev - 1 : 3); // cycle backwards
};

const handleRight = () => {
  setNumber(prev => prev < 3 ? prev + 1 : 1); // cycle forwards
};



  return (
    
     <div className="league-spartan flex flex-col items-center w-full max-width-screen min-h-screen aspect-375/1538 lg:aspect-1440/800">

    
      <div id='mobile-navigation' className='absolute inset-0 z-100 bg-black/40 hidden'>
      <div className='w-full h-119 flex items-center px-25 bg-white'>


<img src="/images/icon-close.svg" className='w-50' alt="" srcset="" onClick={()=>document.getElementById('mobile-navigation').classList.toggle('hidden')}/>
      

        
        <ul className="ml-75 text-black text-[4.5rem] font-bold flex items-center gap-[6.3rem]">
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
      </div>
    
    <section className="w-full flex lg:flex-row flex-col items-start justify-start">
    

    <header className="w-full lg:w-[58.5rem] h-380 lg:h-fit relative">
      <nav className="absolute top-0 w-full h-115 lg:h-38 flex items-center px-25 lg:px-18 z-40">
        <img src="/images/icon-hamburger.svg" alt="icon-hamburger" srcset="" className="w-21 lg:hidden" onClick={()=>document.getElementById('mobile-navigation').classList.toggle('hidden')}/>
        <h1 className="ml-120 lg:ml-0 text-white text-[8rem] lg:text-[2rem]">room</h1>
        <ul className="lg:flex hidden ml-16 text-white text-[1.1rem]  gap-[2.15rem]">
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
      <div className='lg:hidden w-full aspect-[2/1.91] flex transition-transform duration-500 ease-out overflow-hidden'
      style={{ transform: `translateX(-${(number - 1) * 100}%)` }}>

      <img
        src="/images/mobile-image-hero-1.jpg"
        alt="mobile-image-hero-1"
        srcset=""
        className="w-full aspect-[2/1.91]"
        /> 
      <img
        src="/images/mobile-image-hero-2.jpg"
        alt="mobile-image-hero-2"
        srcset=""
        className="w-full aspect-[2/1.91]"
        />
      <img
        src="/images/mobile-image-hero-3.jpg"
        alt="mobile-image-hero-3"
        srcset=""
        className="w-full aspect-[2/1.91]"
        />
        </div>
      
        <div
    className="lg:flex! hidden w-full aspect-2/1.91 lg:h-148 transition-transform duration-500 ease-out overflow-hidden"
    style={{ transform: `translateX(-${(number - 1) * 100}%)` }}
  >
    <img src="/images/desktop-image-hero-1.jpg" className="w-full shrink-0" alt="hero1" />
    <img src="/images/desktop-image-hero-2.jpg" className="w-full shrink-0" alt="hero2" />
    <img src="/images/desktop-image-hero-3.jpg" className="w-full shrink-0" alt="hero3" />
  </div>

      
      <div className="lg:hidden absolute right-0 bottom-0 flex items-center w-118 h-60 Grey800">
       <button className="w-1/2 flex items-center justify-center" onClick={handleLeft}>
          <img src="/images/icon-angle-left.svg" alt="icon-angle-left" srcset="" className="w-11"/>
       </button>
       <button className="w-1/2 flex items-center justify-center" onClick={handleRight}>
        <img src="/images/icon-angle-right.svg" alt="icon-angle-right" srcset="" className="w-11"/>
       </button>
      </div>
    </header>
    <main className="w-full lg:w-[42rem] lg:h-[37rem] flex flex-col items-start px-35 lg:px-29 pt-65 lg:pt-33 relative bg-white">
      {number===1?<Card1/>:number===2?<Card2/>:number===3?<Card3/>:null}
      

      <div className="lg:flex hidden absolute left-0 bottom-0 items-center w-45 h-22  bg-black">
       <button className="w-1/2 flex items-center justify-center"
       onClick={handleLeft}
       >
          <img src="/images/icon-angle-left.svg" alt="icon-angle-left" srcset="" className="w-4"/>
       </button>
       <button className="w-1/2 flex items-center justify-center"
       onClick={handleRight}
       >
        <img src="/images/icon-angle-right.svg" alt="icon-angle-right" srcset="" className="w-4"/>
       </button>
      </div>
    </main>
    </section>
    <section className="w-full flex lg:flex-row flex-col items-start justify-start">
    <div className="w-full lg:w-[30rem] mt-50 lg:mt-0">
      <img src="/images/image-about-dark.jpg" alt="image-about-dark" srcset="" className="w-full"/>
    </div>
    <div className="w-full lg:w-[40.5rem] h-full lg:px-10 px-35 pt-55 lg:pt-18 ">
      <h1 className="uppercase text-[4rem] lg:text-[1.1rem] tracking-[1.4rem] lg:tracking-[0.47rem] font-bold">About our furniture</h1>
      <p className="text-[4.45rem] lg:text-[1.16rem] leading-[5.9rem] lg:leading-[1.45rem] font-semibold tracking-tighter my-15 lg:my-4">
        Our multifunctional collection blends design
    and function to suit your individual taste. Make each room unique, or pick a
    cohesive theme that best express your interests and what inspires you. Find
    the furniture pieces you need, from traditional to contemporary styles or
    anything in between. Product specialists are available to help you create
    your dream space.
      </p>
    </div>
    <div className="w-full lg:w-[31rem] mt-30 lg:mt-0">
      <img src="/images/image-about-light.jpg" alt="image-about-light" srcset="" className="w-full"/>
    </div>
  </section>
    
    
  </div>      
    
  )
}

export default App
