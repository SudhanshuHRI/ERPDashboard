import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { FaStarOfLife } from "react-icons/fa6";
import { LiaEdit } from "react-icons/lia";
import { AiFillCloseSquare } from "react-icons/ai";
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
    Table,
} from 'reactstrap';

const ClassroomMaster = () => {

    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Class',
                field: 'class',
                sort: 'asc',
                width: 150
            },

            {
                label: 'Section',
                field: 'section',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Seats',
                field: 'seats',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 200
            },



        ],
        rows: [
            {
                serial_no: "1",
                class: '6',
                section:'A',
                seats:45,
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

            },
            {
                serial_no: "1",
                class: '6',
                section:'A',
                seats:45,
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

            },
            {
                serial_no: "1",
                class: '6',
                section:'A',
                seats:45,
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

            },
            {
                serial_no: "1",
                class: '6',
                section:'A',
                seats:45,
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

            },
            {
                serial_no: "1",
                class: '6',
                section:'A',
                seats:45,
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

            },
        ]
    };


    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Master Entries
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Classroom Sitting Master</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add Seats in class
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Select Class</Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                </Input>
                                            </Col>
                                            <Col sm={4}>
                                            <Label>Select Section</Label><FaStarOfLife className='mandStar' />
                                            <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                </Input>
                                            </Col>
                                            <Col sm={4}>
                                            <Label>Seat Capicity</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Form>
                                <Button onClick={() => alert("added")}>Add Seats</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card >
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Seats Record
                        </CardTitle>
                        <CardBody>
                            <div className='sudhTable'>
                                <MDBDataTable
                                    striped
                                    bordered
                                    hover
                                    data={data}
                                    responsive
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ClassroomMaster;