import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaStarOfLife } from "react-icons/fa6";
import { MDBDataTable } from 'mdbreact';
import { LiaEdit } from "react-icons/lia";
import { AiFillCloseSquare } from "react-icons/ai";
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

const RouteMaster = () => {
    const data = {
        columns: [
            {
                label: '#',
                field: 'serial_no',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Vehicle Number',
                field: 'vehicle_no',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Route',
                field: 'route',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Picup Point & Fare',
                field: 'pickuppoint_fare',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 100
            },


        ],
        rows: [
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                route: 'System Architect',
                pickuppoint_fare: 'Edinburgh',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div> ,

            },
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                route: 'System Architect',
                pickuppoint_fare: 'Edinburgh',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>,

            },
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                route: 'System Architect',
                pickuppoint_fare: 'Edinburgh',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>,

            },
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                route: 'System Architect',
                pickuppoint_fare: 'Edinburgh',
                action: <div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>,

            },
            {
                serial_no: "2",
                vehicle_no: 'Tiger Nixon',
                route: 'System Architect',
                pickuppoint_fare: 'Edinburgh',
                action:<div className='fs-5'><LiaEdit style={{color:"green",cursor:"pointer",marginLeft:"10px"}}/><AiFillCloseSquare style={{color:"red",cursor:"pointer",marginLeft:"10px"}}/></div>,

            },
           
        ]
    };
    const [elements, setElements] = useState([]);

    const addElement = () => {

        setElements(prevElements => [...prevElements, <div key={prevElements.length}>
            <FormGroup>
                <Row>
                    <Col sm={4}>
                        <Label>Pickup Point</Label><FaStarOfLife className='mandStar' />
                        <Input type='text' />
                    </Col>
                    <Col sm={4}>
                        <Label>Amount</Label><FaStarOfLife className='mandStar' />
                        <Input type='text' />
                    </Col>
                    <Col sm={2} style={{ textAlign: "center", marginTop: "30px" }}>
                        {/* <Button onClick={addElement}>Add more</Button> */}
                    </Col>

                </Row>
            </FormGroup>
        </div>]);
    };

    const deleteElement = id => {
        setElements(prevElements => prevElements.filter(element => element.id !== id));

    };
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Transport
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Route Master</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Route Master
                        </CardTitle>
                        <CardBody className='cardBody'>
                            <Form>
                                <FormGroup>
                                    <Row>
                                        <Col sm={6}>
                                            <Label>Vehicle Number</Label><FaStarOfLife className='mandStar' />
                                            <Input id="exampleSelect" name="select" type="select" >
                                                <option>Select</option>
                                                <option>UP32 BM 2000</option>
                                                <option>UP32 BM 2000</option>
                                                <option>UP32 BM 2000</option>
                                                <option>UP32 BM 2000</option>
                                                <option>UP32 BM 2000</option>
                                                <option>UP32 BM 2000</option>
                                                <option>UP32 BM 2000</option>

                                            </Input>
                                        </Col>
                                        <Col sm={6}>
                                            <Label>Route Name</Label><FaStarOfLife className='mandStar' />
                                            <Input type='text' />
                                        </Col>

                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col sm={4}>
                                            <Label>Pickup Point</Label><FaStarOfLife className='mandStar' />
                                            <Input type='text' />
                                        </Col>
                                        <Col sm={4}>
                                            <Label>Amount</Label><FaStarOfLife className='mandStar' />
                                            <Input type='text' />
                                        </Col>
                                        <Col sm={4} style={{ textAlign: "center", marginTop: "30px" }}>
                                            <Button onClick={addElement} style={{ marginRight: "30px" }}>Add Pickup</Button>
                                            <Button onClick={() => deleteElement()}>Reset Pickup</Button>
                                        </Col>
                                        {elements}
                                    </Row>
                                </FormGroup>

                            </Form>
                            <Button onClick={() => alert("added")}>Add Route</Button>
                        </CardBody>
                    </Card>
                    <Card >
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0 rounded" style={{ background: "gray", color: "white" }}>
                            <i className="bi bi-bell me-2"> </i>
                            Existiong Route Record
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

export default RouteMaster;