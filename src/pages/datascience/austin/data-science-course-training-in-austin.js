import Navbar from "@/components/Global/Navbar/Navbar";
import Realstory from "@/components/Home/Realstory/Realstory";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DSAustinCourseData } from "../../../CityData/Austin/DataScienceCourseTrainingInAustinData";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
import Popup from "../../../components/Global/Popup/Popup";
import FeeSection from "../../../components/Seo/FeeSection/FeeSection";
import styles from "../../../styles/Home.module.css";
const FirstSection = dynamic(() =>
  import("../../../components/Seo/FirstSection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("../../../components/Seo/SecondSection/SecondSection")
);
const ProgramInfo = dynamic(() =>
  import("../../../components/Seo/ProgramInfo/ProgramInfo")
);
const SeventhSection = dynamic(() =>
  import("../../../components/Seo/SeventhSection/SeventhSection")
);
const ProgramFee = dynamic(() =>
  import("../../../components/Seo/ProgramInfo/ProgramFee/ProgramFee")
);
const CityText = dynamic(() =>
  import("../../../components/Seo/CityText/CityText")
);
const CitiesLeft = dynamic(() =>
  import("../../../components/Seo/CitiesLeft/CitiesLeft")
);
const CitiesRight = dynamic(() =>
  import("../../../components/Seo/CitiesRight/CitiesRight")
);
const FAQNew = dynamic(() => import("../../../components/Seo/FAQNew/FAQNew"));
const OfferPopup = dynamic(() =>
  import("../../../components/Global/OfferPopup/OfferPopup")
);
export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [popupData, setPopupData] = useState([]);
  // console.log(popupData);
  useEffect(() => {
    // console.log("inside UseEFFect");
    const fetchPopup = async () => {
      const data = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        // console.log(popData, "get data");
        if (popData == []) {
          setPopupData([]);
        }

        popData.map((data, i) => {
          // console.log(data);
          data.page.map((popupData, i) => {
            // console.log(popData);
            if (popupData === "Adv Data Science and AI") {
              setPopupData(data);
              // console.log(popupData);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);
  const pdfUrl = "/Brochure/Advanced-Data-Science.pdf"
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Online Data Science Course in Austin - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Gain the skills you need with Learnbay's best online data science course in Austin. Join a Group of learners, way in top-notch Support, and advance your career.    "
        />
        <meta
          name="keywords"
          content="data science course in Austin, data science course, data science course Austin, best data science courses, data science programs, best data science certification, data science online course, data science training in Austin, data science certificate     "
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/austin/data-science-course-training-in-austin"
        />
        <meta
          property="og:title"
          content="Data Science Course in Austin| Data Science Training in Austin"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data science course in Austin. Learnbay is Advanced Data Science Course Training Institute in Austin. Data science course in Austin will enhance your career"
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Data Science Course in Austin | Data Science Training in Austin"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data science course in Austin. Learnbay is Advanced Data Science Course Training Institute in Austin. Data science course in Austin will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data science course in Austin. Learnbay is Advanced Data Science Course Training Institute in Austin. Data science course in Austin will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/austin/data-science-course-training-in-austin"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta name="copyright" content="Learnbay" />
        {/* <meta name="language" content="English" /> */}
        {/* <meta name="rating" content="general" /> */}
        {/* <meta name="revisit-after" content="Daily" /> */}
        {/* <meta name="author" content="Learnbay" /> */}
        {/* <meta name="googlebot" content="index,follow" /> */}
        {/* <meta name="bingbot" content="index,follow" /> */}
        {/* <meta name="expires" content="never" /> */}
        {/* <meta name="coverage" content="Worldwide" /> */}
        {/* <meta name="robots" content="ALL" /> */}
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/austin/data-science-course-training-in-austin"
        />
        <meta
          property="og:title"
          content="Data Science Course Training in Austin"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/austin/data-science-course-training-in-austin"
        />
        <meta
          property="og:title"
          content="Data Science Course Austin | Data Scientist Course Austin| Learnbay"
        />
        <meta property="og:site_name" content="www.learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll for Data Science Course and Certification Training in Austinfrom Learnbay in association with IBM. This Data Scientist course in Austinwill give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="240" />
        <meta property="og:image:width" content="360" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content=" Best Data Science Course Training in Austin- Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content=" Enroll in Learnbay’s top-notch data science course training in Austin. Experience hands-on learning with live projects and become industry-ready."
        />
        <meta
          name="twitter:description"
          content="Enroll for Data Science Course and Certification Training in Malaysia from Learnbay in association with IBM. This Data Scientist course in Malaysia will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        ></meta>
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScience={true} interstedInHide={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          interstedInHide={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          brochurePdf={pdfUrl}
          idss="YWxTtvb3x-U"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Best Online Data Science Course in Austin         "
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont="Leverage your career growth horizons for a data-driven future with our data science course in Austin. Our GenAI-rich course modules are designed to validate your skills and help you achieve top-tier jobs. Additionally, our industry collaboration with IBM & Microsoft unleashes a lucrative future in Austin.           "
        />
        <SecondSection
          SecondSectionData={DSAustinCourseData[0].secondSection}
        />
        <Realstory />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="$1700"
            FeeEmi="₹ 8,194/month"
            weekdaybatch="Weekday Batch"
            weekendbatch="Weekday  Batch"
            weekday="MON - FRI"
            weekend="MON - FRI"
            WeekdayDate="FEB 2nd"
            WeekendDate="FEB 9th"
            WeekdayTime="8 PM - 10 PM"
            WeekendTime="8 AM - 10 AM"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,25,000"
            monthlyPayment1="₹8,194"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,25,000"
            monthlyPayment2="₹12,291"
            countryfee={true}
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextDSAustin={true}
              ProgramBot1={DSAustinCourseData[0].ProgramBot1}
              ProgramHead3={DSAustinCourseData[0].ProgramHead3}
              ProgramBot3={DSAustinCourseData[0].ProgramBot3}
              ProgramBot31={DSAustinCourseData[0].ProgramBot31}
              ProgramBot4={DSAustinCourseData[0].ProgramBot4}
              ProgramBot5={DSAustinCourseData[0].ProgramBot5}
              ProgramBot6={DSAustinCourseData[0].ProgramBot6}
              Courselink1={DSAustinCourseData[0].Courselink1}
              Courselink2={DSAustinCourseData[0].Courselink2}
              Courselink3={DSAustinCourseData[0].Courselink3}
              Courselink4={DSAustinCourseData[0].Courselink4}
              Courselink5={DSAustinCourseData[0].Courselink5}
              Course1={DSAustinCourseData[0].Course1}
              Course2={DSAustinCourseData[0].Course2}
              Course3={DSAustinCourseData[0].Course3}
              Course4={DSAustinCourseData[0].Course4}
              Course5={DSAustinCourseData[0].Course5}
              DomainHead1={DSAustinCourseData[0].DomainHead1}
              DomainBot1={DSAustinCourseData[0].DomainBot1}
              DomainBot2={DSAustinCourseData[0].DomainBot2}
              DomainBot3={DSAustinCourseData[0].DomainBot3}
              DomainBot40={DSAustinCourseData[0].DomainBot40}
              DomainList1={DSAustinCourseData[0].DomainList1}
              DomainList2={DSAustinCourseData[0].DomainList2}
              DomainList3={DSAustinCourseData[0].DomainList3}
              DomainList4={DSAustinCourseData[0].DomainList4}
              DomainList5={DSAustinCourseData[0].DomainList5}
              DomainList6={DSAustinCourseData[0].DomainList6}
              DomainList7={DSAustinCourseData[0].DomainList7}
              DomainList8={DSAustinCourseData[0].DomainList8}
              DomainList9={DSAustinCourseData[0].DomainList9}
              DomainList10={DSAustinCourseData[0].DomainList10}
              Domainlink1={DSAustinCourseData[0].Domainlink1}
              Domainlink2={DSAustinCourseData[0].Domainlink2}
              Domainlink3={DSAustinCourseData[0].Domainlink3}
              Domainlink4={DSAustinCourseData[0].Domainlink4}
              Domainlink5={DSAustinCourseData[0].Domainlink5}
              Domainlink6={DSAustinCourseData[0].Domainlink6}
              CertificationBot1={DSAustinCourseData[0].CertificationBot1}
              CertificationBot2={DSAustinCourseData[0].CertificationBot2}
              CertificationBot3={DSAustinCourseData[0].CertificationBot3}
              CertificationBot4={DSAustinCourseData[0].CertificationBot4}
              CertificationBot5={DSAustinCourseData[0].CertificationBot5}
              CertificationBot6={DSAustinCourseData[0].CertificationBot6}
              CertificationBot7={DSAustinCourseData[0].CertificationBot7}
              src={DSAustinCourseData[0].src}
              src22={DSAustinCourseData[0].src22}
              src33={DSAustinCourseData[0].src33}
              ModuleHead1={DSAustinCourseData[0].ModuleHead1}
              ModuleBot1={DSAustinCourseData[0].ModuleBot1}
              ModuleBot3={DSAustinCourseData[0].ModuleBot3}
              ModuleBot2={DSAustinCourseData[0].ModuleBot2}
              ModuleBot46={DSAustinCourseData[0].ModuleBot46}
              ModuleBot47={DSAustinCourseData[0].ModuleBot47}
              ModuleBot48={DSAustinCourseData[0].ModuleBot48}
              Modulelist1={DSAustinCourseData[0].Modulelist1}
              Modulelist2={DSAustinCourseData[0].Modulelist2}
              Modulelist3={DSAustinCourseData[0].Modulelist3}
              Modulelist4={DSAustinCourseData[0].Modulelist4}
              Modulelist5={DSAustinCourseData[0].Modulelist5}
              Modulelist6={DSAustinCourseData[0].Modulelist6}
              Modulelist7={DSAustinCourseData[0].Modulelist7}
              Modulelist8={DSAustinCourseData[0].Modulelist8}
              syllabush1={DSAustinCourseData[0].syllabush1}
              syllabusb1={DSAustinCourseData[0].syllabusb1}
              SyllabusBotlist11={DSAustinCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSAustinCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSAustinCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSAustinCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSAustinCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSAustinCourseData[0].SyllabusBotlist16}
              syllabush2={DSAustinCourseData[0].syllabush2}
              syllabusb2={DSAustinCourseData[0].syllabusb2}
              SyllabusBotlist21={DSAustinCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSAustinCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSAustinCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSAustinCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSAustinCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSAustinCourseData[0].SyllabusBotlist26}
              syllabush3={DSAustinCourseData[0].syllabush3}
              syllabusb3={DSAustinCourseData[0].syllabusb3}
              SyllabusBotlist31={DSAustinCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSAustinCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSAustinCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSAustinCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSAustinCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSAustinCourseData[0].SyllabusBotlist36}
              syllabush4={DSAustinCourseData[0].syllabush4}
              syllabusb4={DSAustinCourseData[0].syllabusb4}
              SyllabusBotlist41={DSAustinCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSAustinCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSAustinCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSAustinCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSAustinCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSAustinCourseData[0].SyllabusBotlist46}
              syllabussrc={DSAustinCourseData[0].syllabussrc}
              JobHead1={DSAustinCourseData[0].JobHead1}
              JobBot1={DSAustinCourseData[0].JobBot1}
              JobHead2={DSAustinCourseData[0].JobHead2}
              JobBot3={DSAustinCourseData[0].JobBot3}
              Joblist1={DSAustinCourseData[0].Joblist1}
              Joblist2={DSAustinCourseData[0].Joblist2}
              Joblist3={DSAustinCourseData[0].Joblist3}
              Joblist4={DSAustinCourseData[0].Joblist4}
              Joblist5={DSAustinCourseData[0].Joblist5}
              Joblist6={DSAustinCourseData[0].Joblist6}
              Joblist7={DSAustinCourseData[0].Joblist7}
              Joblist8={DSAustinCourseData[0].Joblist8}
              Joblist9={DSAustinCourseData[0].Joblist9}
              Joblist10={DSAustinCourseData[0].Joblist10}
              Joblist11={DSAustinCourseData[0].Joblist11}
              Joblist12={DSAustinCourseData[0].Joblist12}
              Joblist13={DSAustinCourseData[0].Joblist13}
              JobBot001={DSAustinCourseData[0].JobBot001}
              JobBot002={DSAustinCourseData[0].JobBot002}
              JobBot19={DSAustinCourseData[0].JobBot19}
              JobBot20={DSAustinCourseData[0].JobBot20}
              JobBot003={DSAustinCourseData[0].JobBot003}
              JobBot004={DSAustinCourseData[0].JobBot004}
              JobBot34={DSAustinCourseData[0].JobBot34}
              JobBot39={DSAustinCourseData[0].JobBot39}
              JobHead19={DSAustinCourseData[0].JobHead19}
              JobHead20={DSAustinCourseData[0].JobHead20}
              Joblist14={DSAustinCourseData[0].Joblist14}
              Joblist15={DSAustinCourseData[0].Joblist15}
              Joblist16={DSAustinCourseData[0].Joblist16}
              Joblist17={DSAustinCourseData[0].Joblist17}
              Joblist18={DSAustinCourseData[0].Joblist1}
              JobHead21={DSAustinCourseData[0].JobHead21}
              JobHead30={DSAustinCourseData[0].JobHead30}
              JobBot21={DSAustinCourseData[0].JobBot21}
              JobBot22={DSAustinCourseData[0].JobBot22}
              Joblist21={DSAustinCourseData[0].Joblist21}
              Joblist22={DSAustinCourseData[0].Joblist22}
              Joblist19={DSAustinCourseData[0].Joblist19}
              Joblist20={DSAustinCourseData[0].Joblist20}
              JobBot23={DSAustinCourseData[0].JobBot23}
              Joblist50={DSAustinCourseData[0].Joblist50}
              Joblist51={DSAustinCourseData[0].Joblist51}
              Joblist52={DSAustinCourseData[0].Joblist52}
              Joblist53={DSAustinCourseData[0].Joblist53}
              Joblist54={DSAustinCourseData[0].Joblist54}
              JobHead001={DSAustinCourseData[0].JobHead001}
              JobBotMasterBot5={DSAustinCourseData[0].JobBotMasterBot5}
              JobBot007={DSAustinCourseData[0].JobBot007}
              JobBot005={DSAustinCourseData[0].JobBot005}
              JobBot006={DSAustinCourseData[0].JobBot006}
              JobHeadAustin01={DSAustinCourseData[0].JobHeadAustin01}
              JobBot37={DSAustinCourseData[0].JobBot37}
              modulelist={true}
              usaonly={true}
              joblist={true}
              showData={true}
              JobHead22={DSAustinCourseData[0].JobHead22}
              JobBot24={DSAustinCourseData[0].JobBot24}
              Joblist23={DSAustinCourseData[0].Joblist23}
              Joblist24={DSAustinCourseData[0].Joblist24}
              Joblist25={DSAustinCourseData[0].Joblist25}
              Joblist26={DSAustinCourseData[0].Joblist26}
              Joblist27={DSAustinCourseData[0].Joblist27}
              Joblist28={DSAustinCourseData[0].Joblist28}
              Joblist29={DSAustinCourseData[0].Joblist29}
              Joblist30={DSAustinCourseData[0].Joblist30}
              JobBot25={DSAustinCourseData[0].JobBot25}
              ProjectsHead1={DSAustinCourseData[0].ProjectsHead1}
              ProjectsBot1={DSAustinCourseData[0].ProjectsBot1}
              ProjectsBot2={DSAustinCourseData[0].ProjectsBot2}
              ProjectsBot3={DSAustinCourseData[0].ProjectsBot3}
              ProjectsBot4={DSAustinCourseData[0].ProjectsBot4}
              ProjectsBot5={DSAustinCourseData[0].ProjectsBot5}
              ProjectsBot6={DSAustinCourseData[0].ProjectsBot6}
              ProjectsBot7={DSAustinCourseData[0].ProjectsBot7}
              src1={DSAustinCourseData[0].src1}
              ProjectsH1={DSAustinCourseData[0].ProjectsH1}
              Projectsp1={DSAustinCourseData[0].Projectsp1}
              src2={DSAustinCourseData[0].src2}
              ProjectsH2={DSAustinCourseData[0].ProjectsH2}
              Projectsp2={DSAustinCourseData[0].Projectsp2}
              src3={DSAustinCourseData[0].src3}
              ProjectsH3={DSAustinCourseData[0].ProjectsH3}
              Projectsp3={DSAustinCourseData[0].Projectsp3}
              src4={DSAustinCourseData[0].src4}
              ProjectsH4={DSAustinCourseData[0].ProjectsH4}
              Projectsp4={DSAustinCourseData[0].Projectsp4}
              AlumniBot1={DSAustinCourseData[0].AlumniBot1}
              Asrc1={DSAustinCourseData[0].Asrc1}
              AlumniH1={DSAustinCourseData[0].AlumniH1}
              Alumnip1={DSAustinCourseData[0].Alumnip1}
              Asrc2={DSAustinCourseData[0].Asrc2}
              AlumniH2={DSAustinCourseData[0].AlumniH2}
              Alumnip2={DSAustinCourseData[0].Alumnip2}
              Asrc3={DSAustinCourseData[0].Asrc3}
              AlumniH3={DSAustinCourseData[0].AlumniH3}
              Alumnip3={DSAustinCourseData[0].Alumnip3}
              Asrc4={DSAustinCourseData[0].Asrc4}
              AlumniH4={DSAustinCourseData[0].AlumniH4}
              Alumnip4={DSAustinCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSAustinCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DSAustinCourseData[0].CityTextB}
          CityText={DSAustinCourseData[0].CityText}
          CityTextLB={DSAustinCourseData[0].CityTextLB}
          CityTextL={DSAustinCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}