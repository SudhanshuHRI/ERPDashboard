import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from "axios"
import { getData, postData } from '../../helpers/helper';
import { Toaster, toast } from 'sonner';



const Login = () => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
      const   route = useRouter();
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (userEmail == '' || userPassword == '') {
            toast.error("Please fill all fields !")
        }
        else {
            route.push("/dashboard")
            // try {
            //     const formData = new FormData();
            //     formData.append("email", userEmail);
            //     formData.append("password", userPassword);

            //     const resp = await postData("/user/api/findUser", formData);
            //     console.log("Login resp", resp);

            //     if(resp?.data?.msg == "user found"){
            //         toast.success("Login Successful.")
                    
            //         localStorage.setItem("ERPtoken",resp?.data?.token)
            //     }
            //     else{
            //         toast.error("Error !")
            //     }
            // } catch (error) {
            //     console.log("try-catch error", error)
            // }
        }
    }
    return (
        <div className="p-5 border  " style={{ boxShadow: "0 0 10px lightgray", borderRadius: "20px" }}>
            <Toaster position="top-center" richColors />
            <div className=" text-center">
                <img src="/dummylgo.jpg" height={0} width={0} style={{ width: "70%", height: "auto",marginBottom:'10px' }} />
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We will never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-2 fs-5" onClick={handleLogin}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;