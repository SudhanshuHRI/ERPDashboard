import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaStarOfLife } from "react-icons/fa6";
import { MDBDataTable } from 'mdbreact';
import { LiaEdit } from "react-icons/lia";
import { AiFillCloseSquare } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
} from 'reactstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useEffect, useState } from 'react';

const AllTransportInfo = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Vehicle Type',
                field: 'vehicle_type',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Vehicle Number',
                field: 'vehicle_no',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Chassis No.',
                field: 'chassis_no',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Seat',
                field: 'seat',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Driver Name',
                field: 'driver_name',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Driver Licence No.',
                field: 'lic_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Licence Valid Till',
                field: 'lic_valid',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Mobile No.',
                field: 'mob_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 100
            },


        ],
        rows: [
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                vehicle_type: 'System Architect',
                chassis_no: 'Edinburgh',
                driver_name: "Suresh",
                lic_no: 'abcd1234',
                lic_valid: "12july2020",
                mob_no: 1234567890,
                seat: 10,
                action: <div className='fs-5'><Button onClick={handleShow}>More Info</Button></div>,

            },
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                vehicle_type: 'System Architect',
                chassis_no: 'Edinburgh',
                driver_name: "Suresh",
                lic_no: 'abcd1234',
                lic_valid: "12july2020",
                mob_no: 1234567890,
                seat: 10,
                action: <div className='fs-5'><Button onClick={handleShow}>More Info</Button></div>,

            },
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                vehicle_type: 'System Architect',
                chassis_no: 'Edinburgh',
                driver_name: "Suresh",
                lic_no: 'abcd1234',
                lic_valid: "12july2020",
                mob_no: 1234567890,
                seat: 10,
                action: <div className='fs-5'><Button onClick={handleShow}>More Info</Button></div>,

            },
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                vehicle_type: 'System Architect',
                chassis_no: 'Edinburgh',
                driver_name: "Suresh",
                lic_no: 'abcd1234',
                lic_valid: "12july2020",
                mob_no: 1234567890,
                seat: 10,
                action: <div className='fs-5'><Button onClick={handleShow}>More Info</Button></div>,

            },

        ]
    };



    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Transport
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    All Reports
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    Vehicle Records
                </Breadcrumb.Item>

            </Breadcrumb>
            <Row>
                <Col>

                    <Card >
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Vehicle  Records
                        </CardTitle>
                        <CardBody>
                            <div className='sudhTable'>

                                <MDBDataTable
                                    striped
                                    bordered

                                    data={data}
                                    responsive
                                />
                            </div>

                        </CardBody>
                    </Card>

                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table bordered hover>

                        <tbody>
                            <tr>
                                
                                <td>Insurence Due on</td>
                                <td>12 jan 2020</td>
                               
                            </tr>
                            <tr>
                                <td>Insurence Company</td>
                                <td>Universal Insurence Pvt. Ltd.</td>
                                
                            </tr>
                            <tr>
                                <td>Insurance Amount</td>
                                <td>1234</td>
                                
                            </tr>
                            <tr>
                                <td>Policy No</td>
                                <td>asdf/1234/sdfg</td>
                                
                            </tr>
                            <tr>
                                <td>Helper Name</td>
                                <td>Mukesh</td>
                                
                            </tr>
                            <tr>
                                <td>Helper Mobile No.</td>
                                <td>1234567890</td>
                                
                            </tr>
                            <tr>
                                <td>Remarks</td>
                                <td>Hello</td>
                                
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
              
            </Modal>

        </div>
    );
}

export default AllTransportInfo;