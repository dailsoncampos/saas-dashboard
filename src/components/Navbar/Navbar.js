import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function PageHeader() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Dashboard</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default PageHeader;