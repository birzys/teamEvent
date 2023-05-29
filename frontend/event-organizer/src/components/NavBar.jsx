// import { Link } from "react-router-dom";
// export const NavBar = () => {
//   return (
//     <nav>
//       <ul>
//         <Link to="/">Home</Link>
//         <Link style={{ marginLeft: "50px" }} to="/add">
//           Add participants
//         </Link>
//       </ul>
//     </nav>
//   );
// };

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Team Event</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add participants</Nav.Link>
            <Nav.Link href="/participants">Participants list</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />{" "}
    </>
  );
};
