import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PiGreaterThanBold } from 'react-icons/pi'
import { GoHome } from 'react-icons/go'


function BreadCrumbs() {
  const { pathname, state } = useLocation()

 
  const isErrorPage = pathname === '/404' || state?.is404;
  let pathnames = pathname.split('/').filter(x => x)
  let breadcrumbPath = ''
  // console.log(pathnames)



  if (state?.id || state?.productId) {

    pathnames = pathnames.slice(0, pathnames.length -1);

  }


  return (
    <section className='h-[130px]  flex items-center banner-bg text-white-100 '>
      <div data-aos="fade-right" className='flex items-center mx-auto w-11/12 xmd:w-10/12 p-2 '>
        <Link to='/'>
          <GoHome className='h-[20px] w-[20px] mr-1 ' />
        </Link>

        {/* Static breadcrumb for the Error 404 page */}
        {isErrorPage ? (
          <span className='flex items-center tracking-wider sm:text-lg text-green-600 capitalize'>
            <PiGreaterThanBold className='mx-2 text-white-100 text-sm ' />
            Error 404
          </span>
        ) : (
          // Dynamic breadcrumb for other routes
          pathnames.map((name, index) => {
            breadcrumbPath += `/${name}`;
            const isLast = index === pathnames.length-1;

            if (name.includes('-')) {
              name = name.split('-').join(' ');
            }

            return isLast ? (
              <span
                key={breadcrumbPath}
                className='flex items-center tracking-wider text-sm sm:text-lg text-primary capitalize'
              >
                <PiGreaterThanBold className='mx-2 text-white-100 ' />
                {name}
              </span>
            )
              : (
                <span
                  key={breadcrumbPath}
                  className='flex items-center text-white-100 capitalize text-sm sm:text-lg'
                >
                  <PiGreaterThanBold className='mx-2 text-white-100 ' />
                  <Link to={breadcrumbPath}>{name}</Link>
                </span>
              );
          })
        )}


      </div>
    </section>
  )
}

export default BreadCrumbs
