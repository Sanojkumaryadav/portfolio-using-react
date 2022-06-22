import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio11.jpg'
import IMG2 from '../../assets/portfolio12.jpg'
import IMG3 from '../../assets/portfolio13.jpg'
import IMG4 from '../../assets/portfolio14.jpg'
import IMG5 from '../../assets/portfolio15.jpg'
import IMG6 from '../../assets/portfolio16.jpg'
import IMG7 from '../../assets/portfolio17.jpg'
import IMG8 from '../../assets/portfolio18.jpg'
import IMG9 from '../../assets/portfolio19.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
       <h5>My Recent Work</h5>
       <h2>Portfolio</h2>

       <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
                <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className="portfolio_item-cta">
         <a href="https://github.com" className='btn'  target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
                <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className="portfolio_item-cta">
         <a href="https://github.com" className='btn'  target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
                <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className="portfolio_item-cta">
         <a href="https://github.com" className='btn'  target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
                <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className="portfolio_item-cta">
         <a href="https://github.com" className='btn'  target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
                <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className="portfolio_item-cta">
         <a href="https://github.com" className='btn'  target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
                <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className="portfolio_item-cta">
         <a href="https://github.com" className='btn'  target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
                <img src={IMG7} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className="portfolio_item-cta">
         <a href="https://github.com" className='btn'  target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
                <img src={IMG8} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className="portfolio_item-cta">
         <a href="https://github.com" className='btn'  target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
                <img src={IMG9} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className="portfolio_item-cta">
         <a href="https://github.com" className='btn'  target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
       </div>
    </section>
  )
}

export default Portfolio
