import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // Make sure this import is correct
import bannar1 from '../../assets/home1/banner.png';
import { Link } from 'react-router-dom';

const ProductOffer = () => {
  // Animation controls
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  // Animation variants for right-to-left
  const animationVariants = {
    hidden: { opacity: 0, x: -200 }, // Start from right
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  // Start animation when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section className='relative w-full py-12'>
      <div
        className="w-11/12 xmd:w-10/12 mx-auto flex flex-col items-center p-6 text-white lg:items-end lg:col-span-2 lg:pr-20 rounded-lg"
        style={{
          backgroundImage: `url(${bannar1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <motion.div
      
          className='flex flex-col pt-10 pb-10 lg:pb-10 lg:pr-0'
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={animationVariants}
        >
          <div >
            <h3 className='text-white-100'>SUMMER SALE</h3>
            <h1 className="mt-5 mb-4 text-4xl leading-tight md:text-4xl lg:text-5xl text-white-100">
              <span className='font-semibold text-warning'>37%</span> <span>OFF</span>
            </h1>
            <p className="p-2 mb-6 text-[1rem] text-gray-400">
              Free on all your order, Free Shipping and 30 days<br /> money-back guarantee
            </p>
          </div>
          <div className="flex justify-center w-full mt-6 lg:justify-start lg:mt-0">
            <Link
              to="/shop"
              className="px-4 py-3 font-semibold text-black transition duration-300 rounded-full shadow-lg bg-white-100 hover:bg-primary hover:text-white-100"
            >
              Shop now  →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductOffer;
