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

const FeeGroup = () => {

    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Group Name',
                field: 'group_name',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Late Fine Per Day',
                field: 'fine',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Account',
                field: 'acount',
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
                group_name: '10th-12th',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                fine: 100,
                acount: 'School Account ',

            },
            {
                serial_no: "2",
                group_name: '10th-12th',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                fine: 100,
                acount: 'School Account ',

            },
            {
                serial_no: "2",
                group_name: '10th-12th',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                fine: 100,
                acount: 'School Account ',

            },
            {
                serial_no: "2",
                group_name: '10th-12th',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                fine: 100,
                acount: 'School Account ',

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
                <Breadcrumb.Item active>Fee Group</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add Fee Group
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Group Name
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Account
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>School Account1</option>
                                                    <option>School Account2</option>

                                                </Input>
                                            </FormGroup>
                                        </Col>


                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Class and Section
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>1 A</option>
                                                    <option>2 A</option>
                                                    <option>3 A</option>
                                                    <option>4 A</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Late Fine Per Day
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='number' />
                                            </FormGroup>
                                        </Col>


                                    </Row>
                                </Form>
                                <Button onClick={() => alert("added")}>Add Fee Group</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Existing Fee Group Records
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

export default FeeGroup;