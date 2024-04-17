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

const HeadMaster = () => {

    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Name',
                field: 'head_name',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Head Type',
                field: 'head_type',
                sort: 'asc',
                width: 300
            },
            {
                label: 'System / User Define',
                field: 'define',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 300
            },


        ],
        rows: [
            {
                serial_no: "2",
                head_name: 'July',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                head_type: 'Life Time',
                define: 'User Define',

            },
            {
                serial_no: "2",
                head_name: 'July',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                head_type: 'Life Time',
                define: 'User Define',

            },
            {
                serial_no: "2",
                head_name: 'July',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                head_type: 'Life Time',
                define: 'User Define',

            },
            {
                serial_no: "2",
                head_name: 'July',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                head_type: 'Life Time',
                define: 'User Define',

            },
            {
                serial_no: "2",
                head_name: 'July',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                head_type: 'Life Time',
                define: 'User Define',

            },

        ]
    };


    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Fees
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Add Head</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add Head
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Head Name
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Head type
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>Installment Type</option>
                                                    <option>Life Time</option>

                                                </Input>
                                            </FormGroup>
                                        </Col>


                                    </Row>
                                </Form>
                                <Button onClick={() => alert("added")}>Add Head</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Existing Head Records
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

export default HeadMaster;