import React from "react";
import LatestNews from "../../component/common/LatestNews";
import HeaderBottom from "../../component/common/HeaderBottom";
import TestimonialCard from "../../component/common/TestimonialCard";
import FollowInstagram from "../../component/common/FollowInstagram";
import customer1 from "../../assets/common/Testimonial/customer1.svg";
import customer2 from "../../assets/common/Testimonial/customer2.svg";
import post1 from "../../assets/common/followinstagram/post1.svg";
import post2 from "../../assets/common/followinstagram/post2.svg";
import post3 from "../../assets/common/followinstagram/post3.svg";
import post4 from "../../assets/common/followinstagram/post4.svg";
import post5 from "../../assets/common/followinstagram/post5.svg";
import post6 from "../../assets/common/followinstagram/post6.svg";
import Herosection from "../../component/Home5/Herosection";
import newsBG from "../../assets/common/latestnews/newsBG.svg";
import img2 from "../../assets/common/latestnews/img2.svg";
import img3 from "../../assets/common/latestnews/img3.svg";
import img4 from "../../assets/common/latestnews/img4.svg";
import FeaturedProducts from "../../component/Home5/FeaturedProducts";
import "../../index.css";
import Trusted from "../../component/Home5/Trusted";
import HappyCustomer from "../../component/Home5/HappyCustomer";
import TopCategory from "../../component/home3/TopCategory";
import Steps from "../../component/Home5/Steps";
import Newsletter from "../../component/Home5/Newsletter";
import CountdownTimer from "../../component/Home5/CountdownTimer";
import ShowProduct from "../../component/common/ShowProduct";
import BestSeller from "../../component/Home5/BestSeller";

import FilterTwo from "../../component/common/FilterTwo";
import allproductData from "../../data/common/allproductData";
const Home5 = () => {
  // news data

  const newsData = [
    {
      img: img3,
      date: "21 FEB",
      category: "Food",
      postedBy: "Admin",
      comments: 39,
      p: "Maecenas blandit risus elementum mauris malesuada.",
    },
    {
      img: img2,
      date: "23 JAN",
      category: "Fruit",
      postedBy: "Admin",
      comments: 48,
      p: "Maecenas blandit risus elementum mauris malesuada.",
    },
    {
      img: img4,
      date: "18 MAY",
      category: "Food",
      postedBy: "Admin",
      comments: 65,
      p: "Maecenas blandit risus elementum mauris malesuada.",
    },
  ];

  // Testimonial data

  const testimonialsData = [
    {
      name: "Robert Fox",
      img: customer1,
      role: "Customer",
      compliment:
        "PPellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      rating: 2,
    },
    {
      name: "Dianne Russell",
      img: customer2,
      role: "Customer",
      compliment:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      rating: 3,
    },
    {
      name: "Dianne Russell",
      img: customer2,
      role: "Customer",
      compliment:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      rating: 4,
    },
    {
      name: "Dianne Russell",
      img: customer2,
      role: "Customer",
      compliment:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      rating: 5,
    },
    {
      name: "Dianne Russell",
      img: customer2,
      role: "Customer",
      compliment:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      rating: 5,
    },
    {
      name: "Dianne Russell",
      img: customer2,
      role: "Customer",
      compliment:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      rating: 5,
    },
    {
      name: "Dianne Russell",
      img: customer2,
      role: "Customer",
      compliment:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      rating: 5,
    },
    {
      name: "Dianne Russell",
      img: customer2,
      role: "Customer",
      compliment:
        "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      rating: 5,
    },
  ];

  // follow us on instagram data

  const instagramImages = [post1, post2, post3, post4, post5, post6];

  return (
    <section>
      <FilterTwo products={allproductData}/>
      <Herosection autoplay={true} />
     <HeaderBottom
              flexDirection="row"
               alignItems="center"
               justifyContent="center"
/>
      <FeaturedProducts />
      <TopCategory />

      <div
        className="bg-cover  bg-no-repeat w-11/12 xmd:w-10/12 mx-auto  flex flex-col gap-y-4"
        style={{ backgroundImage: `url(${newsBG})` }}
      >
        <h6 className="text-center font-caveat text-[#00B207]">BLOG</h6>
        <h1 className="text-center text-4xl font-[600] font-poppins mb-4">
          Latest News
        </h1>
        <LatestNews data={newsData} />
      </div>


      <Trusted />
     <CountdownTimer/>
     <BestSeller/>
     <ShowProduct/>
      {/* Existing Testimonials Component */}
      <TestimonialCard
        testimonialsData={testimonialsData}
        showButtons={true}
        bgColor="rgb(242,242,242)"
        autoplay={true} // Adjust autoplay as needed
        showHeading={true}
        showPagination={false}
      />
      {/* Instagram Section */}
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-center">
          Follow Us on Instagram
        </h2>
        <FollowInstagram
          images={instagramImages}
          instagramUrl="https://www.instagram.com/yourprofile"
        />
      </div>
      <div className="w-full">
        <HappyCustomer />
      </div>
      <div>
        <Steps />
      </div>
      <div>
        <Newsletter />
      </div>
    </section>
  );
};

export default Home5;