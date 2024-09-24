import React from 'react';
import about1 from '../../assets/about/about1.svg';

const TrustedOrganicStore = () => {
    return (
        <section className="container flex flex-col-reverse items-center w-10/12 px-4 py-12 mx-auto md:flex-row">
            {/* Text Section */}
            <div className="w-full text-center md:text-left md:w-1/2" data-aos="fade-right">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                    100% Trusted <br /> Organic Food Store
                </h2>
                <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
                    Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
                    Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non
                    massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
                </p>
            </div>

            {/* Image Section */}
            <div className="w-full mb-8 md:w-1/2 md:mb-0"  data-aos="fade-left">
                <img
                    src={about1}
                    alt="Organic Farmer"
                    className="h-auto max-w-full rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default TrustedOrganicStore;
