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

const VechileMaster = () => {
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
                label: 'Driver Name',
                field: 'driver_name',
                sort: 'asc',
                width: 200
            },
           


        ],
        rows: [
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
               
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

            },
            {
                serial_no: "2",
                vehicle_type:'Bolero' ,
                vehicle_no:'up32n3232',
                driver_name:'Suresh',

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
                <Breadcrumb.Item active>Add Vehicle</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add Vechile
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Vechile Type</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Driver Name</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Vehicle Number</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Driver Mobile No.</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Chassis No.</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Driver Licence No.</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Engine No.</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Licence Valid till</Label><FaStarOfLife className='mandStar' />
                                                <Input type='date' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Insurance Amount</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Seating Capacity</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Insurance Company Name</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Helper Name</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Insurance Policy No.</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Helper Mobile No.</Label><FaStarOfLife className='mandStar' />
                                                <Input type='number' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Insurance Valid Till</Label><FaStarOfLife className='mandStar' />
                                                <Input type='date' />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Type of Ownership</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Remarks</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                           
                                        </Row>
                                    </FormGroup>

                                </Form>
                                <Button onClick={()=>alert("added")}>Add Vehicle</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className={`${showtable}`}>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Vehicle Type Records
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

export default VechileMaster;