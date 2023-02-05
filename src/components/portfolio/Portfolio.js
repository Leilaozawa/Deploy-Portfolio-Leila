import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

//Information of portfolio

const data = [
  {
    id: 1,
    image : IMG2,
    title: 'PERN application to manage the maintenance of overhead power lines, WEB+Mobile | Elit, Sonelgaz',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 2,
    image : IMG1,
    title: 'PHP application, authentification and dashboard with dynamic graphs | Groupe GITRAMA',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 3,
    image : IMG3,
    title: 'Buiding My Own ChatGPT AI Application using JavaScript and OpenAI, Machine Learning',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 4,
    image : IMG4,
    title: 'PHP CRUD application to manage students',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 5,
    image : IMG5,
    title: 'Social Media MERN Application',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 6,
    image : IMG6,
    title: 'Website elements for Brand presentation',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 7,
    image : IMG2,
    title: 'Youtube Clone React API using RapidAPI',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 8,
    image : IMG1,
    title: 'React Fitness Application',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 9,
    image : IMG3,
    title: 'Buiding My Own ChatGPT AI Application using JavaScript and OpenAI, Machine Learning',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio