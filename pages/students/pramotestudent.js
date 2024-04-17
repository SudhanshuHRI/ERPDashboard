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

const PramoteStudent = () => {

    const [showtable, setShowTable] = useState("d-none")

    const data = {

        columns: [
            {
                label: '#',
                field: 'serial_no',
                select: <input type="checkbox" />,
                sort: 'asc',
                width: 100
            },
            {
                label: 'Select All',
                field: 'select',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Student Name',
                field: 'name',
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
                label: 'Gender',
                field: 'gender',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Admission Number',
                field: 'admission_no',
                sort: 'asc',
                width: 100
            },


        ],
        rows: [
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Tiger Nixon',
                father_name: 'System Architect',
                gender: 'Edinburgh',
                admission_no: '61',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Garrett Winters',
                father_name: 'Accountant',
                gender: 'Tokyo',
                admission_no: '63',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Ashton Cox',
                father_name: 'Junior Technical Author',
                gender: 'San Francisco',
                admission_no: '66',
            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Cedric Kelly',
                father_name: 'Senior Javascript Developer',
                gender: 'Edinburgh',
                admission_no: '22',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Airi Satou',
                father_name: 'Accountant',
                gender: 'Tokyo',
                admission_no: '33',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Brielle Williamson',
                father_name: 'Integration Specialist',
                gender: 'New York',
                admission_no: '61',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Herrod Chandler',
                father_name: 'Sales Assistant',
                gender: 'San Francisco',
                admission_no: '59',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Rhona Davidson',
                father_name: 'Integration Specialist',
                gender: 'Tokyo',
                admission_no: '55',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Colleen Hurst',
                father_name: 'Javascript Developer',
                gender: 'San Francisco',
                admission_no: '39',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Sonya Frost',
                father_name: 'Software Engineer',
                gender: 'Edinburgh',
                admission_no: '23',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Jena Gaines',
                father_name: 'Office Manager',
                gender: 'London',
                admission_no: '30',
            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Quinn Flynn',
                father_name: 'Support Lead',
                gender: 'Edinburgh',
                admission_no: '22',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Charde Marshall',
                father_name: 'Regional Director',
                gender: 'San Francisco',
                admission_no: '36',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Haley Kennedy',
                father_name: 'Senior Marketing Designer',
                gender: 'London',
                admission_no: '43',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Tatyana Fitzpatrick',
                father_name: 'Regional Director',
                gender: 'London',
                admission_no: '19',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Michael Silva',
                father_name: 'Marketing Designer',
                gender: 'London',
                admission_no: '66',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Paul Byrd',
                father_name: 'Chief Financial Officer (CFO)',
                gender: 'New York',
                admission_no: '64',

            },
            {
                serial_no: "2",
                select: <input type="checkbox" />,
                name: 'Gloria Little',
                father_name: 'Systems Administrator',
                gender: 'New York',
                admission_no: '59',

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
                <Breadcrumb.Item active>Pramote Student</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Pramote Student
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

export default PramoteStudent;