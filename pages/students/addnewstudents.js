import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaStarOfLife } from "react-icons/fa6";
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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import { getData, postData } from '../../helpers/helper';


const AddNewStudents = () => {

    const [key, setKey] = useState('home');
    const [student_name, setStudent_name] = useState('');
    const [father_name, setFather_name] = useState('');
    const [mother_name, setMother_name] = useState('');
    const [gaurdian_name, setGardian_name] = useState('');
    const [gaurdian_phone_no, setGaurdian_phone_no] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [religion, setReligion] = useState('');
    const [catogary, setCarogary] = useState('');
    const [cast, setCast] = useState('');
    const [toungue, setToungue] = useState('');
    const [nationality, setNationality] = useState('');
    const [last_school_name, setLast_school_name] = useState('');
    const [reason_leaving, setReason_leaving] = useState('');
    const [tc_submitted, setTc_submitted] = useState('');
    const [section, setSection] = useState('');
    const [stdclass, setStdclass] = useState('');
    const [enrollment, setEnrollment] = useState('');
    const [sr_no, setSr_no] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [feesbook, setFeesbook] = useState('');
    const [admissiondate, setAdmissionDate] = useState('');
    const [joiningdate, setJoiningdate] = useState('');
    const [schlHouse, setSchlHouse] = useState('');
    const [boardRegistration, setBoardRegistration] = useState('');
    const [scholor, setScholor] = useState('');
    const [studentType, setStudentType] = useState('');
    const [resi_address, setResi_address] = useState('');
    const [resi_city, setResi_city] = useState('');
    const [resi_pincode, setResi_pincode] = useState('');
    const [resi_region, setResi_region] = useState('');
    const [resi_state, setResi_state] = useState('');
    const [resi_country, setResi_country] = useState('');
    const [perm_address, setPerm_address] = useState('');
    const [perm_city, setPerm_city] = useState('');
    const [perm_pincode, setPerm_pincode] = useState('');
    const [perm_region, setPerm_region] = useState('');
    const [perm_state, setPerm_state] = useState('');
    const [perm_country, setPerm_country] = useState('');
    const [bankName, setBankName] = useState('');
    const [branchName, setBranchName] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [bank_ac, setBank_ac] = useState('');
    const [cnf_bank_ac, set_cnf_bank_ac] = useState('');
    const [ac_holder, setAc_holder] = useState('');
    const [studentPhoto, setStudentPhoto] = useState('');
    const [birthCert, setBirthCert] = useState('');
    const [casteCert, setCasteCert] = useState('');
    const [charCert, setCharCert] = useState('');
    const [marksheet, setmarksheet] = useState('');
    const [migration, setMigration] = useState('');
    const [transferCert, setTransferCert] = useState('');
    const [aadhar_copy, setAadhar_copy] = useState('');

    const [checkbox, setCheckBox] = useState(false)
    const [Session, setSession] = useState('');
    const [classList, setClassList] = useState([])
    const [sessionList, setSessionList] = useState([])

    useEffect(() => {
        getclass()
        getSession()
    }, []);

    const getclass = async () => {
        try {
            const resp = await getData("/class/api/getClass");
            setClassList(resp?.data)

        } catch (error) {
            console.log("try-catch error")
        }
    }

    const getSession = async () => {
        try {
            const resp = await getData("/session/api/getSessions")

            setSessionList(resp?.data?.data)
        } catch (error) {
            console.log("try-catch error", error)
        }
    }

    const submitform = async () => {

        if (student_name == "") {
            toast.error("Student name is required!")
        }
        else if (father_name == "") {
            toast.error("Father name is required!")
        }
        else if (mother_name == "") {
            toast.error("Mother name is required!")
        }
        else if (gaurdian_name == "") {
            toast.error("Gaurdian name is required!")
        }
        else if (gaurdian_phone_no == "") {
            toast.error("Gaurdian phone is required!")
        }
        else if (dob == "") {
            toast.error("Date of Birth is required!")
        }
        else if (gender == "") {
            toast.error("Gender is required!")
        }
        else if (religion == "") {
            toast.error("Religion is required!")
        }
        else if (catogary == "") {
            toast.error("Catogary is required!")
        }
        else if (cast == "") {
            toast.error("Caste is required!")
        }
        else if (toungue == "") {
            toast.error("Mother Toungue is required!")
        }
        else if (nationality == "") {
            toast.error("Nationality is required!")
        }
        else if (last_school_name == "") {
            toast.error("Last school name is required!")
        }
        else if (reason_leaving == "") {
            toast.error("Reason of leaving is required!")
        }
        else if (tc_submitted == "") {
            toast.error("Please fill T.C. is submitted?")
        }
        else if (stdclass == "") {
            toast.error("Class is required!")
        }
        else if (enrollment == "") {
            toast.error("Enrollment number is required!")
        }
        else if (sr_no == "") {
            toast.error("S.R. no is required!")
        }
        else if (aadhar == "") {
            toast.error("Aadhar number is required!")
        }
        else if (feesbook == "") {
            toast.error("Fees book number is required!")
        }
        else if (admissiondate == "") {
            toast.error("Admission date is required!")
        }
        else if (joiningdate == "") {
            toast.error("Joining date is required!")
        }
        else if (schlHouse == "") {
            toast.error("School house is required!")
        }
        else if (boardRegistration == "") {
            toast.error("Board registration number is required!")
        }
        else if (scholor == "") {
            toast.error("Scholor is required!")
        }
       
        else if (studentType == "") {
            toast.error("Student type is required!")
        }
        else if (resi_address == "") {
            toast.error("Residence address is required!")
        }
        else if (resi_city == "") {
            toast.error("Residence city is required!")
        }
        else if (resi_pincode == "") {
            toast.error("Residence address pincode is required!")
        }
        else if (religion == "") {
            toast.error("Religion is required!")
        }
        else if (resi_state == "") {
            toast.error("Residence state is required!")
        }
        else if (resi_country == "") {
            toast.error("Residence country is required!")
        }
        else if (perm_address == "") {
            toast.error("Permanent address is required!")
        }
        else if (perm_city == "") {
            toast.error("Permanent city is required!")
        }
        else if (perm_pincode == "") {
            toast.error("Permanent address pincode is required!")
        }
        else if (perm_region == "") {
            toast.error("Permanent address region is required!")
        }
        else if (perm_state == "") {
            toast.error("Permanent address state is required!")
        }
        else if (perm_country == "") {
            toast.error("Permanent address country is required!")
        }
        else if (bankName == "") {
            toast.error("Bank name is required!")
        }
        else if (branchName == "") {
            toast.error("Bank's branch is required!")
        }
        else if (ifsc == "") {
            toast.error("IFSC is required!")
        }
        else if (bank_ac == "") {
            toast.error("Account number is required!")
        }
        else if (cnf_bank_ac == "") {
            toast.error(" Please confirm bank account number!")
        }
        else if (ac_holder == "") {
            toast.error("Account holder's name is required!")
        }
        else if (studentPhoto == "") {
            toast.error("Student photo is required!")
        }
        else if (birthCert == "") {
            toast.error("Birth certificate is required!")
        }
        else if (casteCert == "") {
            toast.error("Caste certificate is required!")
        }
        else if (charCert == "") {
            toast.error("Charactor certificate is required!")
        }
        else if (marksheet == "") {
            toast.error("Marksheet is required!")
        }
        else if (migration == "") {
            toast.error("Migration Certificate is required!")
        }
        else if (transferCert == "") {
            toast.error("Transfer Certificate is required!")
        }
        else if (aadhar_copy == "") {
            toast.error("Aadhar card is required!")
        }
        else {
            var classId;
            var sessionId;
            classList.map((item) => {
                if (item.name == stdclass) {
                    classId = item._id;
                }
            })
            sessionList.map((item) => {
                if (item.sessionName == Session) {
                    sessionId = item._id;
                }
            })
            const studentData = {
                "bank_account": {
                    "account_no": bank_ac,
                    "account_name": ac_holder,
                    "bank_name": bankName,
                    "ifsc_code": ifsc
                },
                "residence_address": {
                    "country": resi_country,
                    "state": resi_state,
                    "city_district": resi_city,
                    "pin_no": resi_pincode
                },
                "copy_address": {
                    "country": perm_country,
                    "state": perm_state,
                    "city_district": perm_city,
                    "pin_no": perm_pincode
                },
                "first_name": student_name,
                "father_name": father_name,
                "mother_name": mother_name,
                "father_mobile_no": gaurdian_phone_no,
                "class_id": classId,
                "session_id": sessionId,
                "date_of_birth": dob,
                "gender": gender,
                "religion": religion,
                "social_category": catogary,
                "mother_tongue": toungue,
                "nationality": nationality,
                "enrollment_no": enrollment,
                "aadhar_card_no": aadhar,
                "fee_book_no": feesbook,
                "cast": cast,
                "house": schlHouse,
                "date_of_admission": admissiondate,
                "date_of_joining": joiningdate,
                "board_registration_number": boardRegistration,
                "scholar_no": scholor,
                "last_school_attended": last_school_name,
                "sr_no": sr_no,
                "tc_submitted": tc_submitted,
                "reason_for_leaving_school": reason_leaving,
                "student_type": studentType,
                "guardian_name": gaurdian_name,
                "guardian_mobile_no": gaurdian_phone_no
            }
            const resp = await postData("/student/api/postStudent", studentData)
            resp.status == 201 ? toast.success("Student registered successfully!") : toast.error("Error !")
        }
    }

    const handleCheckbox = () => {
        if (checkbox) {
            setPerm_address('')
            setPerm_city('')
            setPerm_pincode('')
            setPerm_region('')
            setPerm_state('')
            setPerm_country('')
        }


        else {
            setPerm_address(resi_address)
            setPerm_city(resi_city)
            setPerm_pincode(resi_pincode)
            setPerm_region(resi_region)
            setPerm_state(resi_state)
            setPerm_country(resi_country)
        }
        setCheckBox(checkbox ? false : true)

    }

    return (
        <div>
            <Toaster position="top-center" richColors />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Students
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Add New Student</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            New Student Registration
                        </CardTitle>
                        <CardBody className='cardBody'>
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
                                                    <Input type='text' value={gaurdian_name} onChange={(e) => setGardian_name(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Gaurdian Phone Number</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='number' value={gaurdian_phone_no} onChange={(e) => setGaurdian_phone_no(e.target.value)} />
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
                                                    <Input id="exampleSelect" name="select" type="select" value={catogary} onChange={(e) => setCarogary(e.target.value)}>
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
                                                    <Input id="exampleSelect" name="select" type="select" value={cast} onChange={(e) => setCast(e.target.value)} >
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
                                                    <Input type='text' value={last_school_name} onChange={(e) => setLast_school_name(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Reason of Leaving</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={reason_leaving} onChange={(e) => setReason_leaving(e.target.value)} />
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
                                                    <Label>Session</Label>
                                                    <Input id="exampleSelect" name="select" type="select" value={Session} onChange={(e) => setSession(e.target.value)}><FaStarOfLife className='mandStar' />
                                                        <option>Select</option>
                                                        {sessionList.map((item, index) => (
                                                            <option key={index}>{item.sessionName}</option>
                                                        ))}



                                                    </Input>
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Class</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={stdclass} onChange={(e) => setStdclass(e.target.value)}>
                                                        <option>Select</option>
                                                        {classList.map((item, index) => (
                                                            <option key={index}>{item.name}</option>
                                                        ))}

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
                                                    <Input type='text' value={sr_no} onChange={(e) => setSr_no(e.target.value)} />

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Aadhar No</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='number' value={aadhar} onChange={(e) => setAadhar(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Fees Book No</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={feesbook} onChange={(e) => setFeesbook(e.target.value)} />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Admission Date</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='date' value={admissiondate} onChange={(e) => setAdmissionDate(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Joining Date</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='date' value={joiningdate} onChange={(e) => setJoiningdate(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">House Club</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={schlHouse} onChange={(e) => setSchlHouse(e.target.value)}>
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
                                                    <Input type='text' value={boardRegistration} onChange={(e) => setBoardRegistration(e.target.value)} />

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Scholar No.</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={scholor} onChange={(e) => setScholor(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Student type</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select" value={studentType} onChange={(e) => setStudentType(e.target.value)}>
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
                                                    <Input type='number' value={resi_pincode} onChange={(e) => setResi_pincode(e.target.value)} />
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

                                        <FormGroup
                                            check
                                            inline
                                        >
                                            <Input type="checkbox" checked={checkbox} onChange={handleCheckbox} />
                                            <Label check>
                                                Same as above
                                            </Label>
                                        </FormGroup>

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
                                                    <Input type='number' value={perm_pincode} onChange={(e) => setPerm_pincode(e.target.value)} />
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
                                                    <Input type='text' value={bankName} onChange={(e) => setBankName(e.target.value)} />

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Branch Name</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={branchName} onChange={(e) => setBranchName(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">IFSC</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={ifsc} onChange={(e) => setIfsc(e.target.value)} />
                                                </Col>

                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Account No</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='number' value={bank_ac} onChange={(e) => setBank_ac(e.target.value)} />

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Re-type Account No</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='number' value={cnf_bank_ac} onChange={(e) => set_cnf_bank_ac(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Account Holder Name</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' value={ac_holder} onChange={(e) => setAc_holder(e.target.value)} />
                                                </Col>

                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    {/* <Label for="exampleSelect">Board Registration No</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' /> */}

                                                </Col >
                                                <Col sm={4}>
                                                    {/* <Label for="exampleSelect">Scholar No.</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='text' /> */}
                                                </Col>
                                                <Col sm={4}>
                                                    {/* <Label for="exampleSelect">Student type</Label><FaStarOfLife className='mandStar' />
                                                    <Input id="exampleSelect" name="select" type="select">
                                                        <option>Select</option>
                                                        <option>Paying Guest</option>
                                                        <option>Bus</option>
                                                        <option>Hostle</option>
                                                        <option>Day Scholar</option>

                                                    </Input> */}
                                                </Col>

                                            </Row>
                                        </FormGroup>

                                    </Form>
                                    <Button onClick={() => setKey("academic")} className='m-2'>Previous Page</Button>
                                    <Button onClick={() => setKey("document")}>Next Page</Button>
                                </Tab>
                                <Tab eventKey="document" title="Document Upload" >
                                    <Form>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label>Student Photo</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='file' value={studentPhoto} onChange={(e) => setStudentPhoto(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Birth Certificate</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='file' value={birthCert} onChange={(e) => setBirthCert(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Caste Certificate</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='file' value={casteCert} onChange={(e) => setCasteCert(e.target.value)} />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label>Character Certificate</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='file' value={charCert} onChange={(e) => setCharCert(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Doc TTL</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='file' />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label>Marksheet</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='file' value={marksheet} onChange={(e) => setmarksheet(e.target.value)} />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup>
                                            <Row>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Migration Certificate</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='file' value={migration} onChange={(e) => setMigration(e.target.value)} />

                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Transfer Certificate</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='file' value={transferCert} onChange={(e) => setTransferCert(e.target.value)} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Label for="exampleSelect">Student Aadhar</Label><FaStarOfLife className='mandStar' />
                                                    <Input type='file' value={aadhar_copy} onChange={(e) => setAadhar_copy(e.target.value)} />
                                                </Col>

                                            </Row>
                                        </FormGroup>

                                    </Form>
                                    <Button onClick={() => setKey("others")} className='m-2'>Previous Page</Button>
                                    <Button onClick={() => submitform()}>Submit</Button>
                                </Tab>
                            </Tabs>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default AddNewStudents;