import { useAnimation, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bannar1 from '../../assets/home2/banner.svg';
// import bannar2 from '../../assets/home1/banner2.svg';
// import bannar3 from '../../assets/home1/banner3.svg';

const BannerHome2 = () => {
  // Animation controls
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  // Animation variants
  const banner1Animation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="w-full">
      <div className="w-11/12 xmd:w-10/12 mx-auto">
        <div className="flex flex-col mt-6 gap-4 lg:grid-cols-3">
          {/* Left Main Section */}
          <motion.div
            className="flex flex-col justify-center p-6 rounded-lg text-white-100 lg:col-span-2 h-[500px] md:h-[600px] lg:h-[700px]"
            style={{
              backgroundImage: `url(${bannar1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover', // Use 'cover' to make the image cover the entire area
              backgroundRepeat: 'no-repeat',
            }}
            initial="hidden"
            animate="visible"
            variants={banner1Animation}
          >
            <div>
            <h1 className="mb-8 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
  Fresh & Healthy <br />
  <span className="block mt-2">Organic Food</span>
</h1>


              <div className="p-4 mb-10 text-sm border-l-2 border-primary h-[70px] flex flex-col items-start sm:text-base md:text-lg lg:text-xl">
  <h2 className="mb-1">SALE UP TO</h2>
  <h3 className="text-xl mb-4 font-bold text-gray-300">48% OFF</h3>
</div>

            </div>
            <div className="w-full sm:w-[70%] md:w-[50%]">
              <Link
                to="/shop"
                className="px-4 py-3 font-semibold transition duration-300 rounded-full shadow-lg bg-primary text-white-100 hover:bg-white-100 hover:text-primary"
              >
                Shop now →
              </Link>
            </div>
          </motion.div>

          {/* Right Small Sections */}
        </div>
      </div>
    </section>
  );
};

export default BannerHome2;
