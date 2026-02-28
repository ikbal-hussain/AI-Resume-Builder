import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <CiCircleChevRight
      style={{ width: "40px", height: "40px", color: "black" }}
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    //   <div
    //     className={className}
    //     style={{ ...style, display: "block", background: "red" }}
    //     onClick={onClick}
    //   />
    <CiCircleChevLeft
      style={{ width: "40px", height: "40px", color: "black" }}
      className={className}
      onClick={onClick}
    />
  );
}

export const Rating_carosal = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ],
  };
  let arr = [
    {
      greenstar: [1, 2, 3, 4, 5],

      heading: "Great resumes and coverletters",
      text: "Great resumes and cover letters using AI to tailor job posting & your application documents.",
      date: "Kelly Ann • about 14 hours ago",
    },
    {
      greenstar: [1, 2, 3, 4, 5],

      heading: "Resume94 is a great way to structure a…",
      text: "Resume.io is a great way to structure a resume without worrying about how it looks in advance. Simply keep your details up to do date and when you're done, you can choose from a number of professional looking templates.",
      date: "Leah • about 18 hours ago",
    },
    {
      greenstar: [1, 2, 3, 4, 5],

      heading: "Easy generation of CV and Cover Letter",
      date: "Mercy Wanjiku • 2 days ago",
      text: "The guided generation of content for the CV and Cover Letter and being able to download in PDF formart made everything so easy.",
    },
    {
      greenstar: [1, 2, 3, 4],
      whitestar: 1,
      date: "Prakruthi K P • 2 days ago",
      heading: "The timely assistance is od a great…",
      text: "The timely assistance is od a great help. Also the templates and the features are really helpful.",
    },
    {
      greenstar: [1, 2, 3, 4, 5],
      date: "Brian • 2 days ago",
      heading: "Such an easy to use tool with amazing…",
      text: "Such an easy to use tool with amazing features. Highly recommend.",
    },
  ];
  return (
    <div className="slider-container w-[80%] m-auto">
      <h1 className="heading">
        Reviewed by the community. Trusted by professionals
      </h1>
      <Slider {...settings}>
        {arr.map((ele, i) => {
          return (
            <div className="ratingcard" key={i}>
              <div className="rating">
                {ele.greenstar.map((ele, i) => {
                  return (
                    <img
                      src="https://resume.io/assets/media/star-greenf488e0b79436f4103974.svg"
                      alt=""
                      key={i}
                    />
                  );
                })}
                {ele.whitestar && (
                  <img
                    src="https://resume.io/assets/media/star-graydc909e7ff92914870d42.svg"
                    alt=""
                  />
                )}
              </div>
              <h2>{ele.heading}</h2>
              <p style={{ fontWeight: "600" }}>{ele.text}</p>
              <p>{ele.date}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
