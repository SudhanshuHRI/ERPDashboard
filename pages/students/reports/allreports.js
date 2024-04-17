import { Col, Row } from "reactstrap";


import TopCards from "../../../src/components/dashboard/TopCards";

const StudentAllReports = () => {
    return (
        <div>
            <Row className="text-center">
                <h2><b>Student Reports</b></h2>
                <span className="mb-3">Manage your basic details...</span>
            </Row>

            <Row>
                <Col sm="6" lg="3">

                    <TopCards
                        bg="bg-light-success text-success"
                        title="Profit"
                        subtitle="Check Student List Wizard Records"
                        earning="Student List Wizard"
                        icon="bi bi-wallet"
                        link="/students/reports/studentlistwizard"
                    />

                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-danger text-danger"
                        title="Refunds"
                        subtitle="Check School Overview Records"
                        earning="School Overview"
                        icon="bi bi-coin"
                        link="/students/reports/schooloverview"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-warning text-warning"
                        title="New Project"
                        subtitle="Generate Students Certificate"
                        earning="Certificate Wizard"
                        icon="bi bi-basket3"
                        link="/students/reports/certificatewizard"
                    />
                </Col>
            
            </Row>
          
        </div>
    );
}

export default StudentAllReports;