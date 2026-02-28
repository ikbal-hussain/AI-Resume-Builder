import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

export const Faq=()=>{
    return(
        <div>
        <Accordion allowToggle className='w-[100%] mt-20 flex flex-col gap-2'>
  <AccordionItem className='w-[70%] m-auto' >
    <h2>
      <AccordionButton style={{backgroundColor:"white",color:"black",border:"1px solid",}}>
        <Box as='span' flex='1' textAlign='left'>
        How can I use Resume94 for free?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} style={{padding:"10px"}}>
    Resume94 has a few different tools you can use 100% for free without entering any credit card details. 
      
    </AccordionPanel>
  </AccordionItem >

  <AccordionItem className='w-[70%] m-auto' >
    <h2>
      <AccordionButton style={{backgroundColor:"white",color:"black",border:"1px solid",}}>
        <Box as='span' flex='1' textAlign='left'>
        Can I download my resume to Word or PDF?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} style={{padding:"10px"}}>
    Once your resume is ready there are a number of ways you can export your resumes or cover letters to start applying for jobs. You can download a PDF, DOCX(Word), or TXT file of your resume either directly from your Dashboard or from the Resume Editor. 
    </AccordionPanel>
  </AccordionItem >

  <AccordionItem className='w-[70%] m-auto' >
    <h2>
      <AccordionButton style={{backgroundColor:"white",color:"black",border:"1px solid",}}>
        <Box as='span' flex='1' textAlign='left'>
        How do I cancel, downgrade or delete my account?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} style={{padding:"10px"}}>
    You can cancel a Resume.io subscription right from our website without even logging into the app. To do that visit our Contact Us page 
    </AccordionPanel>
  </AccordionItem >
  <AccordionItem className='w-[70%] m-auto' >
    <h2>
      <AccordionButton style={{backgroundColor:"white",color:"black",border:"1px solid",}}>
        <Box as='span' flex='1' textAlign='left'>
        How can I customize my resume?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} style={{padding:"10px"}}>
    Our resume templates are designed to adapt to your content and look great across all of our designs. 
    </AccordionPanel>
  </AccordionItem >
</Accordion>
</div>
    )
}