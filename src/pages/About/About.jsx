import React from 'react'
import Members from '../../component/home2/Members'
import AboutTestimonial from './aboutcomponent/Abouttestimonial'
import TrustedOrganicStore2 from './aboutcomponent/TrustedOrganicStore2'
import TrustedOrganicStore from './aboutcomponent/TrustedOrganicStore'
import DeliverySection from './aboutcomponent/DeliverySection'
import NewsletterThree from '../../component/common/NewsletterThree'
import Steps from '../../component/Home5/Steps'

function About() {
  return (
    <div>
        <TrustedOrganicStore/>
        <TrustedOrganicStore2/>
        <DeliverySection/>
      <Members/>
      <AboutTestimonial/>
      <Steps/>
      <NewsletterThree/>
    </div>
  )
}

export default About
