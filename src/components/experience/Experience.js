import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill  className='experience__details-icon'/> HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill  className='experience__details-icon'/> CSS</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill  className='experience__details-icon'/> JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill  className='experience__details-icon'/> Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill  className='experience__details-icon'/> Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>  
              <div>
                <h4><BsPatchCheckFill  className='experience__details-icon'/> React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill  className='experience__details-icon'/> Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill  className='experience__details-icon'/> MongoDB</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <h4><BsPatchCheckFill  className='experience__details-icon'/> PHP</h4>
              <small className='text-light'>Intermidiate</small>
            </article>
            <article className='experience__details'>   
              <div>
                <h4><BsPatchCheckFill  className='experience__details-icon'/> MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
                <h4><BsPatchCheckFill  className='experience__details-icon'/> Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience