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
                <div className='flex flex-col items-start pt-10 pb-10 lg:pb-10 lg:pr-0'>
                    <div className=''>
                        <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl text-white-100">
                            Fresh & Healthy <br /> Organic Food
                        </h1>
                        <p className="p-2 mb-6 text-sm text-gray-300 ">
                            Free on all your order, Free Shipping and 30 days money-back guarantee
                        </p>
                    </div>
                    <div className="flex justify-center w-full mt-6 lg:justify-start lg:mt-0">
                        <Link
                            to="/shop"
                            className="px-4 py-3 font-semibold text-black transition duration-300 rounded-full shadow-lg bg-white-100 hover:bg-primary hover:text-white-100"
                        >
                            Shop now →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductOffer;
