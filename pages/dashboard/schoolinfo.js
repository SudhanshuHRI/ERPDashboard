import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React, { useEffect, useState } from 'react';
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

import Image from 'next/image';

const SchoolInfo = () => {

    const [file, setFile] = useState("/dummy.jpg");

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Master Entries
                </Breadcrumb.Item>
                <Breadcrumb.Item active>School Details</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            School Details
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>School Name</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Phone No.</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Email Address</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Web Address</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>School Address</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Bank Name</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>IFS Code</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Account Number</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Branch Name</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Choose Logo</Label><FaStarOfLife className='mandStar' />
                                                <Input type='file' onChange={handleChange} />
                                            </Col>
                                            <Col sm={4} >
                                                
                                                <img src={file} height={200} width={200}/>
                                            </Col>
                                            <Col sm={3}>
                                           
                                            </Col>
                                        </Row>
                                    </FormGroup>


                                </Form>
                                <Button onClick={() => alert("added")}>Add Details</Button>
                            </div>
                        </CardBody>
                    </Card>


                </Col>
            </Row>

        </div>
    );
}

export default SchoolInfo;