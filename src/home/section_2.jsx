import first from "./pic/grid pic/first.png"
import eight from "./pic/grid pic/eight.png"
import fifth from "./pic/grid pic/fifth.png"
import fourth from "./pic/grid pic/fourth.png"
import ninth from "./pic/grid pic/ninth.png"
import second from "./pic/grid pic/second.png"

import seventh from "./pic/grid pic/seventh.png"
import sixth from "./pic/grid pic/sixth.png"
import third from "./pic/grid pic/third.png"


export const Section_2=()=>{
    let griditem=[
        {
            img:first,
            heading:"Easy online resume builder",
            para:"Create an awesome resume in minutes, without leaving your web browser."

        },
        {
            img:second,
            heading:"Automatic spell-checker",
            para:"Our built-in spell-checker takes care of the grammar for you. Create a resume with zero typos or errors."

        },
        {
            img:third,
            heading:"Your data is safe",
            para:"Your data is kept private and protected by strong 256-bit encryption"

        },
        {
            img:fourth,
            heading:"Automatic summary generator",
            para:"Create a powerful resume profile or cover letter in one click. Writer’s block is no longer an obstacle. Try for free!"

        },{
            img:fifth,
            heading:"Approved templates",
            para:"Professionally-designed resume templates and examples. Just edit and download in 5 minutes."

        },{
            img:sixth,
            heading:"AI pre-written phrases",
            para:"Use the power of AI and data analysis, choose pre-generated effective phrases and keywords."

        },{
            img:seventh,
            heading:"Optimized resumes",
            para:"Formats and designs are optimized for resume-filtering algorithms. Ensure humans see your application!"

        },{
            img:eight,
            heading:"Multi-format resume options",
            para:"Save your perfect resume in any common format, including Microsoft Word and PDF in a single click."

        },
        {
            img:ninth,
            heading:"Cover letters",
            para:"Our cover letter builder works with the same ease and use of elegant templates as the resume creator."

        },
        // {
        //     img:"",
        //     heading:"",
        //     para:""

        // },
    ]
    return(
        <section id="section_2">
            <div id="innerSection_2">
            <h1>
            Features designed to help you win your dream job
            </h1>
            <div className="section_2_grid">
                {
                    griditem.map((ele,i)=>{
                        return(
                            <div className="grid_child">
                    
                    <img src={ele.img} alt="" className="grid_child_img" />
                    <p>{ele.heading}</p>
                    <p>{ele.para}</p>
                </div>

                        )
                    })
                }
                
                

            </div>



                 </div>
        </section>
    )
}