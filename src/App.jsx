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
    <div className="app league-spartan flex flex-col items-center w-full max-width-screen min-h-screen aspect-375/1538 lg:aspect-1440/800">

      {/* Mobile Navigation */}
      <div id='mobile-navigation' className='navigation navigation--mobile absolute inset-0 z-100 bg-black/40 hidden'>
        <div className='navigation__menu w-full h-119 flex items-center px-25 bg-white'>
          <img src="/images/icon-close.svg" className='navigation__toggle w-50' alt="close" onClick={()=>document.getElementById('mobile-navigation').classList.toggle('hidden')}/>
          <ul className="navigation__list ml-75 text-black text-[4.5rem] font-bold flex items-center gap-[6.3rem]">
            <li className="navigation__item"><a href="/">home</a></li>
            <li className="navigation__item"><a href="/shop">shop</a></li>
            <li className="navigation__item"><a href="/about">about</a></li>
            <li className="navigation__item"><a href="/contact">contact</a></li>
          </ul>
        </div>
      </div>

      <section className="layout w-full flex lg:flex-row flex-col items-start justify-start">

        {/* Hero Section */}
        <header className="hero w-full lg:w-[58.5rem] h-380 lg:h-fit relative">
          <nav className="navigation navigation--desktop absolute top-0 w-full h-115 lg:h-38 flex items-center px-25 lg:px-18 z-40">
            <img src="/images/icon-hamburger.svg" alt="icon-hamburger" className="navigation__toggle w-21 lg:hidden" onClick={()=>document.getElementById('mobile-navigation').classList.toggle('hidden')}/>
            <h1 className="navigation__logo ml-120 lg:ml-0 text-white text-[8rem] lg:text-[2rem]">room</h1>
            <ul className="navigation__list lg:flex hidden ml-16 text-white text-[1.1rem] gap-[2.15rem]">
              <li className='navigation__item hover:underline hover:underline-offset-5'><a href="/">home</a></li>
              <li className='navigation__item hover:underline hover:underline-offset-5'><a href="/shop">shop</a></li>
              <li className='navigation__item hover:underline hover:underline-offset-5'><a href="/about">about</a></li>
              <li className='navigation__item hover:underline hover:underline-offset-5'><a href="/contact">contact</a></li>
            </ul>
          </nav>

          {/* Mobile Slider */}
          <div className='hero__slider lg:hidden w-full aspect-[2/1.91] flex transition-transform duration-500 ease-out'
            style={{ transform: `translateX(-${(number - 1) * 100}%)` }}>
            <img src="/images/mobile-image-hero-1.jpg" alt="mobile-hero-1" className="hero__image w-full aspect-[2/1.91]" />
            <img src="/images/mobile-image-hero-2.jpg" alt="mobile-hero-2" className="hero__image w-full aspect-[2/1.91]" />
            <img src="/images/mobile-image-hero-3.jpg" alt="mobile-hero-3" className="hero__image w-full aspect-[2/1.91]" />
          </div>

          {/* Desktop Slider */}
          <div className="hero__slider lg:flex! hidden w-full aspect-2/1.91 lg:h-148 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${(number - 1) * 100}%)` }}>
            <img src="/images/desktop-image-hero-1.jpg" className="hero__image w-full shrink-0" alt="hero1" />
            <img src="/images/desktop-image-hero-2.jpg" className="hero__image w-full shrink-0" alt="hero2" />
            <img src="/images/desktop-image-hero-3.jpg" className="hero__image w-full shrink-0" alt="hero3" />
          </div>

          {/* Mobile Controls */}
          <div className="hero__controls lg:hidden absolute right-0 bottom-0 flex items-center w-118 h-60 Grey800">
            <button className="hero__button hero__button--left w-1/2 flex items-center justify-center" onClick={handleLeft}>
              <img src="/images/icon-angle-left.svg" alt="left" className="w-11"/>
            </button>
            <button className="hero__button hero__button--right w-1/2 flex items-center justify-center" onClick={handleRight}>
              <img src="/images/icon-angle-right.svg" alt="right" className="w-11"/>
            </button>
          </div>
        </header>

        {/* Card Section */}
        <main className="card w-full lg:w-[42rem] lg:h-[37rem] flex flex-col items-start px-35 lg:px-29 pt-65 lg:pt-33 relative bg-white">
          <div className="card__content">
            {number===1?<Card1/>:number===2?<Card2/>:number===3?<Card3/>:null}
          </div>
          <div className="card__controls lg:flex hidden absolute left-0 bottom-0 items-center w-45 h-22 bg-black">
            <button className="card__button card__button--left w-1/2 flex items-center justify-center" onClick={handleLeft}>
              <img src="/images/icon-angle-left.svg" alt="left" className="w-4"/>
            </button>
            <button className="card__button card__button--right w-1/2 flex items-center justify-center" onClick={handleRight}>
              <img src="/images/icon-angle-right.svg" alt="right" className="w-4"/>
            </button>
          </div>
        </main>
      </section>

      {/* About Section */}
      <section className="about w-full flex lg:flex-row flex-col items-start justify-start">
        <div className="about__image about__image--dark w-full lg:w-[30rem] mt-50 lg:mt-0">
          <img src="/images/image-about-dark.jpg" alt="about-dark" className="w-full"/>
        </div>
        <div className="about__content w-full lg:w-[40.5rem] h-full lg:px-10 px-35 pt-55 lg:pt-18">
          <h1 className="about__heading uppercase text-[4rem] lg:text-[1.1rem] tracking-[1.4rem] lg:tracking-[0.47rem] font-bold">About our furniture</h1>
          <p className="about__paragraph text-[4.45rem] lg:text-[1.16rem] leading-[5.9rem] lg:leading-[1.45rem] font-semibold tracking-tighter my-15 lg:my-4">
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
        <div className="about__image about__image--light w-full lg:w-[31rem] mt-30 lg:mt-0">
          <img src="/images/image-about-light.jpg" alt="about-light" className="w-full"/>
        </div>
      </section>
    </div>
  )
}

export default App
