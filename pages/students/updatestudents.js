import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaStarOfLife } from "react-icons/fa6";
import { getData, getFormatedDate, postData } from '../../helpers/helper';
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
import { Toaster, toast } from 'sonner';



const UpdateStudents = () => {
    const [key, setKey] = useState('home');
    const [tableDisplay, setTableDisplay] = useState('d-none');
    const [formDisplay, setFormDisplay] = useState('d-none');
    const [studentList, setStudentList] = useState([]);
    const [search_student, setSearch_student] = useState('');
    const [search_father, setSearch_father] = useState('');
    const [search_dob, setSearch_dob] = useState('');



    const [student_name, setStudent_name] = useState('');
    const [father_name, setFather_name] = useState('');
    const [mother_name, setMother_name] = useState('');
    const [gaurdian_name, setGaurdian_name] = useState('');
    const [gaurdian_phno, setGaurdian_phno] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [religion, setReligion] = useState('');
    const [catogary, setCatogary] = useState('');
    const [caste, setCaste] = useState('');
    const [toungue, setToungue] = useState('');
    const [nationality, setNationality] = useState('');
    const [last_school, setLast_school] = useState('');
    const [leaving_reason, setLeaving_reason] = useState('');
    const [tc_submitted, setTc_submitted] = useState('');
    const [session, setSession] = useState('');
    const [class_no, setClass_no] = useState('');
    const [enrollment, setEnrollment] = useState('');
    const [student_sr_no, setStudent_sr_no] = useState('');
    const [aadhar_no, setAadhar_no] = useState('');
    const [fees_book_no, setFees_book_no] = useState('');
    const [admission_date, setAdmission_date] = useState('');
    const [joining_date, setJoining_date] = useState('');
    const [house_club, setHouse_club] = useState('');
    const [board_reg_no, setBoard_reg_no] = useState('');
    const [scholar, setScholar] = useState('');
    const [student_type, setStudent_type] = useState('');
    const [resi_address, setResi_address] = useState('');
    const [resi_city, setResi_city] = useState('');
    const [resi_pin, setResi_pin] = useState('');
    const [resi_region, setResi_region] = useState('');
    const [resi_state, setResi_state] = useState('');
    const [resi_country, setResi_country] = useState('');
    const [perm_address, setPerm_address] = useState('');
    const [perm_city, setPerm_city] = useState('');
    const [perm_pin, setPerm_pin] = useState('');
    const [perm_region, setPerm_region] = useState('');
    const [perm_state, setPerm_state] = useState('');
    const [perm_country, setPerm_country] = useState('');
    const [bank_name,setBank_name] = useState('');
    const [branch_name,setBranch_name] = useState('');
    const [ifsc,setIfsc] = useState('');
    const[account_no,setAccount_no] = useState('');
    const [re_account_no,setRe_account_no] = useState('');
    const [ac_holder,setAc_holder] = useState('');
    const [student_photo, setStudent_photo] = useState('');
    const [birth_cert, setBirth_cert] = useState('');
    const [Caste_cert, setCaste_cert] = useState('');
    const [char_cert, setChar_cert] = useState('');
    const [marksheet, setMarksheet] = useState('');
    const [migration_cert, setMigration_cert] = useState('');
    const [perv_report_card, setPerv_report_card] = useState('');
    const [TC, setTC] = useState('');
    const [aadhar_copy, setAadhar_copy] = useState('');

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
        try {
            const resp = await getData("/student/api/getStudent")
            console.log("get students resp", resp?.data)
            setStudentList(resp?.data)

        } catch (error) {
            console.log("try-catch error")
        }
    }
    const searchStudent = () => {
        if (search_student == "" || search_father == "" || search_dob == "") {
            toast.error("All fields are required!")
        }
        else {

            const filterStudent = [];
            studentList.map((item) => {
                if (item.first_name.toLowerCase() == search_student.toLowerCase() && item.father_name.toLowerCase() == search_father.toLowerCase() && getFormatedDate(item.date_of_birth, "DD-MM-YYYY") == getFormatedDate(search_dob, "DD-MM-YYYY")) {
                    filterStudent.push(item)
                }
            })
            if (filterStudent.length > 0) {
                setTableDisplay("d-block")
                console.log("filterStudent", filterStudent)
                setAadhar_no(filterStudent[0]?.aadhar_card_no)
                setDob(filterStudent[0]?.date_of_birth)
                setFather_name(filterStudent[0]?.father_name)
                setStudent_photo(filterStudent[0]?.aadhar_card_no)
                setStudent_name(filterStudent[0]?.first_name)
                setStudent_sr_no(filterStudent[0]?.sr_no)
            }
            else {
                toast.error("No Student Found!")
            }

        }

    }
    return (
        <div>
            <Toaster position="top-center" richColors />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Students
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Update Student</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Update Student
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
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input
                                                    id="exampleEmail"
                                                    value={search_student}
                                                    onChange={(e) => setSearch_student(e.target.value)}
                                                    type="Name"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label >
                                                    Father Name
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input
                                                    id="examplePassword"
                                                    value={search_father}
                                                    onChange={(e) => setSearch_father(e.target.value)}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label >
                                                    Date of Birth
                                                </Label><FaStarOfLife className='mandStar' />
                                                <Input
                                                    id="examplePassword"
                                                    value={search_dob}
                                                    onChange={(e) => setSearch_dob(e.target.value)}
                                                    type="date"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={3} className='d-flex justify-content-center align-items-end'>
                                            <FormGroup>
                                                <Button
                                                    color="primary"
                                                    onClick={searchStudent}
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
                                                S.R.Number
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
                                                {student_sr_no}
                                            </td>
                                            <td>
                                                <Image src="/dummy.jpg" height={70} width={70} alt='alt' />
                                            </td>
                                            <td>
                                                {student_name}
                                            </td>
                                            <td>
                                                {father_name}
                                            </td>
                                            <td>
                                                {getFormatedDate(dob, "DD-MMM-YYYY")}
                                            </td>
                                            <td>
                                                {aadhar_no}
                                            </td>
                                            <td>
                                                <Button
                                                    color="primary"
                                                    onClick={() => setFormDisplay("d-block")}
                                                >
                                                    Edit
                                                </Button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className={`${formDisplay}`}>
                        <CardBody className='cardBody'>

                            {/* update it here */}

                            <Tabs
                                activeKey={key}
                                id="uncontrolled-tab-example"
                                className="mb-3"
                                onSelect={(k) => setKey(k)}


                            >
                                <Tab eventKey="home" title="Basic Details">
                                    <Form>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label>Student Name</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={student_name} onChange={(e) => setStudent_name(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Father Name</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={father_name} onChange={(e) => setFather_name(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Mother Name</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={mother_name} onChange={(e) => setMother_name(e.target.value)} />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label>Gaurdian Name</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={gaurdian_name} onChange={(e) => setGaurdian_name(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Gaurdian Phone Number</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={gaurdian_phno} onChange={(e) => setGaurdian_phno(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Date of Birth</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='date' value={dob} onChange={(e) => setDob(e.target.value)} />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Select Gender</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={gender} onChange={(e) => setGender(e.target.value)}>
                                                        <option>Select</option>
                                                        <option>Boy</option>
                                                        <option>Girl</option>

                                                    </Input>

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Select Religion</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={religion} onChange={(e) => setReligion(e.target.value)}>
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
                                                    <Label for="exampleSelect">Select Catogary</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={catogary} onChange={(e) => setCatogary(e.target.value)}>
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
                                                    <Label for="exampleSelect">Select Caste</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={caste} onChange={(e) => setCaste(e.target.value)}>
                                                        <option>Select</option>
                                                        <option>Thakur</option>
                                                        <option>Ahir</option>

                                                    </Input>

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Mother Toungue</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={toungue} onChange={(e) => setToungue(e.target.value)}>
                                                        <option>Select</option>
                                                        <option>English</option>
                                                        <option>Gujrati</option>
                                                        <option>Hindi</option>
                                                        <option>Punjabi</option>
                                                        <option>Bhojpuri</option>
                                                    </Input>
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Nationalilty</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={nationality} onChange={(e) => setNationality(e.target.value)}>
                                                        <option>Select</option>
                                                        <option>India</option>
                                                        <option>Nepal</option>
                                                        <option>Bhutan</option>
                                                        <option>Sri Lanka</option>
                                                        <option>Bangladesh</option>
                                                    </Input>
                                                </Col>

                                            </Row>
                                        </FormGroup>
                                    </Form>

                                    <Button onClick={() => setKey("academic")}>Next Page</Button>
                                </Tab>
                                <Tab eventKey="academic" title="Academic Details">
                                    <Form>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label>Last School Name</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={last_school} onChange={(e) => setLast_school(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Reason of Leaving</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={leaving_reason} onChange={(e) => setLeaving_reason(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>T.C. Submitted</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={tc_submitted} onChange={(e) => setTc_submitted(e.target.value)}>
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
                                                    <Label>Session</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={session} onChange={(e) => setSession(e.target.value)}>
                                                        <option>Select</option>
                                                        <option>2020-21</option>
                                                        <option>2020-21</option>
                                                        <option>2020-21</option>
                                                        <option>2020-21</option>


                                                    </Input>
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Class</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={class_no} onChange={(e) => setClass_no(e.target.value)}>
                                                        <option>Select</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>


                                                    </Input>
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Enrollment No</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={enrollment} onChange={(e) => setEnrollment(e.target.value)} />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Sr. No.</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={student_sr_no} onChange={(e) => setStudent_sr_no(e.target.value)} />

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Aadhar No</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='number' value={aadhar_no} onChange={(e) => setAadhar_no(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Fees Book No</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={fees_book_no} onChange={(e) => setFees_book_no(e.target.value)} />
                                                </Col>

                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Admission Date</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='date' value={admission_date} onChange={(e) => setAdmission_date(e.target.value)} />

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Joining Date</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='date' value={joining_date} onChange={(e) => setJoining_date(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">House Club</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={house_club} onChange={(e) => setHouse_club(e.target.value)}>
                                                        <option>Select</option>
                                                        <option>Blue</option>
                                                        <option>Green</option>
                                                        <option>Red</option>
                                                        <option>Yellow</option>

                                                    </Input>
                                                </Col>

                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Board Registration No</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' />

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Scholar No.</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={scholar} onChange={(e) => setScholar(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Student type</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={student_type} onChange={(e) => setStudent_type(e.target.value)}>
                                                        <option>Select</option>
                                                        <option>Paying Guest</option>
                                                        <option>Bus</option>
                                                        <option>Hostle</option>
                                                        <option>Day Scholar</option>

                                                    </Input>
                                                </Col>

                                            </Row>
                                        </FormGroup>
                                    </Form>
                                    <Button onClick={() => setKey("home")} className='m-2'>Previous Page</Button>
                                    <Button onClick={() => setKey("others")}>Next Page</Button>
                                </Tab>
                                <Tab eventKey="others" title="Other Details">
                                    <Form>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label> Resident Address</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={resi_address} onChange={(e) => setResi_address(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>City</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={resi_city} onChange={(e) => setResi_city(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Pin Code</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='number' value={resi_pin} onChange={(e) => setResi_pin(e.target.value)} />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label>Region</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={resi_region} onChange={(e) => setResi_region(e.target.value)}>
                                                        <option>Select</option>
                                                        <option>Urban</option>
                                                        <option>Rural</option>

                                                    </Input>
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>State</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={resi_state} onChange={(e) => setResi_state(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Country</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={resi_country} onChange={(e) => setResi_country(e.target.value)} />
                                                </Col>

                                            </Row>

                                        </FormGroup>

                                        {/* <FormGroup
                                            check
                                            inline
                                        >
                                            <Input type="checkbox" />
                                            <Label check>
                                                Same as above
                                            </Label>
                                        </FormGroup> */}
                                        <br />
                                        <hr />
                                        <br />

                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label> Permanent Address</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={perm_address} onChange={(e) => setPerm_address(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>City</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={perm_city} onChange={(e) => setPerm_city(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Pin Code</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='number' value={perm_pin} onChange={(e) => setPerm_pin(e.target.value)} />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label>Region</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={perm_region} onChange={(e) => setPerm_region(e.target.value)}>
                                                        <option>Select</option>
                                                        <option>Urban</option>
                                                        <option>Rural</option>

                                                    </Input>
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>State</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={perm_state} onChange={(e) => setPerm_state(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Country</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={perm_country} onChange={(e) => setPerm_country(e.target.value)} />
                                                </Col>

                                            </Row>

                                        </FormGroup>
                                        <br />
                                        <hr />
                                        <br />
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Bank Name</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={bank_name} onChange={(e)=>setBank_name(e.target.value)}/>

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Branch Name</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={branch_name} onChange={(e)=>setBranch_name(e.target.value)}/>
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">IFSC</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={ifsc} onChange={(e)=>setIfsc(e.target.value)}/>
                                                </Col>

                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Account No</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='number' value={aadhar_no} onChange={(e)=>setAccount_no(e.target.value)}/>

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Re-type Account No</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='number' />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Account Holder Name</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' />
                                                </Col>

                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Board Registration No</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' />

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Scholar No.</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Student type</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select">
                                                        <option>Select</option>
                                                        <option>Paying Guest</option>
                                                        <option>Bus</option>
                                                        <option>Hostle</option>
                                                        <option>Day Scholar</option>

                                                    </Input>
                                                </Col>

                                            </Row>
                                        </FormGroup>

                                    </Form>
                                    <Button onClick={() => setKey("academic")} className='m-2'>Previous Page</Button>
                                    <Button onClick={() => setKey("document")} >Next Page</Button>
                                </Tab>
                                <Tab eventKey="document" title="Document Upload" >
                                    <Table responsive bordered className='text-center'>
                                        <thead>
                                            <tr>
                                                <th>
                                                    #
                                                </th>
                                                <th>
                                                    Document Type
                                                </th>
                                                <th>
                                                    Selected
                                                </th>
                                                <th>
                                                    Update Document
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    1
                                                </th>
                                                <td>
                                                    Student Photo<FaStarOfLife className='mandStar' />
                                                </td>
                                                <td>
                                                    <Image src="/dummy.jpg" height={200} width={200} alt='img' />
                                                </td>
                                                <td>
                                                    <Input type='file' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    2
                                                </th>
                                                <td>
                                                    Birth Certificate<FaStarOfLife className='mandStar' />
                                                </td>
                                                <td>
                                                    <Image src="/dummy.jpg" height={200} width={200} alt='img' />
                                                </td>
                                                <td>
                                                    <Input type='file' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    3
                                                </th>
                                                <td>
                                                    Caste Certificate<FaStarOfLife className='mandStar' />
                                                </td>
                                                <td>
                                                    <Image src="/dummy.jpg" height={200} width={200} alt='img' />
                                                </td>
                                                <td>
                                                    <Input type='file' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    4
                                                </th>
                                                <td>
                                                    Character Certificate<FaStarOfLife className='mandStar' />
                                                </td>
                                                <td>
                                                    <Image src="/dummy.jpg" height={200} width={200} alt='img' />
                                                </td>
                                                <td>
                                                    <Input type='file' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    5
                                                </th>
                                                <td>
                                                    Doc TTL<FaStarOfLife className='mandStar' />
                                                </td>
                                                <td>
                                                    <Image src="/dummy.jpg" height={200} width={200} alt='img' />
                                                </td>
                                                <td>
                                                    <Input type='file' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    6
                                                </th>
                                                <td>
                                                    MarkeSheet<FaStarOfLife className='mandStar' />
                                                </td>
                                                <td>
                                                    <Image src="/dummy.jpg" height={200} width={200} alt='img' />
                                                </td>
                                                <td>
                                                    <Input type='file' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    7
                                                </th>
                                                <td>
                                                    Migration Certificate<FaStarOfLife className='mandStar' />
                                                </td>
                                                <td>
                                                    <Image src="/dummy.jpg" height={200} width={200} alt='img' />
                                                </td>
                                                <td>
                                                    <Input type='file' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    8
                                                </th>
                                                <td>
                                                    Previous Result Card<FaStarOfLife className='mandStar' />
                                                </td>
                                                <td>
                                                    <Image src="/dummy.jpg" height={200} width={200} alt='img' />
                                                </td>
                                                <td>
                                                    <Input type='file' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    9
                                                </th>
                                                <td>
                                                    Transfer Certificate<FaStarOfLife className='mandStar' />
                                                </td>
                                                <td>
                                                    <Image src="/dummy.jpg" height={200} width={200} alt='img' />
                                                </td>
                                                <td>
                                                    <Input type='file' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    10
                                                </th>
                                                <td>
                                                    Aadhar Card<FaStarOfLife className='mandStar' />
                                                </td>
                                                <td>
                                                    <Image src="/dummy.jpg" height={200} width={200} alt='img' />
                                                </td>
                                                <td>
                                                    <Input type='file' />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Button onClick={() => setKey("others")} className='m-2'>Previous Page</Button>
                                    <Button onClick={() => alert("submitted")} >Update Student</Button>
                                </Tab>
                            </Tabs>

                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default UpdateStudents;