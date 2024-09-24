import React from 'react'

function Footer3() {
  return (
    <section>
         <div className="w-full mx-auto grid grid-cols-7 gap-4 p-16 bg-black-900">
                
                 {/* ABOUT SHOPERY */}
            <div className="col-span-2 p-4">
                <h2 className="text-white-200">About Shopery</h2>
                <p className="text-gray-500">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec</p>
                <div className="flex flex-row gap-2">
                    <p className="text-white-200 border-b-2 border-green-600">(219) 555-0114</p>
                    <p className="text-gray-500">or</p>
                    <p className="text-white-200 border-b-2 border-green-600">Proxy@gmail.com</p>
                </div>
            </div>

               {/* MY ACCOUNT */}
            <div className="col-span-1">
                <h2 className="text-white-">My Account</h2>
                <ul>
                    <li>My Account</li>
                    <li>Order History</li>
                    <li>Shopping Cart</li>
                    <li>Wishlist</li>
                    <li>Settings</li>
                </ul>
            </div>

                 {/* HELPS */}
            <div className="col-span-1">
                <h2>Helps</h2>
                <ul>
                    <li>Contact</li>
                    <li>Faqs</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
                
                {/* PROXY */}
            
            <div className="col-span-1">
                <h2>Proxy</h2>
                <ul>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Product Details</li>
                    <li>Track Order</li>
                </ul>
            </div>

                  {/* DOWNLOAD */}
            <div className="col-span-2">
                <h2>Download our Mobile App</h2>
            </div>
             
         </div>
    </section>
  )
}

export default Footer3
