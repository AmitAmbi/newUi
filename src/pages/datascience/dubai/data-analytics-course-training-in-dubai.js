import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DADubaiCourseData } from "../../../CityData/Dubai/DataAnalyticsCourseTrainingDubaiData";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
import Navbar from "../../../components/Global/Navbar/Navbar";
import Popup from "../../../components/Global/Popup/Popup";
import FeeSection from "../../../components/Seo/FeeSection/FeeSection";
import Testimonial from "../../../components/Seo/Testimonial/Testimonial";
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
  import("../../../components/Seo/CitiesLeft/CitiesLeftDomain")
);
const CitiesRight = dynamic(() =>
  import("../../../components/Seo/CitiesRight/CitiesRightdomain")
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
  const pdfUrl = "/Brochure/Data-Analytics-Certification.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Best IBM Certified Data Analytics Course in Dubai - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your Data Analytics skills with Learnbay's comprehensive course in Dubai. Gain practical knowledge from industry experts through live classes. Enroll Now."
        />
        <meta
          name="keywords"
          content="Data Analytics course in Dubai, Data Analytics training in Dubai, Data Analytics institute in Dubai, best Data Analytics institute in Dubai, Data Analytics course in Dubai, Data Analytics certification in Dubai, Data Analytics training institute in Dubai, advanced Data Analytics course in Dubai, Data Analytics course with Placement Assistance, Data Analytics course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/dubai/data-analytics-course-training-in-dubai"
        />
        <meta
          property="og:title"
          content="Data Analytics Courese in Dubai | Data Science Training in Dubai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data Analytics Courese in Dubai. Learnbay is Advanced Data Analytics Courese Training Institute in Dubai. Data Analytics Courese in Dubai will enhance your career"
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
          content="Data Analytics Courese in Dubai | Data Science Training in Dubai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data Analytics Courese in Dubai. Learnbay is Advanced Data Analytics Courese Training Institute in Dubai. Data Analytics Courese in Dubai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data Analytics Courese in Dubai. Learnbay is Advanced Data Analytics Courese Training Institute in Dubai. Data Analytics Courese in Dubai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/dubai/data-analytics-course-training-in-dubai"
        />
        <meta
          name="copyright"
          content="Learnbay: Data Analytics Courses Certification Training India"
        />
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
          titleCourse="Data Analytics Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
          brochurePdf={pdfUrl}
          idss="y_0IdhFKJKM"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/data+analytics+header+image.webp"
          firstToparaImg="Training in Dubai"
          firstHeading="Data Analytics Course"
          firstTopPara="Industry-ready Data analytics program"
          cityParaCont="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
        />
        <SecondSection SecondSectionData={DADubaiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={DADubaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹85,000"
            FeeEmi="₹5,572/month"
           weekdaybatch="Weekday Batch"
        weekendbatch="  Weekend Batch"
        weekday="MON - THU"
        weekend="SAT - SUN"
        WeekdayDate="Dec 6th"
        WeekendDate="Nov 24th"
        WeekendTime="9:30 AM - 1 PM"
        WeekdayTime="8:00 PM - 10:30 PM "
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="10 days refund policy"
            FeeContent6="No additional cost"
            dataScienceCounselling={true}
            interstedInHide={true}
            dataScience={true}
            titleCourse="Data Analytics Certification Program"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Data+Analytics+Certification+Program+new.pdf"
            brochurePdf={pdfUrl}
            // EMI POPUPDATA
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹85,000"
            monthlyPayment1="₹5,572"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹85,000"
            monthlyPayment2="₹8,358"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              ProgramHead1={DADubaiCourseData[0].ProgramHead1}
              ProgramBot1={DADubaiCourseData[0].ProgramBot1}
              ProgramBot2={DADubaiCourseData[0].ProgramBot2}
              ProgramHead3={DADubaiCourseData[0].ProgramHead3}
              ProgramBot3={DADubaiCourseData[0].ProgramBot3}
              ProgramBot31={DADubaiCourseData[0].ProgramBot31}
              ProgramBot32={DADubaiCourseData[0].ProgramBot32}
              ProgramBot4={DADubaiCourseData[0].ProgramBot4}
              ProgramBot5={DADubaiCourseData[0].ProgramBot5}
              ProgramBot6={DADubaiCourseData[0].ProgramBot6}
              ProgramBot7={DADubaiCourseData[0].ProgramBot7}
              ProgramBot8={DADubaiCourseData[0].ProgramBot8}
              ProgramBot9={DADubaiCourseData[0].ProgramBot9}
              ProgramBot10={DADubaiCourseData[0].ProgramBot10}
              ProgramBot11={DADubaiCourseData[0].ProgramBot11}
              ProgramBot12={DADubaiCourseData[0].ProgramBot12}
              ProgramBot13={DADubaiCourseData[0].ProgramBot13}
              ProgramBot14={DADubaiCourseData[0].ProgramBot14}
              ProgramBot15={DADubaiCourseData[0].ProgramBot15}
              ProgramBot16={DADubaiCourseData[0].ProgramBot16}
              Courselink1={DADubaiCourseData[0].Courselink1}
              Courselink2={DADubaiCourseData[0].Courselink2}
              Courselink3={DADubaiCourseData[0].Courselink3}
              Courselink4={DADubaiCourseData[0].Courselink4}
              Courselink5={DADubaiCourseData[0].Courselink5}
              Course1={DADubaiCourseData[0].Course1}
              Course2={DADubaiCourseData[0].Course2}
              Course3={DADubaiCourseData[0].Course3}
              Course4={DADubaiCourseData[0].Course4}
              Course5={DADubaiCourseData[0].Course5}
              DomainHead1={DADubaiCourseData[0].DomainHead1}
              DomainBot1={DADubaiCourseData[0].DomainBot1}
              DomainBot2={DADubaiCourseData[0].DomainBot2}
              DomainBot3={DADubaiCourseData[0].DomainBot3}
              DomainList1={DADubaiCourseData[0].DomainList1}
              DomainList2={DADubaiCourseData[0].DomainList2}
              DomainList3={DADubaiCourseData[0].DomainList3}
              DomainList4={DADubaiCourseData[0].DomainList4}
              DomainList5={DADubaiCourseData[0].DomainList5}
              DomainList6={DADubaiCourseData[0].DomainList6}
              DomainList7={DADubaiCourseData[0].DomainList7}
              DomainList8={DADubaiCourseData[0].DomainList8}
              DomainList9={DADubaiCourseData[0].DomainList9}
              DomainList10={DADubaiCourseData[0].DomainList10}
              Domainlink1={DADubaiCourseData[0].Domainlink1}
              Domainlink2={DADubaiCourseData[0].Domainlink2}
              Domainlink3={DADubaiCourseData[0].Domainlink3}
              Domainlink4={DADubaiCourseData[0].Domainlink4}
              Domainlink5={DADubaiCourseData[0].Domainlink5}
              Domainlink6={DADubaiCourseData[0].Domainlink6}
              Domainlink7={DADubaiCourseData[0].Domainlink7}
              Domainlink8={DADubaiCourseData[0].Domainlink8}
              Domainlink9={DADubaiCourseData[0].Domainlink9}
              Domainlink10={DADubaiCourseData[0].Domainlink10}
              CertificationHead1={DADubaiCourseData[0].CertificationHead1}
              CertificationBot1={DADubaiCourseData[0].CertificationBot1}
              src={DADubaiCourseData[0].src}
              src22={DADubaiCourseData[0].src22}
              ModuleBot1={DADubaiCourseData[0].ModuleBot1}
              ModuleBot2={DADubaiCourseData[0].ModuleBot2}
              ModuleBot3={DADubaiCourseData[0].ModuleBot3}
              syllabush1={DADubaiCourseData[0].syllabush1}
              syllabusb1={DADubaiCourseData[0].syllabusb1}
              SyllabusBotlist11={DADubaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DADubaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DADubaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DADubaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DADubaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DADubaiCourseData[0].SyllabusBotlist16}
              syllabush2={DADubaiCourseData[0].syllabush2}
              syllabusb2={DADubaiCourseData[0].syllabusb2}
              SyllabusBotlist21={DADubaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DADubaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DADubaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DADubaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DADubaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DADubaiCourseData[0].SyllabusBotlist26}
              syllabush3={DADubaiCourseData[0].syllabush3}
              syllabusb3={DADubaiCourseData[0].syllabusb3}
              SyllabusBotlist31={DADubaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DADubaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DADubaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DADubaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DADubaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DADubaiCourseData[0].SyllabusBotlist36}
              syllabush4={DADubaiCourseData[0].syllabush4}
              syllabusb4={DADubaiCourseData[0].syllabusb4}
              SyllabusBotlist41={DADubaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DADubaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DADubaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DADubaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DADubaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DADubaiCourseData[0].SyllabusBotlist46}
              syllabussrc={DADubaiCourseData[0].syllabussrc}
              JobBot1={DADubaiCourseData[0].JobBot1}
              JobHead2={DADubaiCourseData[0].JobHead2}
              JobBot3={DADubaiCourseData[0].JobBot3}
              JobBot4={DADubaiCourseData[0].JobBot4}
              JobHead3={DADubaiCourseData[0].JobHead3}
              ProjectsBot1={DADubaiCourseData[0].ProgramBot1}
              src1={DADubaiCourseData[0].src1}
              ProjectsH1={DADubaiCourseData[0].ProjectsH1}
              Projectsp1={DADubaiCourseData[0].Projectsp1}
              src2={DADubaiCourseData[0].src2}
              ProjectsH2={DADubaiCourseData[0].ProjectsH2}
              Projectsp2={DADubaiCourseData[0].Projectsp2}
              src3={DADubaiCourseData[0].src3}
              ProjectsH3={DADubaiCourseData[0].ProjectsH3}
              Projectsp3={DADubaiCourseData[0].Projectsp3}
              src4={DADubaiCourseData[0].src4}
              ProjectsH4={DADubaiCourseData[0].ProjectsH4}
              Projectsp4={DADubaiCourseData[0].Projectsp4}
              AlumniBot1={DADubaiCourseData[0].AlumniBot1}
              Asrc1={DADubaiCourseData[0].Asrc1}
              AlumniH1={DADubaiCourseData[0].AlumniH1}
              Alumnip1={DADubaiCourseData[0].Alumnip1}
              Asrc2={DADubaiCourseData[0].Asrc2}
              AlumniH2={DADubaiCourseData[0].AlumniH2}
              Alumnip2={DADubaiCourseData[0].Alumnip2}
              Asrc3={DADubaiCourseData[0].Asrc3}
              AlumniH3={DADubaiCourseData[0].AlumniH3}
              Alumnip3={DADubaiCourseData[0].Alumnip3}
              Asrc4={DADubaiCourseData[0].Asrc4}
              AlumniH4={DADubaiCourseData[0].AlumniH4}
              Alumnip4={DADubaiCourseData[0].Alumnip4}
              alt1={DADubaiCourseData[0].alt1}
              alt2={DADubaiCourseData[0].alt2}
              alt3={DADubaiCourseData[0].alt3}
              alt4={DADubaiCourseData[0].alt4}
              alt5={DADubaiCourseData[0].alt5}
              alt6={DADubaiCourseData[0].alt6}
              alt7={DADubaiCourseData[0].alt7}
              alt8={DADubaiCourseData[0].alt8}
              alt9={DADubaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DADubaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DADubaiCourseData[0].CityTextB}
          CityText={DADubaiCourseData[0].CityText}
          CityTextLB={DADubaiCourseData[0].CityTextLB}
          CityTextL={DADubaiCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}