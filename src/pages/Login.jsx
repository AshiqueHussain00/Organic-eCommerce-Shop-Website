import React from 'react'
import BreadCrumbs from '../component/common/BreadCrumbs'
import CreateAccountForm from '../../component/sign/CreateAccount'
import Footer1 from '../component/common/footer/footer1'

function Login() {
  return (
    <div>
        <BreadCrumbs />
         <CreateAccountForm/>
         <NewsletterThree/>
         <Footer1/>
    </div>
  )
}

export default Login
