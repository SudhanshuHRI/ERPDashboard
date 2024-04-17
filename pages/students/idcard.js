import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React from 'react';
import { MDBDataTable } from 'mdbreact';
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
const IdCard = () => {

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
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Class',
                field: 'class',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Section',
                field: 'section',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Roll Number',
                field: 'roll_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Student Name',
                field: 'student_name',
                sort: 'asc',
                width: 100
            },
            {
                label: "Father Name",
                field: 'father_name',
                sort: 'asc',
                width: 100
            },


        ],
        rows: [
            {
                serial_no: "2",
                name: 'Tiger Nixon',
                adm_no: 'System Architect',
                gender: 'Edinburgh',
                roll_no: '61',

            },
            {
                serial_no: "2",
                name: 'Garrett Winters',
                adm_no: 'Accountant',
                gender: 'Tokyo',
                roll_no: '63',

            },
            {
                serial_no: "2",
                name: 'Ashton Cox',
                adm_no: 'Junior Technical Author',
                gender: 'San Francisco',
                roll_no: '66',
            },
            {
                serial_no: "2",
                name: 'Cedric Kelly',
                adm_no: 'Senior Javascript Developer',
                gender: 'Edinburgh',
                roll_no: '22',

            },
            {
                serial_no: "2",
                name: 'Airi Satou',
                adm_no: 'Accountant',
                gender: 'Tokyo',
                roll_no: '33',

            },
            {
                serial_no: "2",
                name: 'Brielle Williamson',
                adm_no: 'Integration Specialist',
                gender: 'New York',
                roll_no: '61',

            },
            {
                serial_no: "2",
                name: 'Herrod Chandler',
                adm_no: 'Sales Assistant',
                gender: 'San Francisco',
                roll_no: '59',

            },
            {
                serial_no: "2",
                name: 'Rhona Davidson',
                adm_no: 'Integration Specialist',
                gender: 'Tokyo',
                roll_no: '55',

            },
            {
                serial_no: "2",
                name: 'Colleen Hurst',
                adm_no: 'Javascript Developer',
                gender: 'San Francisco',
                roll_no: '39',

            },
            {
                serial_no: "2",
                name: 'Sonya Frost',
                adm_no: 'Software Engineer',
                gender: 'Edinburgh',
                roll_no: '23',

            },
            {
                serial_no: "2",
                name: 'Jena Gaines',
                adm_no: 'Office Manager',
                gender: 'London',
                roll_no: '30',
            },
            {
                serial_no: "2",
                name: 'Quinn Flynn',
                adm_no: 'Support Lead',
                gender: 'Edinburgh',
                roll_no: '22',

            },
            {
                serial_no: "2",
                name: 'Charde Marshall',
                adm_no: 'Regional Director',
                gender: 'San Francisco',
                roll_no: '36',

            },
            {
                serial_no: "2",
                name: 'Haley Kennedy',
                adm_no: 'Senior Marketing Designer',
                gender: 'London',
                roll_no: '43',

            },
            {
                serial_no: "2",
                name: 'Tatyana Fitzpatrick',
                adm_no: 'Regional Director',
                gender: 'London',
                roll_no: '19',

            },
            {
                serial_no: "2",
                name: 'Michael Silva',
                adm_no: 'Marketing Designer',
                gender: 'London',
                roll_no: '66',

            },
            {
                serial_no: "2",
                name: 'Paul Byrd',
                adm_no: 'Chief Financial Officer (CFO)',
                gender: 'New York',
                roll_no: '64',

            },
            {
                serial_no: "2",
                name: 'Gloria Little',
                adm_no: 'Systems Administrator',
                gender: 'New York',
                roll_no: '59',

            }
        ]
    };


    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Students
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Generate ID Card</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Search Students
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <Row>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label >
                                                    Select Class
                                                </Label>
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
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
                                        </Col>

                                        <Col md={3} className='d-flex justify-content-center align-items-end'>
                                            <FormGroup>
                                                <Button
                                                    color="primary"
                                                    onClick={() => setShowTable("d-block")}
                                                >
                                                    Search Students
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
                            Student Data
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

export default IdCard;