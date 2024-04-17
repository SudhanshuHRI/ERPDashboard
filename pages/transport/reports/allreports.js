import { Col, Row } from "reactstrap";


import TopCards from "../../../src/components/dashboard/TopCards";

const TrasportAllReports = () => {
    return (
        <div>
            <Row className="text-center">
                <h2><b>Transport Reports</b></h2>
                <span className="mb-3">Manage your basic details...</span>
            </Row>

            <Row>
                <Col sm="6" lg="3">

                    <TopCards
                        bg="bg-light-success text-success"
                        title="Profit"
                        subtitle="Check all details of Transport"
                        earning="All Transport info"
                        icon="bi bi-wallet"
                        link="#"
                    />

                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-danger text-danger"
                        title="Refunds"
                        subtitle="Check All details of fees"
                        earning="Vehicle Fee Info"
                        icon="bi bi-coin"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-warning text-warning"
                        title="New Project"
                        subtitle="Check all details of Transport Users"
                        earning="All Transport Users"
                        icon="bi bi-basket3"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Sales"
                        subtitle="Check All Details of Fuel Filling"
                        earning="All Fuel filling"
                        icon="bi bi-bag"
                        link="#"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-success text-success"
                        title="Profit"
                        subtitle="Check all details of Pickup Point"
                        earning="Pickup Point Report"
                        icon="bi bi-wallet"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    {/* <TopCards
                        bg="bg-light-danger text-danger"
                        title="Refunds"
                        subtitle="Generate Transfer Certificate of a student"
                        earning="Transfer Certificate"
                        icon="bi bi-coin"
                        link="#"
                    /> */}
                </Col>
                <Col sm="6" lg="3">
                    {/* <TopCards
                        bg="bg-light-warning text-warning"
                        title="New Project"
                        subtitle="Genterate ID Card of a Student"
                        earning="ID Card"
                        icon="bi bi-basket3"
                        link="#"
                    /> */}
                </Col>
                <Col sm="6" lg="3">
                    {/* <TopCards
                        bg="bg-light-info text-into"
                        title="Sales"
                        subtitle="Check all reports of a student"
                        earning="Reports"
                        icon="bi bi-bag"
                        link="#"
                    /> */}
                </Col>
            </Row>
        </div>
    );
}

export default TrasportAllReports;