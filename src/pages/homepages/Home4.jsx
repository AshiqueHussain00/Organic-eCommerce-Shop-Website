import HeroBottom4 from '../../component/home4/HeroBottom4'
import ProductSection from '../../component/home4/ProductSection'
import Banner from '../../component/home4/Banner'
import BestDealSection from '../../component/home4/BestDealSection'
import FeaturedProduct from '../../component/home4/FeaturedProduct'
import TestimonialSection from '../../component/home4/TestimonialSection'
import VideoSection from '../../component/home4/VideoSection'
import LatestNewsSection from '../../component/home4/LatestNewsSection'

const Home4 = () => {
  return (
    <div>
      <HeroBottom4 />
      <ProductSection />
      <Banner />
      <BestDealSection />
      <FeaturedProduct />
      <div className='relative '>
        <TestimonialSection />

     
       <VideoSection/>
       <LatestNewsSection/>


        {/* ------------- white section---------- */}
        <div className='w-full h-[1000px] xxs:h-[1150px] xsm:h-[1100px] xs:h-[1000px] ssm:h-[1120px] md:h-[1400px] xmd:h-[730px] lg:h-[800px] xxl:h-[900px] bg-white-100  relative z-10'>

         

        </div>

        {/* ---------- light green section ----------- */}
        <div className='w-full xmd:h-[350px] h-[900px] xxl:h-[400px] bg-green-gray-scale-50 b relative z-10'>

        </div>

      


      </div>


   


    </div>
  )
}

export default Home4