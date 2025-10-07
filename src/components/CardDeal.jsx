import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Transform your business<br className='sm:block hidden'/>with AI-powered IT solutions.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
           Harness the power of Artificial Intelligence to optimize operations, 
          predict market trends, and enhance customer experiences. Our experts 
          design intelligent systems that help businesses innovate, scale, and 
          stay ahead in the digital era.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
