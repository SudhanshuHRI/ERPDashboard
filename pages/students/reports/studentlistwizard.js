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
} from 'reactstrap';
import { useEffect, useState } from 'react';

import React from 'react';
import { Table } from 'reactstrap';


const StudentListWizard = () => {
    const [allCheck, setAllCheckbox] = useState(false)
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Students
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">Reports</Breadcrumb.Item>
                <Breadcrumb.Item active>Student List Wizard</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Please Select the Check Box to Download the Excel File
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <Form>
                                <FormGroup>
                                    <Row>
                                        <Col sm={4}>
                                            <Label>Select Class</Label>
                                            <Input id="exampleSelect" type="select" >
                                                <option>Select</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </Input>
                                        </Col>
                                        <Col sm={4}>
                                            <Label>Select Section</Label>
                                            <Input id="exampleSelect" type="select" >
                                                <option>Select</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                            </Input>
                                        </Col>
                                        <Col sm={4}>
                                            <Label>Select Social Catogary</Label>
                                            <Input id="exampleSelect" type="select" >
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
                                        <Col sm={4}>
                                            <Label>Select Student Type</Label>
                                            <Input id="exampleSelect" type="select" >
                                                <option>All</option>
                                                <option>DayScholar</option>
                                                <option>P.G.</option>
                                                <option>Hostal</option>
                                                <option>Bus</option>
                                            </Input>
                                        </Col>
                                        <Col sm={4}>
                                            <Label>Select Order By</Label>
                                            <Input id="exampleSelect" type="select" >
                                                <option>Select</option>
                                                <option>First Name</option>
                                                <option>Roll Number</option>
                                                <option>Section</option>
                                            </Input>
                                        </Col>
                                        <Col sm={4}>
                                            <Label>Student Status</Label>
                                            <Input id="exampleSelect" type="select" >
                                                <option>Select</option>
                                                <option>Active</option>
                                                <option>Inactive</option>

                                            </Input>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col sm={4}>
                                            <Label for="exampleSelect">Select Gender</Label>
                                            <Input id="exampleSelect" name="select" type="select" >
                                                <option>Select</option>
                                                <option>Boy</option>
                                                <option>Girl</option>

                                            </Input>

                                        </Col>
                                        <Col sm={4}>
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
                                        <Col sm={4}>
                                            <Label for="exampleSelect">Is T.C. Submitted ? </Label>
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
                                        <Col sm={4}>
                                            <Label for="exampleSelect">Select Cast</Label>
                                            <Input id="exampleSelect" name="select" type="select" >
                                                <option>Select</option>
                                                <option>Thakur</option>
                                                <option>Ahir</option>

                                            </Input>

                                        </Col>
                                        {/* <Col>
                                            <Label for="exampleSelect">Mother Toungue</Label>
                                            <Input id="exampleSelect" name="select" type="select">
                                                <option>Select</option>
                                                <option>English</option>
                                                <option>Gujrati</option>
                                                <option>Hindi</option>
                                                <option>Punjabi</option>
                                                <option>Bhojpuri</option>
                                            </Input>
                                        </Col>
                                        <Col>
                                            <Label for="exampleSelect">Nationalilty</Label>
                                            <Input id="exampleSelect" name="select" type="select">
                                                <option>Select</option>
                                                <option>India</option>
                                                <option>Nepal</option>
                                                <option>Bhutan</option>
                                                <option>Sri Lanka</option>
                                                <option>Bangladesh</option>
                                            </Input>
                                        </Col> */}

                                    </Row>
                                </FormGroup>
                            </Form>
                            <Button >Download</Button>
                            <hr />
                            <div>
                                <Button className='m-2 ms-0' onClick={()=>allCheck==false?setAllCheckbox(true):setAllCheckbox(false)}>Select All Fields</Button>
                                <Table bordered responsive>
                                    <tbody >
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck}/>
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Fees ID</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Parent ID</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Student Name</b>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Father Name</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Class</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Section</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Student Roll No.</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Fee Group</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Fee Apply Form</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
                                            </td>
                                            <td>
                                                <input type='checkbox' className='m-2' checked={allCheck} />
                                                <b>Admission No</b>
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

export default StudentListWizard;