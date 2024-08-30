// import Carousel from 'react-elastic-carousel'
// import {Item} from "react-elastic-carousel"


// export const Ratting=()=>{
    
//     let arr=[
//         {
//             greenstar:[1,2,3,4],
//             whitestar:1,
//             heading:"Great resumes and coverletters",
//             text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
//         },
//         {
//             greenstar:[1,2,3,4],
//             whitestar:1,
//             heading:"Great resumes and coverletters",
//             text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
//         },
//         {
//             greenstar:[1,2,3,4],
//             whitestar:1,
//             heading:"Great resumes and coverletters",
//             text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
//         },
//         {
//             greenstar:[1,2,3,4],
//             whitestar:1,
//             heading:"Great resumes and coverletters",
//             text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
//         },
//         {
//             greenstar:[1,2,3,4],
//             whitestar:1,
//             heading:"Great resumes and coverletters",
//             text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
//         },
//         {
//             greenstar:[1,2,3,4],
//             whitestar:1,
//             heading:"Great resumes and coverletters",
//             text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
//         },

//         {
//             greenstar:[1,2,3,4],
//             whitestar:1,
//             heading:"Great resumes and coverletters",
//             text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
//         },
//         {
//             greenstar:[1,2,3,4],
//             whitestar:1,
//             heading:"Great resumes and coverletters",
//             text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
//         },{
//             greenstar:[1,2,3,4],
//             whitestar:1,
//             heading:"Great resumes and coverletters",
//             text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
//         },


        
//     ]
//     return(
//         <div id="rating_container">
//             <div id="inner_rating">
//                 <button className="Crousal_btn">-</button>
//                 <div id="crausal">
                
//                 {/* {
//                     arr.map((ele,i)=>{
//                         return(
//                             <div style={{width: "500px",border:"1px solid"}} key={i}>
//                     <div className="rating">
//                         {
//                             ele.greenstar.map((ele,i)=>{
//                                 return(
//                                     <img src="https://resume.io/assets/media/star-greenf488e0b79436f4103974.svg" alt="" key={i}/>
//                                 )
//                             })
//                         }

// <img src="https://resume.io/assets/media/star-greenf488e0b79436f4103974.svg" alt="" />
                       
//                     </div>
//                     <h2>{ele.heading}</h2>
//                     <p>{ele.text}</p>
//                 </div>
//                         )
//                     })
//                 } */}
//                 <Carousel itemsToShow={2}>
//   <Item><img src="/s1.png" alt="" /></Item>
//   <Item><img src="/s1.png" alt="" /></Item>
//   <Item><img src="/s1.png" alt="" /></Item>
//   <Item><img src="/s1.png" alt="" /></Item>
//   <Item>5</Item>
//   <Item>6</Item>
// </Carousel>
                
//                 <img src="/s1.png" alt="" />

//                 <img src="/s1.png" alt="" />
//                 <img src="/s1.png" alt="" />
//                 <img src="/s1.png" alt="" />
//                 <img src="/s1.png" alt="" />
//                 <img src="/s1.png" alt="" />
//                 <img src="/s1.png" alt="" />
                
                
//             </div>
//             <button className="Crousal_btnplus" >+</button>
//             </div>

//         </div>
//     )
// }




import React, { useState } from "react";
// import "./Carousel.css"; // Import your CSS file for styling

export const Ratting = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { title: "Card 1", text: "This is card number 1" },
        { title: "Card 2", text: "This is card number 2" },
        { title: "Card 3", text: "This is card number 3" },
        { title: "Card 4", text: "This is card number 4" },
        { title: "Card 5", text: "This is card number 5" },
        { title: "Card 6", text: "This is card number 6" },
    ];
    let arr=[
                {
                    greenstar:[1,2,3,4],
                    whitestar:1,
                    heading:"Great resumes and coverletters",
                    text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
                },
                {
                    greenstar:[1,2,3,4,5],
                    whitestar:1,
                    heading:"Great resumes and coverletters",
                    text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
                },
                {
                    greenstar:[1,2,3,4,6],
                    whitestar:1,
                    heading:"Great resumes and coverletters",
                    text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
                },
                {
                    greenstar:[1,2,3,4,6,7,7],
                    whitestar:1,
                    heading:"Great resumes and coverletters",
                    text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
                },
                {
                    greenstar:[1,2,3,4],
                    whitestar:1,
                    heading:"Great resumes and coverletters",
                    text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
                },
                {
                    greenstar:[1,2,3,4],
                    whitestar:1,
                    heading:"Great resumes and coverletters",
                    text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
                },
        
                {
                    greenstar:[1,2,3,4],
                    whitestar:1,
                    heading:"Great resumes and coverletters",
                    text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
                },
                {
                    greenstar:[1,2,3,4],
                    whitestar:1,
                    heading:"Great resumes and coverletters",
                    text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
                },{
                    greenstar:[1,2,3,4],
                    whitestar:1,
                    heading:"Great resumes and coverletters",
                    text:"Great resumes and cover letters using AI to tailor job posting & your application documents."
                },
            ]

    const nextSlide = () => {
        if (currentIndex < cards.length - 3) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(cards.length - 3);
        }
    };

    return (
        <div className="carousel-container">
            <button className="prev-button" onClick={prevSlide}>Prev</button>
            <div className="carousel-content">
                {arr.slice(currentIndex, currentIndex + 3).map((ele, i) => (
                    // <div className="card" key={index}>
                    //     <h3>{card.title}</h3>
                    //     <p>{card.text}</p>
                    // </div>
                    <div style={{width: "500px",border:"1px solid"}} key={i}>
                   <div className="rating">
                     {
                            ele.greenstar.map((ele,i)=>{
                                return(
                                    <img src="https://resume.io/assets/media/star-greenf488e0b79436f4103974.svg" alt="" key={i}/>
                                )
                            })
                        }

<img src="https://resume.io/assets/media/star-greenf488e0b79436f4103974.svg" alt="" />
                       
                    </div>
                    <h2>{ele.heading}</h2>
                    <p>{ele.text}</p>
                </div>
                ))}
            </div>
            <button className="next-button" onClick={nextSlide}>Next</button>
        </div>
    );
};
