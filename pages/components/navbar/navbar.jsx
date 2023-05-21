import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import { fetchHome } from "../../../components/apiData";
import { useState, useEffect } from "react";

function UseNavbar() {
  const [navkomik, setNav] = useState([]);

  async function navList() {
    const res = await fetchHome();
    setNav(res.menu);
  }

  function searchKeyUp(e) {
    if (e.keyCode !== 13) return;
    const form = document.getElementById("query");
    const query = form.value;
    window.location.href = "/search/" + query;
  }

  function search() {
    const form = document.getElementById("query");
    const query = form.value;
    window.location.href = "/search/" + query;
  }

  useEffect(() => {
    navList();
  }, []);

  return (
    <div>
      <Navbar bg="danger" expand="lg">
        <Container fluid className="px-5">
          <Link href="/">
            <Image
              alt="logo"
              src="/ryukomik_logo.png"
              width={150}
              height={70}
            />
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
                href={`/komikk/manhwa/page/1`}
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
              <Nav.Link
                className="text-light"
                style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                href={`/bookmark`}
              >
                BOOKMARK
              </Nav.Link>
              <Nav.Link
                className="text-light"
                style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                href={`https://anime.ryukoproject.app/`}
              >
                ANIME
              </Nav.Link>
            </Nav>
            <div className="d-flex" id="search">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="query"
                onKeyUp={searchKeyUp}
              />
              <Button
                style={{ fontFamily: "Poppins" }}
                variant="light"
                onClick={search}
              >
                Search
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default UseNavbar;
