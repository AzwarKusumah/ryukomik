import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import { fetchHome } from "../apiData";
import { useState, useEffect } from "react";
function navbar() {
  const [navkomik, setNav] = useState([]);

  useEffect(() => {
    navList();
  }, []);

  async function navList() {
    const res = await fetchHome();
    setNav(res.menu);
  }

  return (
    <div>
      <Navbar bg="danger" expand="lg">
        <Container fluid className="px-5">
          <Link href="/">
            <Image alt="logo" src="/ryukomik.png" width={150} height={70} />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="ms-5 " id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                className="text-light"
                style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                href="/daftar-komik/page/1"
              >
                DAFTAR KOMIK
              </Nav.Link>
              <Nav.Link
                className="text-light"
                style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                href={`/komikk/manga/page/1`}
              >
                MANGA
              </Nav.Link>
              <Nav.Link
                className="text-light"
                style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                href=""
              >
                MANHWA
              </Nav.Link>
              <Nav.Link
                className="text-light"
                style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                href={`/komikk/manhua/page/1`}
              >
                MANHUA
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ fontFamily: "Poppins" }} variant="light">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="bg-light">
        <Nav className="d-flex justify-content-evenly container mt-2 mb-2">
          {navkomik.slice(0, 6).map((items) => (
            <Nav.Item>
              <Nav.Link
                style={{ fontFamily: "Poppins" }}
                className="bg-secondary rounded-3 text-decoration-none text-light fs-6"
                href={`/${items.link.endpoint}`}
              >
                {items.name}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </div>
  );
}

export default navbar;
