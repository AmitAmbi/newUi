import Navbar from "@/components/Global/Navbar/Navbar";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MLPuneCourseData } from "../../../CityData/Pune/mlCourseTrainingInPune";
import Footer from "../../../components/Global/Footer/Footer";
import Form from "../../../components/Global/Form/Form";
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
  import("../../../components/Seo/CitiesLeft/CitiesLeft")
);
const CitiesRight = dynamic(() =>
  import("../../../components/Seo/CitiesRight/CitiesRight")
);
const OfferPopup = dynamic(() =>
  import("../../../components/Global/OfferPopup/OfferPopup")
);
const FAQNew = dynamic(() => import("../../../components/Seo/FAQNew/FAQNew"));

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
  const pdfUrl = "/Brochure/Advance-AI-ML.pdf";
  return (
    <div className={styles.container}>
      <Head>
        <title>Machine Learning Certification Course in Pune - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay Provides Extensive Machine Learning Certification Training Course in Pune with Assured Job Assistance Assistance. Sign-up now to excel your career."
        />
        <meta
          name="keywords"
          content="Machine learning course in Pune, Machine learning training in Pune, Machine learning institute in Pune, best Machine learning institute in Pune, Machine learning course in Pune, Machine learning certification in Pune, Machine learning training institute in Pune, advanced Machine learning course in Pune, Machine learning course with Placement Assistance, Machine learning course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/pune/machine-learning-course-training-in-pune"
        />
        <meta
          property="og:title"
          content="Machine Learning Course in pune | Data Science Training in pune"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Machine Learning Course in pune. Learnbay is Advanced Machine Learning Course Training Institute in pune. Machine Learning Course in pune will enhance your career"
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
          content="Machine Learning Course in Chennai | Data Science Training in Chennai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Machine Learning Course in Chennai. Learnbay is Advanced Machine Learning Course Training Institute in Chennai. Machine Learning Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Machine Learning Course in Chennai. Learnbay is Advanced Machine Learning Course Training Institute in Chennai. Machine Learning Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/pune/machine-learning-course-training-in-pune"
        />
        <meta
          name="copyright"
          content="Learnbay: Machine Learning Courses Certification Training India"
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
          titleCourse="Machine Learning Course Training In Pune"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
          brochurePdf={pdfUrl}
          idss="Jn2puEQC8yk"
          FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/head/ML.png"
          firstHeading="Machine Learning Course "
          firstToparaImg="Training In Pune"
          firstTopPara="Industry-Curated & IBM Certified Professionals ML Training"
          cityParaCont=" Be eligible to work as an AI/ML expert in MNC/PRODUCT Based Companies. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
        />
        <SecondSection SecondSectionData={MLPuneCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={MLPuneCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 1,15,000"
            FeeEmi="₹ 7,539/ Month"
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
            titleCourse="AI & ML Program for tech professionals"
            brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advance+Artifical+Intelligence+%26+ML+Certification+Program.pdf"
            interstedInHide={true}
            // <EMI POPUP
            emiType="NO COST EMI"
            duration1="18 Months"
            totalAmount1="₹1,15,000"
            monthlyPayment1="₹7,539"
            greenDown1="Standard Intrest rate Applicable"
            duration2="12 Months"
            totalAmount2="₹1,15,000"
            monthlyPayment2="₹11,308"
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              ProgramHead1={MLPuneCourseData[0].ProgramHead1}
              ProgramBot1={MLPuneCourseData[0].ProgramBot1}
              ProgramHead3={MLPuneCourseData[0].ProgramHead3}
              ProgramBot3={MLPuneCourseData[0].ProgramBot3}
              ProgramBot31={MLPuneCourseData[0].ProgramBot31}
              ProgramHead4={MLPuneCourseData[0].ProgramHead4}
              ProgramHead5={MLPuneCourseData[0].ProgramHead5}
              ProgramBot4={MLPuneCourseData[0].ProgramBot4}
              ProgramBot5={MLPuneCourseData[0].ProgramBot5}
              ProgramHead6={MLPuneCourseData[0].ProgramHead6}
              ProgramBot6={MLPuneCourseData[0].ProgramBot6}
              Courselink1={MLPuneCourseData[0].Courselink1}
              Courselink2={MLPuneCourseData[0].Courselink2}
              Courselink3={MLPuneCourseData[0].Courselink3}
              Courselink4={MLPuneCourseData[0].Courselink4}
              Courselink5={MLPuneCourseData[0].Courselink5}
              Course1={MLPuneCourseData[0].Course1}
              Course2={MLPuneCourseData[0].Course2}
              Course3={MLPuneCourseData[0].Course3}
              Course4={MLPuneCourseData[0].Course4}
              Course5={MLPuneCourseData[0].Course5}
              DomainHead1={MLPuneCourseData[0].DomainHead1}
              DomainBot1={MLPuneCourseData[0].DomainBot1}
              DomainBot2={MLPuneCourseData[0].DomainBot2}
              DomainBot3={MLPuneCourseData[0].DomainBot3}
              DomainList1={MLPuneCourseData[0].DomainList1}
              DomainList2={MLPuneCourseData[0].DomainList2}
              DomainList3={MLPuneCourseData[0].DomainList3}
              DomainList4={MLPuneCourseData[0].DomainList4}
              DomainList5={MLPuneCourseData[0].DomainList5}
              DomainList6={MLPuneCourseData[0].DomainList6}
              DomainList7={MLPuneCourseData[0].DomainList7}
              DomainList8={MLPuneCourseData[0].DomainList8}
              DomainList9={MLPuneCourseData[0].DomainList9}
              DomainList10={MLPuneCourseData[0].DomainList10}
              Domainlink1={MLPuneCourseData[0].Domainlink1}
              Domainlink2={MLPuneCourseData[0].Domainlink2}
              Domainlink3={MLPuneCourseData[0].Domainlink3}
              Domainlink4={MLPuneCourseData[0].Domainlink4}
              Domainlink5={MLPuneCourseData[0].Domainlink5}
              Domainlink6={MLPuneCourseData[0].Domainlink6}
              Domainlink7={MLPuneCourseData[0].Domainlink7}
              Domainlink8={MLPuneCourseData[0].Domainlink8}
              Domainlink9={MLPuneCourseData[0].Domainlink9}
              Domainlink10={MLPuneCourseData[0].Domainlink10}
              CertificationBot1={MLPuneCourseData[0].CertificationBot1}
              CertificationBot2={MLPuneCourseData[0].CertificationBot2}
              src={MLPuneCourseData[0].src}
              src22={MLPuneCourseData[0].src22}
              src33={MLPuneCourseData[0].src33}
              alt2={MLPuneCourseData[0].alt2}
              alt3={MLPuneCourseData[0].alt3}
              alt4={MLPuneCourseData[0].alt4}
              alt5={MLPuneCourseData[0].alt5}
              ModuleBot1={MLPuneCourseData[0].ModuleBot1}
              ModuleBot2={MLPuneCourseData[0].ModuleBot2}
              syllabush1={MLPuneCourseData[0].syllabush1}
              syllabusb1={MLPuneCourseData[0].syllabusb1}
              SyllabusBotlist11={MLPuneCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={MLPuneCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={MLPuneCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={MLPuneCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={MLPuneCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={MLPuneCourseData[0].SyllabusBotlist16}
              syllabush2={MLPuneCourseData[0].syllabush2}
              syllabusb2={MLPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={MLPuneCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={MLPuneCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={MLPuneCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={MLPuneCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={MLPuneCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={MLPuneCourseData[0].SyllabusBotlist26}
              syllabush3={MLPuneCourseData[0].syllabush3}
              syllabusb3={MLPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={MLPuneCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={MLPuneCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={MLPuneCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={MLPuneCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={MLPuneCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={MLPuneCourseData[0].SyllabusBotlist36}
              syllabush4={MLPuneCourseData[0].syllabush4}
              syllabusb4={MLPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={MLPuneCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={MLPuneCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={MLPuneCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={MLPuneCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={MLPuneCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={MLPuneCourseData[0].SyllabusBotlist46}
              syllabussrc={MLPuneCourseData[0].syllabussrc}
              JobHead1={MLPuneCourseData[0].JobHead1}
              JobBot1={MLPuneCourseData[0].JobBot1}
              JobBot2={MLPuneCourseData[0].JobBot2}
              JobBot5={MLPuneCourseData[0].JobBot5}
              JobHead2={MLPuneCourseData[0].JobHead2}
              JobBot3={MLPuneCourseData[0].JobBot3}
              ProjectsBot1={MLPuneCourseData[0].ProjectsBot1}
              ProjectsBot2={MLPuneCourseData[0].ProjectsBot2}
              src1={MLPuneCourseData[0].src1}
              ProjectsH1={MLPuneCourseData[0].ProjectsH1}
              Projectsp1={MLPuneCourseData[0].Projectsp1}
              src2={MLPuneCourseData[0].src2}
              ProjectsH2={MLPuneCourseData[0].ProjectsH2}
              Projectsp2={MLPuneCourseData[0].Projectsp2}
              src3={MLPuneCourseData[0].src3}
              ProjectsH3={MLPuneCourseData[0].ProjectsH3}
              Projectsp3={MLPuneCourseData[0].Projectsp3}
              src4={MLPuneCourseData[0].src4}
              ProjectsH4={MLPuneCourseData[0].ProjectsH4}
              Projectsp4={MLPuneCourseData[0].Projectsp4}
              AlumniBot1={MLPuneCourseData[0].AlumniBot1}
              Asrc1={MLPuneCourseData[0].Asrc1}
              AlumniH1={MLPuneCourseData[0].AlumniH1}
              Alumnip1={MLPuneCourseData[0].Alumnip1}
              Asrc2={MLPuneCourseData[0].Asrc2}
              AlumniH2={MLPuneCourseData[0].AlumniH2}
              Alumnip2={MLPuneCourseData[0].Alumnip2}
              Asrc3={MLPuneCourseData[0].Asrc3}
              AlumniH3={MLPuneCourseData[0].AlumniH3}
              Alumnip3={MLPuneCourseData[0].Alumnip3}
              Asrc4={MLPuneCourseData[0].Asrc4}
              AlumniH4={MLPuneCourseData[0].AlumniH4}
              Alumnip4={MLPuneCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={MLPuneCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={MLPuneCourseData[0].CityTextB}
          CityText={MLPuneCourseData[0].CityText}
          CityTextLB={MLPuneCourseData[0].CityTextLB}
          CityTextL={MLPuneCourseData[0].CityTextL}
        />
        <Footer />
        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </div>
  );
}