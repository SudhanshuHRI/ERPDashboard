import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from "next/link";

const Register = () => {
    return (
        <div className="p-5 border  " style={{ boxShadow: "0 0 10px lightgray", borderRadius: "20px" }}>
            <div className=" text-center">
                <img src="/dummylogo.jpg" height={0} width={0} style={{ width: "50%", height: "auto" }} />
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                   
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
               
                </Form.Group>

                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-2 fs-5">
                    Register
                </Button>
                <br />
                <p className="  mt-3 text-center  w-100">
                    Already have account ? <Link href="#" style={{ textDecoration: "none" }}>Login</Link>
                </p>
            </Form>
        </div>
    );
}

export default Register;