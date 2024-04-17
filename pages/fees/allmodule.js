import { Col, Row } from "reactstrap";


import TopCards from "../../src/components/dashboard/TopCards";




const AllModules = () => {
    return ( 
        <div>
            <Row className="text-center">
                <h2><b>Fees Module</b></h2>
                <span className="mb-3">Manage your basic details...</span>
            </Row>
           
            <Row>
                <Col sm="6" lg="3">
            
                    <TopCards
                        bg="bg-light-success text-success"
                        title="Profit"
                        subtitle="Add basic details of Accounts"
                        earning="School Accounts"
                        icon="bi bi-wallet"
                        link="#"
                    />
                   
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-danger text-danger"
                        title="Refunds"
                        subtitle="Add basic details of Installment"
                        earning="Installment Master"
                        icon="bi bi-coin"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-warning text-warning"
                        title="New Project"
                        subtitle="Add basic details of Head"
                        earning="Head Master"
                        icon="bi bi-basket3"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Sales"
                        subtitle="Add Basic details of fee group"
                        earning="Fee Group"
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
                        subtitle="Add Concession For Students"
                        earning="Concession Entry"
                        icon="bi bi-wallet"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-danger text-danger"
                        title="Refunds"
                        subtitle="Add Cheque Bounce Records"
                        earning="Cheque Bounce Entry"
                        icon="bi bi-coin"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-warning text-warning"
                        title="New Project"
                        subtitle="Transfer Fee details to next year "
                        earning="Transfer to Next Year"
                        icon="bi bi-basket3"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Sales"
                        subtitle="Check all reports of Fees"
                        earning="Reports"
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
                        subtitle="Add basic details of Credit/Debit Card Charges"
                        earning="Fee Settings"
                        icon="bi bi-wallet"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-danger text-danger"
                        title="Refunds"
                        subtitle="Add Basic details of Bank Name"
                        earning="Bank Master"
                        icon="bi bi-coin"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-warning text-warning"
                        title="New Project"
                        subtitle="Add Basic details of Petty Hands"
                        earning="Petty Head"
                        icon="bi bi-basket3"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-info text-into"
                        title="Sales"
                        subtitle="Add fee Structure of groups"
                        earning="Fee Structure"
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
                        subtitle="Add New Fees Head To Student Fees"
                        earning="Fixed Amount"
                        icon="bi bi-wallet"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                    <TopCards
                        bg="bg-light-danger text-danger"
                        title="Refunds"
                        subtitle="Collect Students Fees Press (ctrl + Q) for deposit fees"
                        earning="Deposit Entry"
                        icon="bi bi-coin"
                        link="#"
                    />
                </Col>
                <Col sm="6" lg="3">
                 
                </Col>
                <Col sm="6" lg="3">
                  
                </Col>
            </Row>
        </div>
     );
}
 
export default AllModules;