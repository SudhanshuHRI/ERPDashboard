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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useEffect, useState } from 'react';
import Image from 'next/image';


const VechileType = () => {

    const [showtable, setShowTable] = useState("d-block")
    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Vehicle Name',
                field: 'vehicle_name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 270
            },
            // {
            //     label: 'Section',
            //     field: 'section',
            //     sort: 'asc',
            //     width: 200
            // },
            // {
            //     label: 'Roll Number',
            //     field: 'roll_no',
            //     sort: 'asc',
            //     width: 100
            // },
            // {
            //     label: 'Student vehicle_name',
            //     field: 'student_name',
            //     sort: 'asc',
            //     width: 100
            // },
            // {
            //     label: "Father Name",
            //     field: 'father_name',
            //     sort: 'asc',
            //     width: 100
            // },


        ],
        rows: [
            {
                serial_no: "2",
                vehicle_name: 'Tiger Nixon',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>,
             
            },
            {
                serial_no: "2",
                vehicle_name: 'Garrett Winters',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>
             

            },
            {
                serial_no: "2",
                vehicle_name: 'Ashton Cox',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>
             
            },
            {
                serial_no: "2",
                vehicle_name: 'Cedric Kelly',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>
             

            },
            {
                serial_no: "2",
                vehicle_name: 'Airi Satou',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>
              
            },
            {
                serial_no: "2",
                vehicle_name: 'Brielle Williamson',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
              

            },
            {
                serial_no: "2",
                vehicle_name: 'Herrod Chandler',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
              

            },
            {
                serial_no: "2",
                vehicle_name: 'Rhona Davidson',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
             

            },
            {
                serial_no: "2",
                vehicle_name: 'Colleen Hurst',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
           

            },
            {
                serial_no: "2",
                vehicle_name: 'Sonya Frost',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>
             

            },
            {
                serial_no: "2",
                vehicle_name: 'Jena Gaines',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>
             
            },
            {
                serial_no: "2",
                vehicle_name: 'Quinn Flynn',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>
              
            },
            {
                serial_no: "2",
                vehicle_name: 'Charde Marshall',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>
                

            },
            {
                serial_no: "2",
                vehicle_name: 'Haley Kennedy',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
               

            },
            {
                serial_no: "2",
                vehicle_name: 'Tatyana Fitzpatrick',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
               

            },
            {
                serial_no: "2",
                vehicle_name: 'Michael Silva',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
                

            },
            {
                serial_no: "2",
                vehicle_name: 'Paul Byrd',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
                
            },
            {
                serial_no: "2",
                vehicle_name: 'Gloria Little',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> 
               

            }
        ]
    };

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Transport
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Add vehicle type</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add Vechile Type
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <Row>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Vehicle type
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' />
                                            </FormGroup>
                                        </Col>
                                        {/* <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Select Section
                                                </Label>
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>A</option>
                                                    <option>B</option>
                                                    <option>C</option>
                                                    <option>D</option>
                                                    <option>E</option>
                                                </Input>
                                            </FormGroup>
                                        </Col> */}

                                        <Col md={3} className='d-flex justify-content-center align-items-end'>
                                            <FormGroup>
                                                <Button
                                                    color="primary"
                                                    onClick={() => setShowTable("d-block")}
                                                >
                                                    Add Vehicle
                                                </Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className={`${showtable}`}>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Vehicle Type Records
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

export default VechileType;