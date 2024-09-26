import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import about3 from '../../assets/about/about3.svg';

const DeliverySection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container flex flex-col items-center justify-between w-10/12 gap-10 mx-auto lg:flex-row">
                {/* Left Content */}
                <div className="w-full text-left lg:w-1/2" data-aos="fade-right">
                    <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                        We Delivered, You Enjoy Your Order.
                    </h2>
                    <p className="mb-6 text-gray-600">
                        Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus.
                    </p>
                    <ul className="mb-6 space-y-2">
                        <li className="flex text-gray-700">
                            <BsCheckCircleFill className="mr-2 text-green-500" size={24} />
                            Sed in metus pellentesque.
                        </li>
                        <li className="flex justify-start text-gray-700">
                            <BsCheckCircleFill className="mr-2 text-green-500" size={24} />
                            Fusce et ex commodo, aliquam nulla efficitur.
                        </li>
                        <li className="flex justify-start text-gray-700">
                            <BsCheckCircleFill className="mr-2 text-green-500" size={24} />
                            Maecenas ut nunc fringilla erat varius.
                        </li>
                    </ul>
                    <div className="flex justify-center lg:justify-start">
                        <button className="px-6 py-3 transition-all rounded-full shadow bg-soft_primary text-white-100 hover:bg-primary">
                            Shop now →
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center w-full lg:w-1/2" data-aos="fade-left">
                    <img
                        src={about3}
                        alt="Delivery"
                        className="object-contain w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default DeliverySection;
