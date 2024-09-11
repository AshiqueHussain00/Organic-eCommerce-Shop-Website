import { Link } from 'react-router-dom';
import bannar1 from '../../../assets/home1/banner1.svg';
import bannar2 from '../../../assets/home1/banner2.svg';
import bannar3 from '../../../assets/home1/banner3.svg';

const HomeOneHerosection = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 gap-4 mx-auto lg:grid-cols-3 text-white-100">

          {/* Left Main Section */}
          <div
            className="flex flex-col justify-center p-6 text-white rounded-lg lg:col-span-2"
            style={{
              backgroundImage: `url(${bannar1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div>
              <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Fresh & Healthy <br /> Organic Food
              </h1>
              <p className="p-2 mb-6 text-sm border-l-4 sm:text-base md:text-lg lg:text-xl border-warning">
                <h2 className="mb-4">Sale up to <span className="p-2 font-bold rounded-lg bg-warning text-white-100">30% OFF</span></h2> {/* Increased mb from 2 to 4 */}
                <h3 className="text-sm text-gray-300">Free shipping on all your order.</h3>
              </p>


            </div>
            <div className="w-full sm:w-[70%] md:w-[50%]">
              <Link
                to="/shop"
                className="px-4 py-3 font-semibold transition duration-300 rounded-full shadow-lg text-black-900 bg-white-100 hover:bg-primary hover:text-white-100"
              >
                Shop now →
              </Link>
            </div>
          </div>

          {/* Right Small Sections */}
          <div className="flex flex-col space-y-4">
            {/* Top Right */}
            <div
              className="relative p-6 text-black bg-gray-100 rounded-lg"
              style={{
                backgroundImage: `url(${bannar2})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="text-black-900">
                <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Summer Sale</h2>
                <p className="text-sm font-semibold sm:text-lg md:text-xl">75% OFF</p>
                <p className="text-xs text-gray-600 sm:text-sm">Only Fruit & Vegetable</p>
              </div>
              <div className="w-full sm:w-[70%] md:w-[50%] pb-20 pt-5">
                <Link
                  to="/shop"
                  className="px-4 py-3 font-semibold transition duration-300 rounded-full shadow-lg text-black-900 bg-white-100 hover:bg-primary hover:text-white-100"
                >
                  Shop now →
                </Link>
              </div>
            </div>

            {/* Bottom Right */}
            <div
              className="flex flex-col items-center justify-center p-6 text-center bg-green-900 rounded-lg sm:p-10 md:px-10"
              style={{
                backgroundImage: `url(${bannar3})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div>
                <h2 className="mb-2 text-lg font-bold text-white sm:text-xl md:text-2xl">Best Deal</h2>
                <p className="text-sm text-white sm:text-lg">Special Products Deal of the Month</p>
              </div>

              <div className="w-full sm:w-[70%] md:w-[50%] mt-4 mb-4">
                <Link
                  to="/shop"
                  className="px-4 py-2 text-sm font-semibold text-center transition duration-300 bg-white rounded-full shadow-lg sm:px-6 sm:py-3 md:text-base md:px-8 md:py-4 hover:bg-primary"
                >
                  Shop now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOneHerosection;
