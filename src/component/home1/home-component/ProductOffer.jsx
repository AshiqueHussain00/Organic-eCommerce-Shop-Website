import bannar1 from '../../../assets/home1/banner.png';
import { Link } from 'react-router-dom';

const ProductOffer = () => {
    return (
        <section className='relative w-full pt-5'>
            <div
                className="flex flex-col items-center p-6 text-white lg:items-end lg:col-span-2 lg:pr-20"
                style={{
                    backgroundImage: `url(${bannar1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='flex flex-col pt-10 pb-10 lg:pb-10 lg:pr-0 '>
                    <div className=''>
                        <h3 className='text-white-100'>SUMMER SALE</h3>
                        <h1 className="mt-5 mb-4 text-4xl leading-tight md:text-4xl lg:text-5xl text-white-100">
                          <span className='font-semibold text-warning'>37%</span> <span>OFF</span>
                        </h1>
                        <p className="p-2 mb-6 text-[1rem] text-gray-400">
                            Free on all your order, Free Shipping and 30 days<br/> money-back guarantee
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
                </div>
            </div>
        </section>
    );
}

export default ProductOffer;
