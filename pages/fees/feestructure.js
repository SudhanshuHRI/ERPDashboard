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

const FeeStructure = () => {

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
                label: 'Total Amount',
                field: 'ttl_amnt',
                sort: 'asc',
                width: 300
            },
            {
                label: 'Session',
                field: 'session',
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
                group_name: 'Admission',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                ttl_amnt: 400,
                session:'2022-23'
            },
            {
                serial_no: "2",
                group_name: 'Nur-Ukg',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                ttl_amnt: 400,
                session:'2022-23'
            },
            {
                serial_no: "2",
                group_name: '1st-5th',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                ttl_amnt: 400,
                session:'2022-23'
            },
            {
                serial_no: "2",
                group_name: '5th-8th',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                ttl_amnt: 400,
                session:'2022-23'
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
                <Breadcrumb.Item active>Fee Structure</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add Fee
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
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>PG to UKG</option>
                                                    <option>1st to 5th</option>
                                                    <option>6th to 8th</option>
                                                    <option>9th to 10th</option>
                                                    <option>11th to 12th</option>

                                                </Input>

                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Head Type
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <FormGroup>
                                                <Table
                                                    bordered
                                                    responsive
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <th>
                                                                #
                                                            </th>
                                                            <th>

                                                            </th>
                                                            <th>
                                                                April
                                                            </th>
                                                            <th>
                                                                May
                                                            </th>
                                                            <th>
                                                                June
                                                            </th>
                                                            <th>
                                                                July
                                                            </th>
                                                            <th>
                                                                August
                                                            </th>
                                                            <th>
                                                                September
                                                            </th>
                                                            <th>
                                                                October
                                                            </th>
                                                            <th>
                                                                Novermber
                                                            </th>
                                                            <th>
                                                                December
                                                            </th>
                                                            <th>
                                                                January
                                                            </th>
                                                            <th>
                                                                February
                                                            </th>
                                                            <th>
                                                                March
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                Admission Fee
                                                            </th>
                                                            <td>
                                                                <Input id="exampleSelect" type="select" style={{ width: "150px" }}>
                                                                    <option>Select</option>
                                                                    <option>LifeTime Type</option>
                                                                    <option>Installment Type </option>
                                                                </Input>
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                Annual Fee
                                                            </th>
                                                            <td>
                                                                <Input id="exampleSelect" type="select" style={{ width: "150px" }}>
                                                                    <option>Select</option>
                                                                    <option>LifeTime Type</option>
                                                                    <option>Installment Type </option>
                                                                </Input>
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                Tution Fee
                                                            </th>
                                                            <td>
                                                                <Input id="exampleSelect" type="select" style={{ width: "150px" }}>
                                                                    <option>Select</option>
                                                                    <option>LifeTime Type</option>
                                                                    <option>Installment Type </option>
                                                                </Input>
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                Total Fee
                                                            </th>
                                                            <td>
                                                               
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='text' style={{ width: "150px" }} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                Fee Submisson Last Date
                                                            </th>
                                                            <td>

                                                            </td>
                                                            <td>
                                                                <Input type='date' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='date' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='date' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='date' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='date' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='date' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='date' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='date' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='date' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='date' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='date' style={{ width: "150px" }} />
                                                            </td>
                                                            <td>
                                                                <Input type='date' style={{ width: "150px" }} />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>

                                            </FormGroup>
                                        </Col>

                                    </Row>

                                </Form>
                                <Button onClick={() => alert("added")}>Add Fee</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Fee Records
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

export default FeeStructure;