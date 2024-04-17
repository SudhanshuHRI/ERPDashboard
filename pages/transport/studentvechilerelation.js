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

import { useEffect, useState } from 'react';
import Image from 'next/image';

const StudentVechileRelation = () => {
    const [showtable, setShowTable] = useState("d-block")
    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Student Name',
                field: 'std_name',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Father Name',
                field: 'fther_name',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Class',
                field: 'class',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Transport No',
                field: 'trnspt_no',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Pickup Point',
                field: 'pickup_point',
                sort: 'asc',
                width: 300
            },
            {
                label: "Amount",
                field: 'amount',
                sort: 'asc',
                width: 300
            },
            {
                label: "Action",
                field: 'action',
                sort: 'asc',
                width: 300
            },


        ],
        rows: [
            {
                serial_no: "2",
                std_name: 'Tiger Nixon',
                action: <div className='fs-5'><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                fther_name:'Father',
                class:5,
                trnspt_no:"UP32 T 4545",
                pickup_point:"Gomti Nagar",
                amount:200,
            },
            {
                serial_no: "2",
                std_name: 'Tiger Nixon',
                action: <div className='fs-5'><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                fther_name:'Father',
                class:5,
                trnspt_no:"UP32 T 4545",
                pickup_point:"Gomti Nagar",
                amount:200,
            },
            {
                serial_no: "2",
                std_name: 'Tiger Nixon',
                action: <div className='fs-5'><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                fther_name:'Father',
                class:5,
                trnspt_no:"UP32 T 4545",
                pickup_point:"Gomti Nagar",
                amount:200,
            },
            {
                serial_no: "2",
                std_name: 'Tiger Nixon',
                action: <div className='fs-5'><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                fther_name:'Father',
                class:5,
                trnspt_no:"UP32 T 4545",
                pickup_point:"Gomti Nagar",
                amount:200,
            },
            {
                serial_no: "2",
                std_name: 'Tiger Nixon',
                action: <div className='fs-5'><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                fther_name:'Father',
                class:5,
                trnspt_no:"UP32 T 4545",
                pickup_point:"Gomti Nagar",
                amount:200,
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
                <Breadcrumb.Item active>Assign Transport</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Assign Transport
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <Row>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Student Name
                                                </Label>    
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Pickup Point
                                                </Label>
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>

                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                   Vehicle Route(NO/Seats)
                                                </Label><FaStarOfLife className='mandStar' />   
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                    <option>kakadev(UP35 T 5656)(38/0)</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                                <Button onClick={()=>alert("added")}>Submit</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Existing Transport Records
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

        </div>
    );
}

export default StudentVechileRelation;