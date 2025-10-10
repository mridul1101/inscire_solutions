// import React from 'react'
// import styles from '../style'
// // import { logo } from '../assets'
// import { footerLinks, socialMedia } from '../constants'
// import lOGO from '../assets/lOGO.png' 
// const Footer = () => {
//   return (
//     <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
//       <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
//         <div className='flex-1 flex flex-col justify-start mr-10'>
//           <img
//             src={lOGO}
//             alt='logo'
//             className='w-[266px] h-[172px] object-contain'
//           />
//           <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
//              We are a core IT company delivering intelligent, data-driven solutions.  
//             Our AI-powered services help businesses innovate, automate, and grow 
//             in the digital era.     
//           </p>
//         </div>
//         <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
//           {footerLinks.map((link) => (
//             <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
//               <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
//                 {link.title}
//               </h4>
//               <ul className='list-none mt-4'>
//                 {link.links.map((item, index) => (
//                   <li 
//                     key={item.name} 
//                     className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
//                   >
//                     {item.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
//         <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
//           © {new Date().getFullYear()} Inscire Solutions. All rights reserved.
//         </p>  
//         <div className='flex flex-row md:mt-0 mt-6'>
//           {socialMedia.map((social, index) => (
//             <img
//               src={social.icon}
//               key={social.id}
//               alt={social.id}
//               className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
//             />
//           ))}
//         </div>    
//       </div>
//     </section>
//   )
// }

// export default Footer
import React from 'react'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'
import lOGO from '../assets/lOGO.png'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        
        {/* Left Section - Company Info */}
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
            src={lOGO}
            alt='logo'
            className='w-[266px] h-[172px] object-contain'
          />
          <p className={`${styles.paragraph} mt-4 max-w-[320px]`}>
            We are a core IT company delivering intelligent, data-driven solutions.  
            Our AI-powered services help businesses innovate, automate, and grow 
            in the digital era.
          </p>

          {/* Contact Details */}
          <div className='mt-6 text-dimWhite text-[15px] leading-[24px]'>
            <p className='mb-2'>
              <span className='text-white font-semibold'></span>  
              {' '}Hamirpur,Himachal Pradesh, India
            </p>
            <p className='mb-2'>
              <span className='text-white font-semibold'></span>  
              {' '}<a href='tel:+919816173680' className='hover:text-secondary cursor-pointer'>+91 9816173680</a>
            </p>
            <p>
              <span className='text-white font-semibold'></span>  
              {' '}<a href='mailto:info@insciresolutions.com' className='hover:text-secondary cursor-pointer'>info@insciresolutions.com</a>
            </p>
          </div>
        </div>

        {/* Middle Section - Footer Links */}
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {link.title}
              </h4>
              <ul className='list-none mt-4'>
                {link.links.map((item, index) => (
                  <li 
                    key={item.name} 
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Copyright & Socials */}
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          © {new Date().getFullYear()} Inscire Solutions. All rights reserved.
        </p>  
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              key={social.id}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>    
      </div>
    </section>
  )
}

export default Footer
