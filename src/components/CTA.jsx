import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Accelerate your business with AI-powered IT solutions.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Unlock the full potential of your enterprise through intelligent automation,
          scalable infrastructure, and cutting-edge artificial intelligence. Let’s build
          smarter, faster, and more efficient systems together.        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
