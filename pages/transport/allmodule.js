import { Col, Row } from "reactstrap";

import TopCards from "../../src/components/dashboard/TopCards";

const AllModule = () => {
    return ( 
        <div>
            <Row className="text-center">
                <h2><b>Transport</b></h2>
                <span className="mb-3">Manage your basic details...</span>
            </Row>
           
            <Row>
                <Col sm="6" lg="3">
            
                    <TopCards
                        bg="bg-light-success text-success"
                        title="Profit"
                        subtitle="Add basic details of vehicle type"
                        earning="Vehicle Type Master"
                        icon="bi bi-wallet"
                        link="#"
                    />
                   
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-danger text-danger"
                        title="Refunds"
                        subtitle="Add basic details of vehicle"
                        earning="Vehicle Master "
                        icon="bi bi-coin"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-warning text-warning"
                        title="New Project"
                        subtitle="Add basic details of route"
                        earning="Route"
                        icon="bi bi-basket3"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Sales"
                        subtitle="Add basic details of fuel filling"
                        earning="Vehicle fuel filling"
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
                        subtitle="Assign pickup point to Students"
                        earning="Assign to student"
                        icon="bi bi-wallet"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-danger text-danger"
                        title="Refunds"
                        subtitle="Check all reports"
                        earning="Reports"
                        icon="bi bi-coin"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-warning text-warning"
                        title="New Project"
                        subtitle="Transfer all master details ot next year"
                        earning="Transfer to next year"
                        icon="bi bi-basket3"
                        link="#"
                    />
                </Col>
                {/* <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Sales"
                        subtitle="Check all reports of a student"
                        earning="Reports"
                        icon="bi bi-bag"
                        link="#"
                    />
                </Col> */}
            </Row>
        </div>
     );
}
 
export default AllModule;