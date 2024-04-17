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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const FuelFillingReport = () => {

    const [showtable, setShowTable] = useState("d-block")

    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Date',
                field: 'date',
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
                label: 'Amount per Litre',
                field: 'amnt_per_liter',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Quantity of fuel',
                field: 'quantity',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Previous Reading',
                field: 'previous_reading',
                sort: 'asc',
                width: 200
            },
            {
                label: 'New Reading',
                field: 'new_reading',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Total Amount',
                field: 'ttl_amnt',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Action',
                field: 'delete',
                sort: 'asc',
                width: 200
            },
        ],
        rows: [
            {
                serial_no: "2",

                date: 'Bolero',
                vehicle_no: 'up32n3232',
                vehicle_no: 'Suresh',
                amnt_per_liter:"90",
                quantity:"12 ltr",
                previous_reading:'30 ltr',
                new_reading:'42 ltr',
                ttl_amnt:'1250 Rs.',
                delete:<div className='fs-5'><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
            },
            {
                serial_no: "2",

                date: 'Bolero',
                vehicle_no: 'up32n3232',
                vehicle_no: 'Suresh',
                amnt_per_liter:"90",
                quantity:"12 ltr",
                previous_reading:'30 ltr',
                new_reading:'42 ltr',
                ttl_amnt:'1250 Rs.',
                delete:<div className='fs-5'><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
            },
            {
                serial_no: "2",

                date: 'Bolero',
                vehicle_no: 'up32n3232',
                vehicle_no: 'Suresh',
                amnt_per_liter:"90",
                quantity:"12 ltr",
                previous_reading:'30 ltr',
                new_reading:'42 ltr',
                ttl_amnt:'1250 Rs.',
                delete:<div className='fs-5'><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
            },
            {
                serial_no: "2",

                date: 'Bolero',
                vehicle_no: 'up32n3232',
                vehicle_no: 'Suresh',
                amnt_per_liter:"90",
                quantity:"12 ltr",
                previous_reading:'30 ltr',
                new_reading:'42 ltr',
                ttl_amnt:'1250 Rs.',
                delete:<div className='fs-5'><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
            },
            {
                serial_no: "2",

                date: 'Bolero',
                vehicle_no: 'up32n3232',
                vehicle_no: 'Suresh',
                amnt_per_liter:"90",
                quantity:"12 ltr",
                previous_reading:'30 ltr',
                new_reading:'42 ltr',
                ttl_amnt:'1250 Rs.',
                delete:<div className='fs-5'><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
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
                <Breadcrumb.Item active>Vehicle Expenses</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add Expenses
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Vechile Number</Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>UP32 PN 2121</option>
                                                    <option>UP32 PN 2121</option>
                                                    <option>UP32 PN 2121</option>
                                                    <option>UP32 PN 2121</option>
                                                    <option>UP32 PN 2121</option>
                                                </Input>
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Filling Station Name</Label>
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Quantity of fuel filled</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Previous Reading</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Amount per Litre</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>New Reading</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Total Amount</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Date</Label><FaStarOfLife className='mandStar' />
                                                <Input type='date' />
                                            </Col>
                                            <Col sm={4}>
                                            
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                  

                                </Form>
                                <Button onClick={() => alert("added")}>Add Expenses</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card >
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Vechile Expense Records
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

export default FuelFillingReport;