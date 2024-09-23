import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PiGreaterThanBold } from 'react-icons/pi'
import { GoHome } from 'react-icons/go'


function BreadCrumbs() {
  const { pathname } = useLocation()
  const pathnames = pathname.split('/').filter(x => x)
  let breadcrumbPath = ''
  console.log(pathnames)
  return (
    <section className='h-[100px]  flex items-center banner-bg text-white-100 '>
      <div className='flex items-center mx-auto w-11/12 xmd:w-10/12 p-2 '>
        <Link to='/'>
          <GoHome className='h-[20px] w-[20px] mr-1 ' />
        </Link>
        {pathnames.map((name, index) => {
          breadcrumbPath += `${name}`
          const isLast = index === pathnames.length - 1

          return isLast ? (
            <span
              key={breadcrumbPath}
              className='flex items-center tracking-wider sm:text-lg text-green-600 capitalize'
            >
              <PiGreaterThanBold className='mx-2 text-white-100 text-sm ' />
               {name}
            </span>
          ) : (
            <span
              key={breadcrumbPath}
              className='flex items-center text-white-100'
            >
              <PiGreaterThanBold className='mx-2 text-white-100' />
              <Link to={breadcrumbPath}>{name}</Link>
            </span>
          )
        })}
      </div>
    </section>
  )
}

export default BreadCrumbs
