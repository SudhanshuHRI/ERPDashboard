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

const FixedAmount = () => {

    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

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
                session: '2022-23'
            },
            {
                serial_no: "2",
                group_name: 'Nur-Ukg',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                ttl_amnt: 400,
                session: '2022-23'
            },
            {
                serial_no: "2",
                group_name: '1st-5th',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                ttl_amnt: 400,
                session: '2022-23'
            },
            {
                serial_no: "2",
                group_name: '5th-8th',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
                ttl_amnt: 400,
                session: '2022-23'
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
                <Breadcrumb.Item active>Fixed Amount</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Fixed Amount
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                <Form>
                                    <FormGroup check>
                                        <Row>
                                            <Col sm={4}>
                                                <Input
                                                    type="radio"
                                                    value="option1"
                                                    checked={selectedOption === 'option1'}
                                                    onChange={handleOptionChange}
                                                />
                                                {' '}
                                                <Label >
                                                    Installment Wise
                                                </Label>
                                            </Col>
                                            <Col sm={4}>
                                                <Input
                                                    type="radio"
                                                    value="option2"
                                                    checked={selectedOption === 'option2'}
                                                    onChange={handleOptionChange}

                                                />
                                                {' '}
                                                <Label >
                                                    Class Wise
                                                </Label>
                                            </Col>
                                            <Col sm={4}>
                                                <Input
                                                    type="radio"
                                                    value="option3"
                                                    checked={selectedOption === 'option3'}
                                                    onChange={handleOptionChange}
                                                />
                                                {' '}
                                                <Label >
                                                    Student Wise
                                                </Label>
                                            </Col>
                                        </Row>

                                    </FormGroup>


                                </Form>
                            </div>
                            <div className={selectedOption==='option1'? "d-block" : "d-none"}>
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Class
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>

                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Section
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>

                                                </Input>
                                            </FormGroup>
                                        </Col>


                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Installment
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>

                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                   Transaction Date
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='date'/>
                                            </FormGroup>
                                        </Col>


                                    </Row>
                                </Form>
                                <Button onClick={() => alert("added")}>Submit</Button>
                            </div>
                            <div className={selectedOption==='option2'? "d-block" : "d-none"}>
                                <Form>
                                    <Row>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Class
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>

                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Section
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>

                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Installment
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>

                                                </Input>
                                            </FormGroup>
                                        </Col>


                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Fee Head
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>

                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Transaction Date
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='date' />
                                            </FormGroup>
                                        </Col>


                                    </Row>
                                </Form>
                                <Button onClick={() => alert("added")}>Submit</Button>
                            </div>
                            <div className={selectedOption==='option3'? "d-block" : "d-none"}>
                                <Form>
                                    <Row>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Student Name
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Enrollment No.
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Fees No.
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>


                                    </Row>
                                    <Row>
                                        <Col md={4}>
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
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Transaction Date
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='date' />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Installment
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                    <option>Option4</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>


                                    </Row>
                                </Form>
                                <Button onClick={() => alert("added")}>Submit</Button>
                            </div>
                        </CardBody>
                    </Card>
                    {/* <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Fee Records
                        </CardTitle>
                        <CardBody>
                            <div >

                                <MDBDataTable
                                    striped
                                    bordered
                                    hover
                                    data={data}
                                    responsive
                                />
                            </div>

                        </CardBody>
                    </Card> */}

                </Col>
            </Row>

        </div>
    );
}

export default FixedAmount;