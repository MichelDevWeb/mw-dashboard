import React from 'react'
import { portfolios } from './PortfolioData'
import PortfolioItem from './PortfolioItem'

const PortfolioList = () => {
  return (
    <div className='portfolio'>
        <div className="portfolio-list">
            {portfolios.map((item) => (
                <PortfolioItem key={item.id} img={item.img} link={item.link} />
            ))}
        </div>
    </div>
  )
}

export default PortfolioList