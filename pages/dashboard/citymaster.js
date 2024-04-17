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

const CityMaster = () => {

    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'State',
                field: 'state',
                sort: 'asc',
                width: 150
            },
            {
                label: 'City',
                field: 'city',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 200
            },



        ],
        rows: [
            {
                serial_no: "1",
                state: 'U.P.',
                city: 'Lucknow',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

            },
            {
                serial_no: "1",
                state: 'U.P.',
                city: 'Lucknow',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

            },
            {
                serial_no: "1",
                state: 'U.P.',
                city: 'Lucknow',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

            },
            {
                serial_no: "1",
                state: 'U.P.',
                city: 'Lucknow',
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

            },
           
        ]
    };


    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Master Entries
                </Breadcrumb.Item>
                <Breadcrumb.Item active>State and City Details</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add States
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={6}>
                                                <Label>State</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>
                                            <Col sm={6}>
                                                
                                            </Col>

                                        </Row>
                                    </FormGroup>
                                </Form>
                                <Button onClick={() => alert("added")}>Add State</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add City
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={6}>
                                                <Label>Select State</Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" name="select" type="select" >
                                                <option>Select</option>
                                                <option>Up</option>
                                                <option>MP</option>
                                                <option>HP</option>
                                                <option>AP</option>
                                                <option>Delhi</option>
                                            </Input>
                                            </Col>
                                            <Col sm={6}>
                                                <Label>City Name</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </Col>

                                        </Row>
                                    </FormGroup>
                                </Form>
                                <Button onClick={() => alert("added")}>Add City</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card >
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            State and City Records
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

export default CityMaster;