import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pic1.png'
import IMG2 from '../../assets/pic2.png'
import IMG3 from '../../assets/pic3.png'
import IMG4 from '../../assets/pic4.jpg'
import IMG5 from '../../assets/pic5.jpg'
import IMG6 from '../../assets/pic6.jpg'
const Portfolio = () => {
  const data=[
    {
      id:1,
      image:IMG1,
      title:'Trend Analysis of Attacks Over the Years'
     
     
    },
    {
      id:2,
      image:IMG2,
      title:'Cluster-wise Comparison of Total Attacks',
      
      
    },
    {
      id:3,
      image:IMG3,
      title:'Distribution of Attack Counts Across Clusters',
  
      
    },
    {
      id:4,
      image:IMG4,
      title:'Scatter Plot with Trend Line',

    
    },
    {
      id:5,
      image:IMG5,
      title:'Distribution of Total Attack Counts Across Clusters',
     
  
    },
    {
      id:6,
      image:IMG6,
      title:'Density Plot: Distribution of Attack Counts in 2022',

    }
  ]
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        
        <div className="container portfolio_container">
          {
 data.map((item)=>{
  return(
  <article key={item.id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={item.image} alt="" />
                </div>
                    <h3>{item.title}</h3>
                    <div className="porifolio_item-cta">
                    
                    
                    </div>
            </article>
  )})           
        
}
        </div>
    </section>
  )
}

export default Portfolio
