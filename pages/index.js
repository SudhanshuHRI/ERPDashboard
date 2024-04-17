import Image from "next/image";
import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from "next/link";
import Login from "../src/components/login";
import Register from "../src/components/register";


const login = () => {
    return (
        <div className="container-fluid bg-white rounded" style={{}}>
            <div className="row">
                <div className="col-12 col-md-7 text-center p-4" >
                    <Image src="/login.jpg" height={500} width={500} alt="img" style={{ width: "100%", height: "auto" }} />
                </div>
                <div className="col-12 col-md-5 p-5 d-grid " >
                    <Login/>
                </div>
            </div>
        </div>
    );
}

export default login;