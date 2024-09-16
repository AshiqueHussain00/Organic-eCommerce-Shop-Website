import React from 'react'
import LatestNews from '../../common/LatestNews'
import img2 from "../../../assets/common/latestnews/img2.svg";
import img3 from "../../../assets/common/latestnews/img3.svg";
import img4 from "../../../assets/common/latestnews/img4.svg";

const HomeLatestNews = () => {
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
  return (
   <section>
    <div>
        <LatestNews data={newsData}/>
    </div>
   </section>
  )
}

export default HomeLatestNews
