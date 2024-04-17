import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import LogoWhite from "../../assets/images/logos/xtremelogowhite.svg";
import user1 from "../../assets/images/users/user1.jpg";
import { Router, useRouter } from "next/router";
import { getData } from "../../../helpers/helper";


const Header = ({ showMobmenu }) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [sessionList, setSessionList] = useState([]);
  const [selectedSession, setSelectedSession] = useState('')

  const route = useRouter();

  useEffect(() => {
    getSession()
    setSelectedSession(localStorage.getItem("erp_session"))
  }, []);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  const getSession = async () => {
    try {
      const resp = await getData("/session/api/getSessions")
      let list = []
      resp?.data?.data?.map((item) => {
        list.push(item.sessionName)
      })
      setSessionList(list)

    } catch(error){
      console.log("try-catch error", error)
    }
  }

  const handleSession = (value) => {
      setSelectedSession(value)
      localStorage.setItem("erp_session", value)
  }

  const handleLogout = () => {
    localStorage.clear();
    route.push("/")

  }

  return (
    <Navbar dark expand="md" style={{ backgroundColor: "gray" }}>
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <Image src={LogoWhite} alt="logo" />
        </NavbarBrand>
        <Button color="primary" className="d-lg-none" onClick={showMobmenu}>
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>


          {/* <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              DD Menu
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>

        <Row>
          <Col xs="auto">
            <Form.Group controlId="formGridState">

              <Form.Select value={selectedSession} onChange={(e) => handleSession(e.target.value)} >
                <option>Choose Session</option>
                {sessionList.map((item, index) => (<option key={index}>{item}</option>))}
              </Form.Select>
            </Form.Group>
          </Col>

        </Row>

        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="primary" style={{ border: "none", backgroundColor: "gray" }}>
            <div style={{ lineHeight: "0px" }}>
              <Image
                src='/mypic.jpg'
                alt="profile"
                className="rounded-circle"
                width="40"
                height="40"

              />
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Balance</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
