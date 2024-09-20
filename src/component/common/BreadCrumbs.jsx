import React from 'react'
import {Link , useLocation} from 'react-router-dom';

function BreadCrumbs() {

    const {pathname} = useLocation();
    const pathnames = pathname.split('/').filter((x)=> x);
    let breadcrumbPath = "";
    console.log(pathnames);
  return (
    <section>
      <Link to="/" >Home</Link>
      {pathnames.map((name , index)=>{
        breadcrumbPath += `${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast? <span key = {breadcrumbPath}> {' > '} {name}</span> : (<span key={breadcrumbPath}>{' > '}<Link to = {breadcrumbPath}>{name}</Link></span>)
      })}
    </section>
  )
}

export default BreadCrumbs
