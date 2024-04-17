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

const TransferCertificate = () => {

    const [showtable, setShowTable] = useState("d-none")
    const [key, setKey] = useState('home');
    const [showForm, setShowForm] = useState("d-none")

    const data = {

        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 200
            },
            {
                label: 'T.C. Number',
                field: 'tc_no',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Date of Generate',
                field: 'generate_date',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Student ID',
                field: 'Student_id',
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
                label: 'Class',
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




        ],
        rows: [
            {
                serial_no: "2",

                name: '12',
                father_name: 'System Architect',
                gender: 'Edinburgh',
                admission_no: '61',

            },
            {
                serial_no: "2",

                name: '12',
                father_name: 'Accountant',
                gender: 'Tokyo',
                admission_no: '63',

            },
            {
                serial_no: "2",

                name: '12',
                father_name: 'Junior Technical Author',
                gender: 'San Francisco',
                admission_no: '66',
            },
            {
                serial_no: "2",

                name: '12',
                father_name: 'Senior Javascript Developer',
                gender: 'Edinburgh',
                admission_no: '22',

            },
            {
                serial_no: "2",

                name: '12',
                father_name: 'Accountant',
                gender: 'Tokyo',
                admission_no: '33',

            },
            {
                serial_no: "2",

                name: '12',
                father_name: 'Integration Specialist',
                gender: 'New York',
                admission_no: '61',

            },
            {
                serial_no: "2",

                name: 'Herrod Chandler',
                father_name: 'Sales Assistant',
                gender: 'San Francisco',
                admission_no: '59',

            },
            {
                serial_no: "2",

                name: 'Rhona Davidson',
                father_name: 'Integration Specialist',
                gender: 'Tokyo',
                admission_no: '55',

            },
            {
                serial_no: "2",

                name: 'Colleen Hurst',
                father_name: 'Javascript Developer',
                gender: 'San Francisco',
                admission_no: '39',

            },
            {
                serial_no: "2",

                name: 'Sonya Frost',
                father_name: 'Software Engineer',
                gender: 'Edinburgh',
                admission_no: '23',

            },
            {
                serial_no: "2",

                name: 'Jena Gaines',
                father_name: 'Office Manager',
                gender: 'London',
                admission_no: '30',
            },
            {
                serial_no: "2",

                name: 'Quinn Flynn',
                father_name: 'Support Lead',
                gender: 'Edinburgh',
                admission_no: '22',

            },
            {
                serial_no: "2",

                name: 'Charde Marshall',
                father_name: 'Regional Director',
                gender: 'San Francisco',
                admission_no: '36',

            },
            {
                serial_no: "2",

                name: 'Haley Kennedy',
                father_name: 'Senior Marketing Designer',
                gender: 'London',
                admission_no: '43',

            },
            {
                serial_no: "2",

                name: 'Tatyana Fitzpatrick',
                father_name: 'Regional Director',
                gender: 'London',
                admission_no: '19',

            },
            {
                serial_no: "2",

                name: 'Michael Silva',
                father_name: 'Marketing Designer',
                gender: 'London',
                admission_no: '66',

            },
            {
                serial_no: "2",

                name: 'Paul Byrd',
                father_name: 'Chief Financial Officer (CFO)',
                gender: 'New York',
                admission_no: '64',

            },
            {
                serial_no: "2",

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
                <Breadcrumb.Item active>Transfer Certificate</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Search Student
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <Row>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label >
                                                    Student Name
                                                </Label>
                                                <Input
                                                    id="exampleEmail"


                                                    type="Name"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label >
                                                    Father Name
                                                </Label>
                                                <Input
                                                    id="examplePassword"


                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label >
                                                    Date of Birth
                                                </Label>
                                                <Input
                                                    id="examplePassword"


                                                    type="date"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={3} className='d-flex justify-content-center align-items-end'>
                                            <FormGroup>
                                                <Button
                                                    color="primary"
                                                    onClick={() => setShowTable("d-block")}
                                                >
                                                    Search Student
                                                </Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                </Form>

                            </div>
                        </CardBody>
                        <div className={`p-3 ${showtable}`}>
                            <Table responsive bordered className='text-center '>
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>
                                            Student ID
                                        </th>
                                        <th>
                                            Student Photo
                                        </th>
                                        <th>
                                            Student Name
                                        </th>
                                        <th>
                                            Father Name
                                        </th>
                                        <th>
                                            Date of Birth
                                        </th>
                                        <th>
                                            Student Aadhar No
                                        </th>
                                        <th>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            1
                                        </th>
                                        <td>
                                            _1
                                        </td>
                                        <td>
                                            <Image src="/dummy.jpg" height={100} width={100} alt='alt' />
                                        </td>
                                        <td>
                                            Suresh
                                        </td>
                                        <td>
                                            Mukesh
                                        </td>
                                        <td>
                                            15/07/1998
                                        </td>
                                        <td>
                                            1234 5678 9012
                                        </td>
                                        <td>
                                            <Button
                                                color="primary"
                                                onClick={() => setShowForm("d-block")}
                                            >
                                                Edit
                                            </Button>
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </div>
                    </Card>
                    <Card className={`${showForm}`}>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Update Student Data
                        </CardTitle>
                        <CardBody className='cardBody'>

                            {/* update it here */}

                            <Form>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label>T.C. Number</Label>
                                            <Input type='text' disabled value={10} />
                                        </Col>
                                        <Col>
                                            <Label>T.C. Date</Label>
                                            <Input type='date' />
                                        </Col>
                                        <Col>
                                            <Label>S.R. Number</Label>
                                            <Input type='number' />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label>Student Name</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Father Name</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Mother Name</Label>
                                            <Input type='text' />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label>Gaurdian Name</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Gaurdian Phone Number</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Date of Birth</Label>
                                            <Input type='date' />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label for="exampleSelect">Select Gender</Label>
                                            <Input id="exampleSelect" name="select" type="select" >
                                                <option>Select</option>
                                                <option>Boy</option>
                                                <option>Girl</option>

                                            </Input>

                                        </Col>
                                        <Col>
                                            <Label for="exampleSelect">Select Religion</Label>
                                            <Input id="exampleSelect" name="select" type="select">
                                                <option>Select</option>
                                                <option>Buddhist</option>
                                                <option>Cristian</option>
                                                <option>Hindu</option>
                                                <option>Jain</option>

                                                <option>Muslim</option>
                                                <option>Parsee</option>
                                                <option>Sikh</option>

                                            </Input>
                                        </Col>
                                        <Col>
                                            <Label for="exampleSelect">Select Catogary</Label>
                                            <Input id="exampleSelect" name="select" type="select">
                                                <option>Select</option>
                                                <option>General</option>
                                                <option>OBC</option>
                                                <option>SC</option>
                                                <option>ST</option>
                                                <option>Others</option>
                                            </Input>
                                        </Col>

                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label for="exampleSelect">Select Cast</Label>
                                            <Input id="exampleSelect" name="select" type="select" >
                                                <option>Select</option>
                                                <option>Thakur</option>
                                                <option>Ahir</option>

                                            </Input>

                                        </Col>
                                        <Col>
                                            <Label for="exampleSelect">Select Class</Label>
                                            <Input id="exampleSelect" name="select" type="select">
                                                <option>Select</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </Col>
                                        <Col>
                                            <Label for="exampleSelect">Select Section</Label>
                                            <Input id="exampleSelect" name="select" type="select">
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
                                        <Col>
                                            <Label for="exampleSelect">Date of Admission</Label>
                                            <Input type='date' />

                                        </Col>
                                        <Col>
                                            <Label for="exampleSelect">School/Board Name</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label for="exampleSelect">Failed once / twice in same result</Label>
                                            <Input id="exampleSelect" name="select" type="select">
                                                <option>Select</option>
                                                <option>Yes</option>
                                                <option>No</option>

                                            </Input>
                                        </Col>

                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label>Subject Studies 1</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Subject Studies 2</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Subject Studies 3</Label>
                                            <Input type='text' />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label>Subject Studies 4</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Subject Studies 5</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Subject Studies 6</Label>
                                            <Input type='text' />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label>Pramotion to heigher class</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Whether NCC Cadet / Boy Scout / Girl Guide ?</Label>
                                            <Input id="exampleSelect" type="select">
                                                <option>Select</option>
                                                <option>Yes</option>
                                                <option>No</option>

                                            </Input>
                                        </Col>

                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>


                                        <Col>
                                            <Label>(mention achievement level therein)</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Any fee concession availed of : If so, the nature of such concession</Label>
                                            <Input type='text' />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label>Month upto which the pupil has paid school dues</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Extra Curricular activities in which the pupil usually took part</Label>
                                            <Input type='text' />
                                        </Col>

                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label>Total Working Days</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Reason for leaving the School</Label>
                                            <Input type='text' />
                                        </Col>

                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label>General Conduct</Label>
                                            <Input type='text' />
                                        </Col>
                                        <Col>
                                            <Label>Other Remarks</Label>
                                            <Input type='text' />
                                        </Col>

                                    </Row>
                                </FormGroup>
                            </Form>

                            <Button >Generate T.C.</Button>

                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Previous T.C. Data
                        </CardTitle>
                        <CardBody>
                            <div className='sudhTable'>
                                <MDBDataTable
                                    striped
                                    bordered
                                    responsive
                                    data={data}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default TransferCertificate;