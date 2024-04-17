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

const InstallmentMaster = () => {

    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Installment Name',
                field: 'install_name',
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
                install_name: 'July',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
               
            },
            {
                serial_no: "2",
                install_name: 'April',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
               
            },
            {
                serial_no: "2",
                install_name: 'August',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
               
            },
            {
                serial_no: "2",
                install_name: 'May',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
               
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
                <Breadcrumb.Item active>Add Installment</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add Installment
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <Row>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Installment Name
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>

                                        </Col>

                                        <Col md={4}>

                                        </Col>
                                    </Row>
                                </Form>
                                <Button onClick={() => alert("added")}>Add Installment</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Existing Installment Records
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

export default InstallmentMaster;