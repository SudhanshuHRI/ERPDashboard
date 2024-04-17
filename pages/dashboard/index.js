import Head from "next/head";
import { Col, Row } from "reactstrap";
import SalesChart from "../../src/components/dashboard/SalesChart";
import Feeds from "../../src/components/dashboard/Feeds";
import ProjectTables from "../../src/components/dashboard/ProjectTable";
import TopCards from "../../src/components/dashboard/TopCards";
import Blog from "../../src/components/dashboard/Blog";
// import bg1 from "../../src/assets/images/bg/bg1.jpg";
// import bg2 from "../../src/assets/images/bg/bg2.jpg";
// import bg3 from "../../src/assets/images/bg/bg3.jpg";
// import bg4 from "../../src/assets/images/bg/bg4.jpg";



// const BlogData = [
//   {
//     image: bg1,
//     title: "This is simple blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg2,
//     title: "Lets be simple blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg3,
//     title: "Don't Lamp blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg4,
//     title: "Simple is beautiful",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
// ];

export default function Home() {
  return (
    <div>
      <Head>
        <title>ERP Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
      <div>
            <Row className="text-center">
                <h2><b>Master Entries</b></h2>
                <span className="mb-3">Manage your basic details...</span>
            </Row>
           
            <Row>
                <Col sm="6" lg="3">
            
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Profit"
                        subtitle="Add basic details of School"
                        earning="School Information"
                        icon="bi bi-wallet"
                        link="/dashboard/schoolinfo"
                    />
                   
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Refunds"
                        subtitle="Add new class"
                        earning="Class Master"
                        icon="bi bi-coin"
                        link="/dashboard/classmaster"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="New Project"
                        subtitle="Add New City"
                        earning="City Master"
                        icon="bi bi-basket3"
                        link="/dashboard/citymaster"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Sales"
                        subtitle="Add New Session"
                        earning="Session Master"
                        icon="bi bi-bag"
                        link="/dashboard/yearmaster"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Profit"
                        subtitle="Add new document name"
                        earning="Document Upload"
                        icon="bi bi-wallet"
                        link="/dashboard/documnetupload"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Refunds"
                        subtitle="Add new catogary"
                        earning="Catogary Master"
                        icon="bi bi-coin"
                        link="/dashboard/catogarymaster"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="New Project"
                        subtitle="Add new religion"
                        earning="Religion Master"
                        icon="bi bi-basket3"
                        link="/dashboard/religionmaster"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Sales"
                        subtitle="Set seating capicity of classroom"
                        earning="Classroom Seats Master"
                        icon="bi bi-bag"
                        link="/dashboard/classroommaster"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Profit"
                        subtitle="Add new Subject"
                        earning="Subject Master"
                        icon="bi bi-wallet"
                        link="/dashboard/subjectmaster"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Refunds"
                        subtitle="Add new cast"
                        earning="Cast Master"
                        icon="bi bi-coin"
                        link="/dashboard/castmaster"
                    />
                </Col>
                <Col sm="6" lg="3">
                  
                </Col>
                <Col sm="6" lg="3">
                   
                </Col>
            </Row>
        </div>
      </body>
    </div>
  );
}
