import FilterTwo from '../../component/shop2/FilterTwo'
import allproductData from '../../data/common/allproductData'
import { IoHomeOutline } from "react-icons/io5";
import Footer1 from '../../component/common/footer/footer1'
import NewsletterThree from '../../component/common/NewsletterThree';
function Shop2() {
  return (
    <section className='relative w-full'>
      {/* Breadcrumbs with Home Icon and Arrow Separator */}
      

      <div className='w-full pb-10 mx-auto lg:w-10/12'>
      <nav className="w-10/12 mx-auto py-3 px-5 mt-2">
        <ul className="flex w-10/12 space-x-2 text-lg text-gray-800">
          {/* Home Icon with Link */}
          <li>
            <a href="/" className="flex items-center hover:underline text-gray-700">
            <IoHomeOutline />
            </a>
          </li>
          {/* Arrow Separator */}
          <li>{'>'}</li>
          {/* Categories Link */}
          <li>
            <a href="/shop1" className="hover:underline text-gray-700">
              Categories
            </a>
          </li>
          {/* Arrow Separator */}
          <li>{'>'}</li>
          {/* Vegetables (current page) */}
          <li className="text-primary">Vegetables</li>
        </ul>
      </nav>
        <FilterTwo products={allproductData} />
      </div>
      <div >
        <NewsletterThree />
      </div>
      <Footer1 />
    </section>

  )
}

export default Shop2