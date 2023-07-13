import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux/es/exports";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";

const NavBar = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
 
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/" className="NavLinks">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </Badge>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
