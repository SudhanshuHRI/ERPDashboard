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

const FeeSettings = () => {

    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Credit Card',
                field: 'credit_chrge',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Debit Card',
                field: 'debit_chrge',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Amex Charges',
                field: 'amex_chrge',
                sort: 'asc',
                width: 300
            },
        ],
        rows: [
            {
                serial_no: "2",
                credit_chrge: '1.8',
                debit_chrge: '2.0',
                amex_chrge: '1.9',
            },
            {
                serial_no: "2",
                credit_chrge: '1.8',
                debit_chrge: '2.0',
                amex_chrge: '1.9',
            },
            {
                serial_no: "2",
                credit_chrge: '1.8',
                debit_chrge: '2.0',
                amex_chrge: '1.9',
            },
            {
                serial_no: "2",
                credit_chrge: '1.8',
                debit_chrge: '2.0',
                amex_chrge: '1.9',
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
                <Breadcrumb.Item active>Fee Settings</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Update Settings
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <Row>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                   Credit Card Charges
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Amex Charges
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Debit Card Charges
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>


                                    </Row>
                                   
                                </Form>
                                <Button onClick={() => alert("added")}>Update</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Existing Settings
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

export default FeeSettings;