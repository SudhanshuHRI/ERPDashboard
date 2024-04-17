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

const PettyHead = () => {

    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Petty Head Name',
                field: 'petty_head_name',
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
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 300
            },


        ],
        rows: [
            {
                serial_no: "2",
                petty_head_name: 'Admission',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                head_type:"add"
            },
            {
                serial_no: "2",
                petty_head_name: 'Other Discount',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                head_type:"subtract"
            },
            {
                serial_no: "2",
                petty_head_name: 'SBI',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                head_type:"add"
            },
            {
                serial_no: "2",
                petty_head_name: 'SBI',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                head_type:"add"
            },
            {
                serial_no: "2",
                petty_head_name: 'SBI',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                head_type:"add"
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
                <Breadcrumb.Item active>Petty Head</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add Petty Head
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Petty Name
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Head Type
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>add</option>
                                                    <option>Subtract</option>

                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                </Form>
                                <Button onClick={() => alert("added")}>Add Petty Head</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Petty Head Records
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

export default PettyHead;