
import { useAnimation, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bannar1 from '../../assets/home1/banner1.svg';
import bannar2 from '../../assets/home1/banner2.svg';
import bannar3 from '../../assets/home1/banner3.svg';

const HomeHerosection = () => {
  // Animation controls



  // Animation variants
  const banner1Animation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const banner2Animation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const banner3Animation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  // Update animations based on inView status


  return (
    <section
      className="w-full py-10 bg-white"

    >
      <div className="w-11/12 mx-auto xmd:w-10/12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Left Main Section */}
          <motion.div
            className="flex flex-col justify-center p-6 rounded-lg text-white-100 lg:col-span-2"
            style={{
              backgroundImage: `url(${bannar1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            initial="hidden"
            animate="visible"
            variants={banner1Animation}
          >
            <div>
              <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Fresh & Healthy <br /> Organic Food
              </h1>
              <div className="p-2 mb-6 text-sm border-l-4 border-yellow-500 sm:text-base md:text-lg lg:text-xl">
                <h2 className="mb-4">Sale up to <span className="p-2 font-bold text-white bg-yellow-500 rounded-lg">30% OFF</span></h2>
                <h3 className="text-sm text-gray-300">Free shipping on all your orders.</h3>
              </div>
            </div>
            <div className="w-full sm:w-[70%] md:w-[50%]">
              <Link
                to="/shop1"
                className="px-4 py-3 font-semibold transition duration-300 rounded-full shadow-lg bg-white-100 text-black-900 hover:bg-primary hover:text-white-100"
              >
                Shop now →
              </Link>
            </div>
          </motion.div>

          {/* Right Small Sections */}
          <div className="flex flex-col space-y-4">
            {/* Top Right */}
            <motion.div
              className="p-6 text-black bg-gray-100 rounded-lg "
              style={{
                backgroundImage: `url(${bannar2})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
              initial="hidden"
              animate="visible"
              variants={banner2Animation}
            >
              <div>
                <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Summer Sale</h2>
                <p className="text-sm font-semibold sm:text-lg md:text-xl">75% OFF</p>
                <p className="text-xs text-gray-600 sm:text-sm">Only Fruit & Vegetable</p>
              </div>
              <div className="w-full sm:w-[70%] md:w-[50%] pb-20 pt-5">
                <Link
                  to="/shop2"
                  className="px-4 py-3 font-semibold transition duration-300 rounded-full shadow-lg text-black-900 bg-white-100 hover:bg-primary hover:text-white-100"
                >
                  Shop now →
                </Link>
              </div>
            </motion.div>

            {/* Bottom Right */}
            <motion.div
              className="flex flex-col items-center justify-center p-6 text-center bg-green-900 rounded-lg sm:p-10 md:px-10"
              style={{
                backgroundImage: `url(${bannar3})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
              initial="hidden"
              animate="visible"
              variants={banner3Animation}
            >
              <div>
                <h2 className="mb-2 text-lg font-bold text-white-100 sm:text-xl md:text-2xl">Best Deal</h2>
                <p className="text-sm text-white-100 sm:text-lg">Special Products Deal of the Month</p>
              </div>

              <div className="w-full sm:w-[70%] md:w-[50%] mt-4 mb-4">
                <Link
                  to="/shop1"
                  className="px-4 py-2 text-sm font-semibold text-center transition duration-300 rounded-full shadow-lg text-primary sm:px-6 sm:py-3 md:text-base md:px-8 md:py-4 hover:bg-white-100"
                >
                  Shop now →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHerosection;
