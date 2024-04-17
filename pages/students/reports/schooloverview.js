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


const SchoolOverView = () => {

    const [key, setKey] = useState('home');
    const [tableDisplay, setTableDisplay] = useState('d-none');
    const [formDisplay, setFormDisplay] = useState('d-none')

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
                <Breadcrumb.Item active>School Overview</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            School Overview
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <Row>
                                        <Col md={10}>
                                            <FormGroup>
                                                <Label >
                                                    Select Class
                                                </Label>
                                                <Input id="exampleSelect" name="select" type="select" >
                                                    <option>Select</option>
                                                    <option>All Classes</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>

                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        {/* <Col md={3}>
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
                                        </Col> */}
                                        <Col md={2} className='d-flex justify-content-center align-items-end'>
                                            <FormGroup>
                                                <Button
                                                    color="primary"
                                                    onClick={() => setTableDisplay("d-block")}
                                                >
                                                    Search
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
                                <Table bordered responsive>
                                    <tbody >
                                        <tr>
                                            <th>

                                                Class
                                            </th>
                                            <th>

                                                Section
                                            </th>
                                            <th>

                                                Boys
                                            </th>
                                            <th>

                                                Girls
                                            </th>
                                            <th>

                                                Section Total
                                            </th>
                                            <th>

                                                TC
                                            </th>
                                            <th>

                                                Dropout
                                            </th>
                                            <th>

                                                New
                                            </th>
                                        </tr>


                                        <tr className='totalStudents'>
                                            <th >
                                                1
                                            </th>
                                            <td style={{ display: "grid" }}>
                                                <input type='text' value={`A`} />
                                                <input type='text' value={`B`} />
                                                <input type='text' value={`C`} />
                                                <input type='text' value={`D`} />

                                            </td>
                                            <td>

                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                            </td>
                                            <td>

                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                            </td>
                                            <td>

                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                            </td>
                                            <td>

                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                            </td>
                                            <td>

                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                            </td>
                                            <td>

                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                                <input type='number' value={0} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className='totalstud'>
                                                Total Boys
                                            </th>
                                            <td colSpan={7}>
                                                0
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className='totalstud'>
                                                Total Girls
                                            </th>
                                            <td colSpan={7}>
                                                0
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

export default SchoolOverView;