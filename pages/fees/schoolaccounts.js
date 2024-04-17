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
const SchoolAccounts = () => {

    const [showtable, setShowTable] = useState("d-none")
    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'School Name',
                field: 'school_name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 270
            },
           


        ],
        rows: [
            {
                serial_no: "2",
                school_name: 'Tiger Nixon',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}} onClick={()=>setShowTable("d-block")}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>,
                

            },
            {
                serial_no: "2",
                school_name: 'Tiger Nixon',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}} onClick={()=>setShowTable("d-block")}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>,
                

            },
            {
                serial_no: "2",
                school_name: 'Tiger Nixon',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}} onClick={()=>setShowTable("d-block")}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>,
                

            },
            {
                serial_no: "2",
                school_name: 'Tiger Nixon',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}} onClick={()=>setShowTable("d-block")}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>,
                

            },
            {
                serial_no: "2",
                school_name: 'Tiger Nixon',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}} onClick={()=>setShowTable("d-block")}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>,
                

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
                <Breadcrumb.Item active>School Account</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                <Card className={`${showtable}`}>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Update Record   
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >
                                                    Account Name
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text'/>
                                            </FormGroup>
                                        </Col>
                                       

                                        <Col md={6} className='d-flex justify-content-center align-items-end'>
                                            <FormGroup>
                                                <Button
                                                    color="primary"
                                                    
                                                >
                                                    Update
                                                </Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </CardBody>
                    </Card>
                    <Card >
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            School Account
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

export default SchoolAccounts;