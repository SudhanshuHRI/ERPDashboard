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

const PickupPointReport = () => {

    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Vehicle No.',
                field: 'vehicle_no',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Pickup Points',
                field: 'pickup_points',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Amount ',
                field: 'amount',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Student Name',
                field: 'student_name',
                sort: 'asc',
                width: 200
            },
            {
                label: 'class',
                field: 'class',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Section',
                field: 'section',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Father Name',
                field: 'father_name',
                sort: 'asc',
                width: 200
            },
        ],
        rows: [
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                pickup_points: "Shambhu",
                amount: 6,
                student_name: '12345',
                class: 'Gomti Nagar',
                father_name:"Ram"


            },
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                pickup_points: "Shambhu",
                amount: 6,
                student_name: '12345',
                class: 'Gomti Nagar',
                father_name:"Ram"


            },
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                pickup_points: "Shambhu",
                amount: 6,
                student_name: '12345',
                class: 'Gomti Nagar',
                father_name:"Ram"


            },
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                pickup_points: "Shambhu",
                amount: 6,
                student_name: '12345',
                class: 'Gomti Nagar',
                father_name:"Ram"


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
                <Breadcrumb.Item active>Pickup Points Report</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>

                    <Card >
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Pickup Points Report
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

export default PickupPointReport;