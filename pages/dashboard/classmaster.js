import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { FaStarOfLife } from "react-icons/fa6";
import { LiaEdit } from "react-icons/lia";
import { AiFillCloseSquare } from "react-icons/ai";
import { Toaster, toast } from 'sonner';

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
import { deleteData, getData, postData } from '../../helpers/helper';

const ClassMaster = () => {

    const [ClassSectionList, setClassSectionList] = useState([]);
    const [Class, setClass] = useState('');
    const [section, setSection] = useState("");
    const [updatebtn, setupdatebtn] = useState(false);
    const [updateitemID, setUpdateItemId] = useState('');
    const [refresh, setRefresh] = useState('')
    const [sessionList, setSessionList] = useState([])
    const [session, setSession] = useState('')
    const [rowArray, setRowArray] = useState([]);
    const [session_id, setSession_id] = useState('');

    useEffect(() => {
        getClass();
        getSession();
    }, [refresh]);

    const handleupdate = () => {
        alert("only function created !!")
        setupdatebtn(false)

    }
    const handledelete = async (item_id) => {


    }
    const getClass = async () => {

    }
    const addclass = async () => {
        try {
            
           const filteredSession =  sessionList.filter((item)=>item.sessionName==session)
          

           const addClassData = {
            session:filteredSession[0]._id,
            name:Class
           }
           console.log("addClassData",addClassData)
           const resp = await postData("/class/api/createClass",addClassData)
        //    console.log("add class resp",resp)
           resp?.data?.msg =="class created" ? toast.success(resp.data.msg):toast.error("Error !")
          setRefresh(Math.random)
          setClass('')
          setSession('')
        } catch (error) {
            console.log("try-catch error", error)
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
    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Sessions',
                field: 'session',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Classes',
                field: 'class',
                sort: 'asc',
                width: 150
            },
            // {
            //     label: 'Section',
            //     field: 'section',
            //     sort: 'asc',
            //     width: 270
            // },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 200
            },
        ],
        rows: [

            {
                serial_no: "#",
                session: "2020-21",
                class: "1" + "," + "2",
                section: "A",
                action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,
            }
        ]

    };

    return (
        <div>

            <Toaster position="top-center" richColors />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Master Entries
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Class and Section Details</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add Class and Section Details
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={4}>
                                                <Label>Session</Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" name="select" type="select" value={session} onChange={(e) => {setSession(e.target.value)}}>
                                                    <option>Select</option>
                                                    {sessionList.map((item, index) => (
                                                        <option key={index}>
                                                            {item.sessionName}
                                                        </option>
                                                    ))}
                                                </Input>
                                            </Col>
                                            <Col sm={4}>
                                                <Label>Class with Section</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' value={Class} onChange={(e) => setClass(e.target.value)}/>
                                            </Col>
                                            <Col sm={4}>
                                                {/* <Label>Section</Label>
                                                <Input type='text' value={section} onChange={(e) => setSection(e.target.value)} /> */}
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Form>
                                {updatebtn ? <Button onClick={() => handleupdate()}>Update Class</Button> : <Button onClick={addclass}>Add Class</Button>}
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Class and Section Records
                        </CardTitle>
                        <CardBody>
                            <div className='sudhTable'>

                                <MDBDataTable
                                    striped
                                    bordered
                                    hover
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

export default ClassMaster;