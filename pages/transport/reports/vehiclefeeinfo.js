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

const VehicleFeeInfo = () => {
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
                label: 'Student Name',
                field: 'student_name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Father Name',
                field: 'father_name',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Class',
                field: 'class',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Transport No.',
                field: 'trnsprt_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Pickup-Point',
                field: 'pickup',
                sort: 'asc',
                width: 100
            },
    


        ],
        rows: [
            {
                serial_no: "2",
                student_name: 'Tiger Nixon',
                father_name:"Shambhu",
                class:6,
                trnsprt_no:'12345',
                pickup:'Gomti Nagar',
               

            },
            {
                serial_no: "2",
                student_name: 'Tiger Nixon',
                father_name:"Shambhu",
                class:6,
                trnsprt_no:'12345',
                pickup:'Gomti Nagar',
               

            },
            {
                serial_no: "2",
                student_name: 'Tiger Nixon',
                father_name:"Shambhu",
                class:6,
                trnsprt_no:'12345',
                pickup:'Gomti Nagar',
               

            },
            {
                serial_no: "2",
                student_name: 'Tiger Nixon',
                father_name:"Shambhu",
                class:6,
                trnsprt_no:'12345',
                pickup:'Gomti Nagar',
               

            },
            {
                serial_no: "2",
                student_name: 'Tiger Nixon',
                father_name:"Shambhu",
                class:6,
                trnsprt_no:'12345',
                pickup:'Gomti Nagar',
               

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
                <Breadcrumb.Item href="#">
                    All Reports
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Vehicle Fee Info</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                   
                    <Card >
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Vehicle Fee Info
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

export default VehicleFeeInfo;