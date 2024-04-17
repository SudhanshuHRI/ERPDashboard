import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaCaretRight } from "react-icons/fa";


const navigation = [
  {
    title: "Master Entries",
    href: "/dashboard",
    icon: "bi bi-speedometer2",

  },
  {
    title: "Students",
    href: "#",
    icon: "bi bi-bell",
    sublist: [
      {
        title: "All modules",
        href: "/students/allmodules",
        icon: "bi bi-bell",
      },
      {
        title: "Add new Student",
        href: "/students/addnewstudents",
        icon: "bi bi-bell",
      },
      {
        title: "Update Student",
        href: "/students/updatestudents",
        icon: "bi bi-bell",
      },
      {
        title: "Assign RollNo",
        href: "/students/assignrollno",
        icon: "bi bi-bell",
      },
      {
        title: "Pramote Student",
        href: "/students/pramotestudent",
        icon: "bi bi-bell",
      },
      {
        title: "Student Bulk Update",
        href: "/students/studentbulkupdate",
        icon: "bi bi-bell",
      },
      {
        title: "Transfer Certificate",
        href: "/students/tranfercertificate",
        icon: "bi bi-bell",
      },
      {
        title: "ID Card",
        href: "/students/idcard",
        icon: "bi bi-bell",
      },
      {
        title: "Reports ",
        href: "#",
        icon: "bi bi-bell",
        sublist2: [{
          title: "All Reports",
          href: "/students/reports/allreports",
          icon: "bi bi-bell",
        },
        {
          title: "Student List Wizard",
          href: "/students/reports/studentlistwizard",
          icon: "bi bi-bell",
        },
        {
          title: "School Overview",
          href: "/students/reports/schooloverview",
          icon: "bi bi-bell",
        },
        {
          title: "Certificate Wizard",
          href: "/students/reports/certificatewizard",
          icon: "bi bi-bell",
        },]
      },

    ]
  },
  {
    title: "Transport",
    href: "#",
    icon: "bi bi-patch-check",
    sublist: [
      {
        title: "All modules",
        href: "/transport/allmodule",
        icon: "bi bi-bell",
      },
      {
        title: "Vehicle Type Master",
        href: "/transport/vehicletype",
        icon: "bi bi-bell",
      },
      {
        title: "Vehicle Master",
        href: "/transport/vehiclemaster",
        icon: "bi bi-bell",
      },
      {
        title: "Route Master",
        href: "/transport/routemaster",
        icon: "bi bi-bell",
      },
      {
        title: "Fuel Filling Report",
        href: "/transport/fuelfillingreport",
        icon: "bi bi-bell",
      },
      {
        title: "Student Vechile Relation",
        href: "/transport/studentvechilerelation",
        icon: "bi bi-bell",
      },
      {
        title: "Session Transfer",
        href: "/transport/sessiontransfer",
        icon: "bi bi-bell",
      },
      {
        title: "Reports",
        href: "#",
        icon: "bi bi-bell",
        sublist2: [{
          title: "All Reports",
          href: "/transport/reports/allreports",
          icon: "bi bi-bell",
        },
        {
          title: "All Transport Info",
          href: "/transport/reports/alltransportinfo",
          icon: "bi bi-bell",
        },
        {
          title: "Vehicle Fee Info",
          href: "/transport/reports/vehiclefeeinfo",
          icon: "bi bi-bell",
        },
        {
          title: "Transport Users",
          href: "/transport/reports/transportusers",
          icon: "bi bi-bell",
        },
        {
          title: "All Fuel Filling",
          href: "/transport/reports/allfuelfilling",
          icon: "bi bi-bell",
        },
        {
          title: "Pickup Point Report",
          href: "/transport/reports/pickuppointreport",
          icon: "bi bi-bell",
        },]
      },
    ]
  },
  {
    title: "Fees",
    href: "/fees",
    icon: "bi bi-hdd-stack",
    sublist: [
      {
        title: "All Module",
        href: "/fees/allmodule",
        icon: "bi bi-bell",
      },
    
      {
        title: "School Accounts",
        href: "/fees/schoolaccounts",
        icon: "bi bi-bell",
      },
      {
        title: "Installment Master",
        href: "/fees/installmentmaster",
        icon: "bi bi-bell",
      },
      {
        title: "Head Master",
        href: "/fees/headmaster",
        icon: "bi bi-bell",
      },
      {
        title: "Fee Group",
        href: "/fees/feegroup",
        icon: "bi bi-bell",
      },
      {
        title: "Fee Settings",
        href: "/fees/feesettings",
        icon: "bi bi-bell",
      },
      {
        title: "Bank Master",
        href: "/fees/bankmaster",
        icon: "bi bi-bell",
      },
      {
        title: "Petty Head",
        href: "/fees/pettyhead",
        icon: "bi bi-bell",
      },
      {
        title: "Fee Structure",
        href: "/fees/feestructure",
        icon: "bi bi-bell",
      },
      {
        title: "Fixed Amount",
        href: "/fees/fixedamount",
        icon: "bi bi-bell",
      },
      {
        title: "Fee Entry",
        href: "/fees/freeentry",
        icon: "bi bi-bell",
      },
      {
        title: "Concession Entry",
        href: "/fees/concessionentry",
        icon: "bi bi-bell",
      },
      {
        title: "Cheque Bounce Entry",
        href: "/fees/chequebounceentry",
        icon: "bi bi-bell",
      },
      {
        title: "Transfer to Next Year",
        href: "/fees/tranfertonextyear",
        icon: "bi bi-bell",
      },
      {
        title: "Reports",
        href: "#",
        icon: "bi bi-bell",
        sublist2: [{
          title: "All Reports",
          href: "/fees/reports/allreports",
          icon: "bi bi-bell",
        },
        {
          title: "Daywise Collection",
          href: "/fees/reports/daywisecollection",
          icon: "bi bi-bell",
        },
        {
          title: "All Collection",
          href: "/fees/reports/allcollection",
          icon: "bi bi-bell",
        },
        {
          title: "Student Ledger",
          href: "/fees/reports/studentleadger",
          icon: "bi bi-bell",
        },
        {
          title: "Defaulter Details",
          href: "/fees/reports/defaulterdetails",
          icon: "bi bi-bell",
        },
        {
          title: "Discount Report",
          href: "/fees/reports/descountreports",
          icon: "bi bi-bell",
        },
        {
          title: "Late Fine Report",
          href: "/fees/reports/latefinereports",
          icon: "bi bi-bell",
        },
        {
          title: "Fee Concession Report",
          href: "/fees/reports/feeconcessionreport",
          icon: "bi bi-bell",
        },]
      },

    ]
  },
  {
    title: "Exams",
    href: "/exams",
    icon: "bi bi-card-text",
    sublist: [
      {
        title: "All Module",
        href: "/exams/allmodules",
        icon: "bi bi-bell",
      },
      {
        title: "Exam Grade Master",
        href: "/exams/examgrademaster",
        icon: "bi bi-bell",
      },
      {
        title: "Exam Type Master",
        href: "/exams/examtypemaster",
        icon: "bi bi-bell",
      },
      {
        title: "Exam Master",
        href: "/exams/exammaster",
        icon: "bi bi-bell",
      },
      {
        title: "Marks Entry",
        href: "/exams/marksentry",
        icon: "bi bi-bell",
      },
      {
        title: "Exam Time Table",
        href: "/exams/examtimetable",
        icon: "bi bi-bell",
      },
      {
        title: "Allote Class Teacher",
        href: "/exams/alloteclassteacher",
        icon: "bi bi-bell",
      },
      {
        title: "Subject Catogary",
        href: "/exams/subjectcatogary",
        icon: "bi bi-bell",
      },
      {
        title: "Subject Sub-Catogary",
        href: "/exams/subjectsubcatogary",
        icon: "bi bi-bell",
      },
      {
        title: "Remarks Master",
        href: "/exams/remarksmaster",
        icon: "bi bi-bell",
      },
      {
        title: "Reports",
        href: "#",
        icon: "bi bi-bell",
        sublist2: [
          {
            title: "All Reports",
            href: "/exams/reports/allreports",
            icon: "bi bi-bell",
          },
          {
            title: "Marks Subjectwise",
            href: "/exams/reports/markssubjectwise",
            icon: "bi bi-bell",
          },
          {
            title: "Studentwise Marksheet",
            href: "/exams/reports/studentwisemarksheet",
            icon: "bi bi-bell",
          },
          {
            title: "Sectionwise Marksheet",
            href: "/exams/reports/sectionwisemarksheet",
            icon: "bi bi-bell",
          },
          {
            title: "Download Student List",
            href: "/exams/reports/downloadstudentliset",
            icon: "bi bi-bell",
          },
          {
            title: "Tabulation Sheet",
            href: "/exams/reports/tebulationsheet",
            icon: "bi bi-bell",
          },
        ]
      },



    ]
  },
  {
    title: "Notice",
    href: "/notice",
    icon: "bi bi-columns",
    sublist: [
      {
        title: "All modules",
        href: "/notice/allmodules",
        icon: "bi bi-bell",
      },
      {
        title: "Add Notice",
        href: "/notice/addnotice",
        icon: "bi bi-bell",
      },
      {
        title: "Notice Records",
        href: "/notice/noticerecords",
        icon: "bi bi-bell",
      },
    ]
  },
  {
    title: "TimeTable",
    href: "/timetable",
    icon: "bi bi-layout-split",
    sublist: [
      {
        title: "All modules",
        href: "/timetable/allmodules",
        icon: "bi bi-bell",
      },
      {
        title: "Regular Time Table",
        href: "/timetable/regulartimetable",
        icon: "bi bi-bell",
      },
      {
        title: "Online Time Table",
        href: "/timetable/onlinetimetable",
        icon: "bi bi-bell",
      },
      {
        title: "Adjust Time Table",
        href: "/timetable/adjusttimetable",
        icon: "bi bi-bell",
      },
    ]
  },
  {
    title: "Complaints Details",
    href: "/complaints",
    icon: "bi bi-textarea-resize",

  },
  {
    title: "Home Work",
    href: "/homework",
    icon: "bi bi-link",
  },
  {
    title: "Syllabus Details",
    href: "/syllabus",
    icon: "bi bi-people",
  },
  {
    title: "Students Attendence",
    href: "/attendence",
    icon: "bi bi-patch-check",
  },
];

// console.log("navigation",navigation)

const Sidebar = ({ showMobilemenu }) => {

  const [itemArray, setItemArray] = useState([])
  const [backArrow, setBackArrow] = useState("d-none")
  const [subHead, setSubHead] = useState('')
  
  let curl = useRouter();
  const location = curl.pathname;

  useEffect(() => {
    setItemArray(navigation);
  }, []);



  const handleSubList = (sublist, subHead) => {
    if (sublist?.length > 0) {
      setItemArray(sublist);
      setBackArrow("d-block");
      setSubHead(subHead);
      
    }
  }

  const handleBackButton = () => {
      setItemArray(navigation)
      setBackArrow("d-none");
      curl.push("/dashboard");
  }

  return (
    <div className="p-3" >
      <div className="d-flex align-items-center" >
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button>
      </div>
      <div className="pt-1 mt-1">
        

        <div className="d-flex">
          <IoMdArrowRoundBack className={`${backArrow}`} style={{ fontSize: "25px", cursor: "pointer" }} onClick={() => handleBackButton(subHead, itemArray)} />
          <h4 className={`ms-4 ${backArrow}`}><strong>{subHead}</strong></h4>
        </div>
        <Nav vertical className="sidebarNav">

          {itemArray.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg" onClick={() => { handleSubList(navi.sublist ? navi.sublist : navi.sublist2, navi.title) }}>

              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3 d-flex align-items-center justify-content-between"
                      : "nav-link text-secondary py-3 d-flex align-items-center justify-content-between"
                  }
                >
                  <div className="d-flex">
                    <i className={navi.icon}></i>
                    <span className="ms-3 d-inline-block">{navi.title}</span>
                  </div>
                  <div>
                    <FaCaretRight className={navi?.sublist || navi?.sublist2 ? " d-block " : " d-none "} />
                  </div>
                </a>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
