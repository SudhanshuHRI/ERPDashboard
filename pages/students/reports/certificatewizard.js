import Breadcrumb from 'react-bootstrap/Breadcrumb';

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

const CertificateWizard = () => {


    const [key, setKey] = useState('home');
    const [tableDisplay, setTableDisplay] = useState('d-none');
    const [formDisplay, setFormDisplay] = useState('d-none')

    const data = {

        columns: [
            {
                label: '#',
                field: 'serial_no',
                select: <input type="checkbox" />,
                sort: 'asc',
                width: 200
            },
            {
                label: 'Select All',
                field: 'select',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Student Name',
                field: 'name',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Father Name',
                field: 'father_name',
                sort: 'asc',
                width: 200
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
                width: 200
            },
            {
                label: 'dummy column 1',
                field: 'admission_no',
                sort: 'asc',
                width: 200
            },
            {
                label: 'dummy column 2',
                field: 'admission_no',
                sort: 'asc',
                width: 200
            },
            {
                label: 'dummy column 3',
                field: 'admission_no',
                sort: 'asc',
                width: 200
            },
            {
                label: 'dummy column 4',
                field: 'admission_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'dummy column 5',
                field: 'admission_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'dummy column 6',
                field: 'admission_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'dummy column 7',
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
                <Breadcrumb.Item href="#">
                    Reports
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Certificate wizard</Breadcrumb.Item>
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
                                        <Col md={6}>
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
                                        <Col md={6}>
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
                                       
                                       
                                      
                                    </Row>
                                    <Row>
                                     
                                        <Col md={5}>
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
                                        <Col md={5}>
                                            <FormGroup>
                                                <Label >
                                                    Certificate Type
                                                </Label>
                                                <Input id="exampleSelect" name="select" type="select" >
                                                        <option>Select</option>
                                                        <option>Bonafide Certificate</option>
                                                        <option>Character Certificate</option>
                                                        <option>Confirmation of DOB</option>

                                                    </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={2} className='d-flex justify-content-center align-items-end'>
                                            <FormGroup>
                                                <Button
                                                    color="primary"
                                                    onClick={() => setTableDisplay("d-block")}
                                                >
                                                    Search Student
                                                </Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                </Form>

                            </div>





                        </CardBody>
                    </Card>
                    <Card className={`${tableDisplay}`}>
                        <CardBody>
                            <div >

                                <Table responsive bordered className='text-center'>
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
                                                    onClick={() => alert("generated")}
                                                >
                                                    Generate Certificate
                                                </Button>
                                            </td>
                                        </tr>
                                       
                                    </tbody>
                                </Table>
                            </div>




                        </CardBody>
                    </Card>
                   
                </Col>
            </Row>

        </div>
    );
}

export default CertificateWizard;