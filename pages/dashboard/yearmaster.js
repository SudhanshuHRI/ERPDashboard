import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { FaStarOfLife } from "react-icons/fa6";
import { LiaEdit } from "react-icons/lia";
import { AiFillCloseSquare } from "react-icons/ai";
import { deleteData, getData, postData, putData } from '../../helpers/helper';
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


const YearMaster = () => {

    const [classlist, setclasslist] = useState([])
    const [sessionlist, setsessionlist] = useState([])
    const [session, setSession] = useState('');
    const [Refresh, setRefresh] = useState('')
    const [updatebtn, setupdatebtn] = useState(false)
    const [itemUpdateId, setItemUpdateId] = useState("")

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
                width: 150
            },


            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 200
            },



        ],
        // rows: [
        //     {
        //         serial_no: "1",
        //         session: '2020-21',
        //         active_classes: "5," + "6",
        //         action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

        //     },
        //     {
        //         serial_no: "1",
        //         session: '2020-21',
        //         active_classes: "5," + "6",
        //         action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

        //     },
        //     {
        //         serial_no: "1",
        //         session: '2020-21',
        //         active_classes: "5," + "6",
        //         action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

        //     },
        //     {
        //         serial_no: "1",
        //         session: '2020-21',
        //         active_classes: "5," + "6," + "Post Graduation",
        //         action: <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} /></div>,

        //     },
        // ]
        rows: sessionlist

    };

    useEffect(() => {
        getClasses()
        getSession()
    }, [Refresh]);

    const getClasses = async () => {
        try {
            const resp = await getData("/class/api/getClass")

            let classlist = []
            resp.data.map((item, index) => {
                classlist.push(item.className + " " + item.section)
            })

            setclasslist(classlist)

        } catch (error) {
            console.log("try-catch error", error)
        }
    }
    const getSession = async () => {
        try {
            const resp = await getData("/session/api/getSessions")

            let sessionlist = [];
            resp?.data?.data?.map((item, index) => {
                let listitem = {};
                listitem._id = item._id;
                listitem.serial_no = index + 1;
                listitem.session = item.sessionName;
                listitem.action = <div className='fs-5'><LiaEdit style={{ color: "green", cursor: "pointer", marginLeft: "10px" }} onClick={() => { setSession(item.sessionName), setupdatebtn(true), setItemUpdateId(item._id),window.scrollTo(0,0);}} /><AiFillCloseSquare style={{ color: "red", cursor: "pointer", marginLeft: "10px" }} onClick={() => deleteSession(item._id)} /></div>;

                sessionlist.push(listitem)
            })

            setsessionlist(sessionlist)
            // console.log("session list", sessionlist)
        } catch (error) {
            console.log("try-catch error", error)
        }
    }
    const updateSession = async () => {
        try {

            //  console.log("itemUpdateId",itemUpdateId)
            const resp = await putData("/session/api/putSession", { "sessionName": session, "id": itemUpdateId })
            // console.log("update item resp", resp);
            resp.data.success ? toast.success(resp.data.message) : toast.error("Error!");
            setupdatebtn(false);
            setSession('');
            setRefresh(Math.random);
            

        } catch (error) {
            console.log("try-catch error", error)
        }
    }
    const deleteSession = async (id) => {
        console.log("Session Deleted", id)
        try {
            const resp = await deleteData("/session/api/deleteSession", { id: id })
            console.log("delete resp", resp)
            resp.data.message == "Session deleted" ? toast.success(resp.data.message) : toast.error("Error!")
            setRefresh(Math.random)
        } catch (error) {
            console.log("try-catch error", error)
        }
    }
    const CreateSession = async () => {
        if (session == '') {
            toast.error("Please fill Session field")
        } else {
            try {
                const resp = await postData("/session/api/createSession", { sessionName: session })
                console.log("create resp", resp)
                resp.data.success ? toast.success(resp.data.msg) : toast.error("Error!!")
                setRefresh(Math.random)
                setSession('')
            } catch (error) {
                console.log("try-catch error", error)
            }
        }

    }

    return (
        <div>
            <Toaster position="top-center" richColors />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Master Entries
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Session Details</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Add Session
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <div>
                                {/* search student */}
                                <Form>
                                    <FormGroup>
                                        <Row>
                                            <Col sm={6}>
                                                <Label>Session</Label><FaStarOfLife className='mandStar' />
                                                <Input type='text' value={session} onChange={(e) => setSession(e.target.value)} />
                                            </Col>
                                            <Col sm={6}>
                                                {/* <Label>Activate Classes In Session</Label><FaStarOfLife className='mandStar' />
                                                <Input id="exampleSelect" type="select">
                                                    <option>Select</option>
                                                    <option>All Classes</option>
                                                    {classlist.map((item, index) =>
                                                        <option key={index}>{item}</option>)}

                                                </Input> */}
                                            </Col>


                                        </Row>
                                    </FormGroup>



                                </Form>
                                {updatebtn == true ? <Button onClick={updateSession}>Update Session</Button> : <Button onClick={CreateSession}>Add Session</Button>}
                            </div>
                        </CardBody>
                    </Card>
                    <Card >
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Session Records
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

export default YearMaster;