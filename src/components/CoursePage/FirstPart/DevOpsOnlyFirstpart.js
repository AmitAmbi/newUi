import React from "react";
import dynamic from "next/dynamic";
import CloudDevopsecond from "../cloud&devops/DevOpsSecondSection/DevOpsSecondSection";

// import SecondSection from "@/components/CoursePage/SecondSection/SecondSection";
const SecondNavbar = dynamic(() =>
  import("../SecondNavbar/SecondNavbar")
);
import { ThirdSectionData } from "@/Data/ThirdSectionData";
const WhoProgram = dynamic(() =>
  import("../WhoProgram/ThirdSection")
);
const TrainerSection = dynamic(() =>
  import("../../Global/TrainerSection/TrainerSection")
);
const Testimonial = dynamic(() =>
  import(
    "../cloud&devops/CloudDevopstestimonial/Clouddevoptestimonials"
  )
);
const FirstSection = dynamic(() =>
  import("../FirstSection/FirstSection")
);
const WhoIsProgram = dynamic(() =>
  import("../WhoIsProgram/WhoIsProgram")
);
const WhyLearnbay = dynamic(() =>
  import("../WhyLearnbay/WhyLearnbay")
);
const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));
const ContactConsellor = dynamic(() =>
  import("../ContactCounsellor/ContactCounsellor")
);
const CloudDevopstestimonials = dynamic(() =>
  import("../cloud&devops/CloudDevopstestimonial/Clouddevoptestimonials")
);
const MasterSecondSection  = dynamic(() =>
  import("../../MastersCourse/MasterSecondSection/MasterSecondSection")
);
const JobAbroad = dynamic(()=>
import( "../../MastersCourse/JobAbroad/JobAbroad"
)
);
import { TbCloudComputing } from "react-icons/tb";
import { PiInfinity } from "react-icons/pi";
import { BsPersonGear } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { AiOutlineContainer } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

const FirstPart = ({ SecondSectionData, S3RightImage, adsHide }) => {
  const seconddata = [
    { boldText: "IBM", normalText: "Certified Capstone", imageUrl: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review1.webp" },
    { CboldText: "175%", normalText: "Average Salary Hike", imageUrl: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/review2.webp" },
    { boldText: "35K+", normalText: "Trusted Learners", },
    
  ];
  const clouddevops = {
    title1: "Project-Based Learning",
    image1:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devops-logo-sec.webp",
    points: [
      "Work in an industry like environment and gain practical hands-on experience",
      "4 Real-World Capstone Projects",
    ],
    image10:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-devops-min.webp",
    title2: "Job Roles You Can Target",
    jobRoles: [
      {
        icon: <TbCloudComputing />,
        role: "Cloud Engineer",
        salary: "12.5 LPA",
      },
      { icon: <PiInfinity />, role: "DevOps Engineer", salary: "7.6 LPA" },
      { icon: <BsPersonGear />, role: "Solutions Architect", salary: "27 LPA" },
    ],
    image3:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devops-gam-min.webp",
    image11:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-infi-min.webp",
    title3: "Assured Job Assistance",
    jobAssistance: [
      { icon: <BsDisplay />, text: "Unlimited Interview Calls" },
      { icon: <AiOutlineContainer />, text: "Resume Building Session" },
      { icon: <FaLinkedinIn />, text: "LinkedIn Profile Review" },
    ],
    formbl: [{ icon: <BsPeople />, text: "Mock Interview Sessions" }],
    image5:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-second-min.webp",
  };

  const JobData = {
    title: "Cloud Mastery for the Modern Tech Professional    ",
    points: [
      {
        imgSrc: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job4.webp",
        imgAlt: "",
        title: "Master the future in Cloud        ",
        description: "Comprehensive syllabus designed by experts        ",
      },
      {
        imgSrc: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job2.webp",
        imgAlt: "",
        title: "Flexible Learning at your Convenience        ",
        description: "For professionals aiming to upskill without quitting their job         ",
      },
      {
        imgSrc: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/job3.webp",
        imgAlt: "",
        title: "Transform with Global Standards        ",
        description: "Globally recognized certificate from IBM & MIcrosoft        ",
      },
   
    ],
    bannerImage: {
      src: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-first-devops-min.webp",
      width: 500,
      height: 400,
      priority: true,
      quality: 80,
      alt: "Banner Image 1 Alt",
    },
  };

  return (
    <>
    <FirstSection
          dataScienceCounselling={true}
          // interstedInHide={true}
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Advanced Cloud Computing & DevOps Certification Program"
          cityParaCont="Build your technical skills to deploy and monitor complex software solutions for an industry-driven tech career. Join Learnbay’s front-age DevOps certification course to gain in-depth learning of proven tools and trends. Learn with us to grab front-tier IT jobs with globally valued IBM & Microsoft certifications.           "
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cloud-and-Devops-Certification-Program.pdf"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/cloud-first-devops-min.webp"
          firstToparaImg=" Course Online "
          firstHeading="Best DevOps Certification          "
          firstTopPara="Crack Interview in top MNCs "
          idss="gaQYhVPCudQ"
          thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/cd-f.webp"
        // videoId="gaQYhVPCudQ"
        
        S3RightImage={S3RightImage}
        />
         <MasterSecondSection data={seconddata} />
      <CloudDevopsecond data={clouddevops} showimg={true} shoimgtwo={true} />
      <JobAbroad data={JobData} dataScienceCounselling={true}
        interstedInHide={true}/>
      {adsHide ? (
        ""
      ) : (
        <SecondNavbar
          // interstedInHide={true}
          dataScience={true}
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cloud-and-Devops-Certification-Program.pdf"
          titleCourse="Advance Data Science & AI Program with Domain Specialization"
        />
      )}
      {/* <WhoProgram
        dataScience={true}
        leftImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/advance-who.webp"
        ThirdSectionData={ThirdSectionData}
      /> */}
      <TrainerSection idss="eautK0odE7Q" adsHide={adsHide} />
      <CloudDevopstestimonials />
      <WhoIsProgram
        first="Bachelor's degree with consistent good academic"
        second="Minimum 6 Months of IT/Non-IT work experience"
        third="Early to mid-career professionals interested in Cloud & DevOps"
        forth="Achieving higher career growth in Cloud & DevoOps        "
      />
      <WhyLearnbay idss="ZPOTy4PEnNU" targetjobs={true} CloudContent={true} adsHide={adsHide} />
      <GetHire />
      {adsHide ? (
        ""
      ) : (
        <ContactConsellor
          dataScience={true}
          // interstedInHide={true}
          titleCourse="Advance Data Science & AI Program with Domain Specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Cloud-and-Devops-Certification-Program.pdf"
        />
      )}
    </>
  );
};

export default React.memo(FirstPart);