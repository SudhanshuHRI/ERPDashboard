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


const SubjectMaster = () => {

    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Class',
                field: 'class',
                sort: 'asc',
                width: 150
            },

            {
                label: 'Section',
                field: 'section',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Subject Name',
                field: 'subject_name',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Subject Type',
                field: 'subject_type',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Assigned to',
                field: 'assigned_to',
                sort: 'asc',
                width: 200
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
                class: '3',
                section:"A",
                subject_type:"Compulsory",
                subject_name:"Math",
                assigned_to:"Agam",
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

            },
            {
                serial_no: "1",
                class: '3',
                section:"A",
                subject_type:"Compulsory",
                subject_name:"Math",
                assigned_to:"Agam",
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

            },
            {
                serial_no: "1",
                class: '3',
                section:"A",
                subject_type:"Compulsory",
                subject_name:"Math",
                assigned_to:"Agam",
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

            },
            {
                serial_no: "1",
                class: '3',
                section:"A",
                subject_type:"Compulsory",
                subject_name:"Math",
                assigned_to:"Agam",
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
                <Breadcrumb.Item active>Subject Master</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add Subjects
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={6}>
                                                <Label>Select Class</Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" name="select" type="select" >
                                                    <option>Select</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>

                                                </Input>
                                            </Col>
                                            <Col sm={6}>
                                                <Label>Select Section</Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" name="select" type="select" >
                                                    <option>Select</option>
                                                    <option>A</option>
                                                    <option>B</option>
                                                    <option>C</option>
                                                    <option>D</option>
                                                    <option>E</option>
                                                </Input>
                                            </Col>
                                        </Row>

                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={6}>
                                                <Label>Subject Name</Label><FaStarOfLife className='mandStar' />
                                               <Input type='text'/>
                                            </Col>
                                            <Col sm={6}>
                                                <Label>Subject Type</Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" name="select" type="select" >
                                                    <option>Select</option>
                                                    <option>Compulsary</option>
                                                    <option>Optional</option>
                                                    <option>Others</option>
                                                    
                                                </Input>
                                            </Col>
                                        </Row>

                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={6}>
                                                <Label>Select Teacher</Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" name="select" type="select" >
                                                    <option>Select</option>
                                                    <option>Ram</option>
                                                    <option>Shyam</option>
                                                    <option>Shivam</option>
                                                    <option>Piyush</option>
                                                    <option>Pradeep</option>
                                                    <option>Ashish</option>
                                                    <option>Agam</option>

                                                </Input>
                                            </Col>
                                            <Col sm={6}>
                                         
                                            </Col>
                                        </Row>

                                    </FormGroup>
                                </Form>
                                <Button onClick={() => alert("added")}>Add Subject</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card >
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Subject Records
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

export default SubjectMaster;