import React from 'react'
import {Link , useLocation} from 'react-router-dom';
import { PiGreaterThanBold } from 'react-icons/pi';
import { GoHome } from 'react-icons/go';

function BreadCrumbs() {

    const {pathname} = useLocation();
    const pathnames = pathname.split('/').filter((x)=> x);
    let breadcrumbPath = "";
    console.log(pathnames);
  return (
    <section>
        <div className=" w-10/12 p-2 flex ">
        <Link to="/" ><GoHome className="h-[20px] w-[20px] mr-1 "/></Link>
      {pathnames.map((name , index)=>{
        breadcrumbPath += `${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast? <span key = {breadcrumbPath} className="flex items-center text-green-600"><PiGreaterThanBold className="mx-2 text-gray-700"/> {name}</span> : (<span key={breadcrumbPath} className="flex items-center text-gray-700"><PiGreaterThanBold  className="mx-2 text-gray-700"/><Link to = {breadcrumbPath}>{name}</Link></span>)
      })}
        </div>
      
    </section>
  )
}

export default BreadCrumbs
