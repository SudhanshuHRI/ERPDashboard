import { Col, Row } from "reactstrap";

import TopCards from "../../src/components/dashboard/TopCards";


const AllModules = () => {
    return (
        <div>
            <Row className="text-center">
                <h2><b>Student All Module</b></h2>
                <span className="mb-3">Manage your basic details...</span>
            </Row>
           
            <Row>
                <Col sm="6" lg="3">
            
                    <TopCards
                        bg="bg-light-success text-success"
                        title="Profit"
                        subtitle="Add basic details of New student"
                        earning="New Student"
                        icon="bi bi-wallet"
                        link="/students/addnewstudents"
                    />
                   
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-danger text-danger"
                        title="Refunds"
                        subtitle="Update basic details of New student"
                        earning="Update Student"
                        icon="bi bi-coin"
                        link="/students/updatestudents"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-warning text-warning"
                        title="New Project"
                        subtitle="Assign Roll Number to student"
                        earning="Assign Roll Number"
                        icon="bi bi-basket3"
                        link="/students/assignrollno"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Sales"
                        subtitle="Pramote Student to Next Session"
                        earning="Pramote Student"
                        icon="bi bi-bag"
                        link="/students/pramotestudent"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-success text-success"
                        title="Profit"
                        subtitle="Bulk Update of student details"
                        earning="Student Bulk Update"
                        icon="bi bi-wallet"
                        link="/students/studentbulkupdate"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-danger text-danger"
                        title="Refunds"
                        subtitle="Generate Transfer Certificate of a student"
                        earning="Transfer Certificate"
                        icon="bi bi-coin"
                        link="/students/tranfercertificate"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-warning text-warning"
                        title="New Project"
                        subtitle="Genterate ID Card of a Student"
                        earning="ID Card"
                        icon="bi bi-basket3"
                        link="/students/idcard"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Sales"
                        subtitle="Check all reports of a student"
                        earning="Reports"
                        icon="bi bi-bag"
                        link="/students/reports/allreports"
                    />
                </Col>
            </Row>
        </div>
    );
}

export default AllModules;