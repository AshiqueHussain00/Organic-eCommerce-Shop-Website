import React from 'react'
import TestimonialCard from '../common/TestimonialCard'
import FollowInstagram from '../common/FollowInstagram';
import customer1 from '../../assets/common/Testimonial/customer1.svg';
import customer2 from '../../assets/common/Testimonial/customer2.svg';
import post1 from '../../assets/common/followinstagram/post1.svg'
import post2 from '../../assets/common/followinstagram/post2.svg'
import post3 from '../../assets/common/followinstagram/post3.svg'
import post4 from '../../assets/common/followinstagram/post4.svg'
import post5 from '../../assets/common/followinstagram/post5.svg'
import post6 from '../../assets/common/followinstagram/post6.svg'

const ClientTestimonials = () => {
    const testimonialsData = [
        {
            name: 'Robert Fox',
            img: customer1,
            role: 'Customer',
            compliment: 'PPellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            rating: 2,
        },
        {
            name: 'Dianne Russell',
            img: customer2,
            role: 'Customer',
            compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            rating: 3,
        },
        {
            name: 'Dianne Russell',
            img: customer2,
            role: 'Customer',
            compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            rating: 4,
        },
        {
            name: 'Dianne Russell',
            img: customer2,
            role: 'Customer',
            compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            rating: 5,
        },
        {
            name: 'Dianne Russell',
            img: customer2,
            role: 'Customer',
            compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            rating: 5,
        },
        {
            name: 'Dianne Russell',
            img: customer2,
            role: 'Customer',
            compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            rating: 5,
        },
        {
            name: 'Dianne Russell',
            img: customer2,
            role: 'Customer',
            compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            rating: 5,
        },
        {
            name: 'Dianne Russell',
            img: customer2,
            role: 'Customer',
            compliment: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
            rating: 5,
        },
    ];
    const instagramImages = [post1, post2, post3, post4, post5, post6];
    return (
        <section data-aos="fade-left" className='relative w-full'>
            <div >
                <TestimonialCard
                    testimonialsData={testimonialsData}
                    showButtons={true}
                    bgColor="rgb(242,242,242)"
                    autoplay={true} // Adjust autoplay as needed
                    showHeading={true}
                    isPagination={true}
                />
                <div className="mt-8">
                    <h2 className="mb-4 text-2xl font-bold text-center">Follow Us on Instagram</h2>
                    <FollowInstagram images={instagramImages} instagramUrl="https://www.instagram.com/yourprofile" />
                </div>
            </div>
        </section>
    )
}

export default ClientTestimonials
