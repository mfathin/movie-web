import { Card, Container, Row, Col, Image, Nav, Navbar, NavbarBrand } from "react-bootstrap"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/Batman.jpg"
import ironmanImage from "../assets/images/superhero/ironman.jpg"
import sangchiImage from "../assets/images/superhero/sang-chi.jpg"
import spidermanImage from "../assets/images/superhero/spiderman.png"
import supermanImage from "../assets/images/superhero/superman.jpg"

const Superhero = () => {
    return (
        <div>
          <Container id="superhero">
            <br />
            <Navbar variant="dark">
                <Container >
                    <NavbarBrand href="/"><h1>SUPERHERO FILMS</h1></NavbarBrand>
                    <Nav>
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#trending">TRENDING</Nav.Link>
                    </Nav>
                </Container>
              </Navbar>            <br />
            <Row>
              <Col md={4} className="movieWrapper">
                <Card className=" movieImage">
                  <Image
                  src={avengerImage} 
                  alt="Avenger Movies" 
                  className="images"
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">AVENGERS INFINITE WAR</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card>
                </Col>
              <Col md={4}className="movieWrapper">
                <Card className=" movieImage">
                  <Image
                  src={batmanImage} 
                  alt="Batman Movies" 
                  className="images"
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">BATMAN</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card>
                </Col>
              <Col md={4}className="movieWrapper">
                <Card className=" movieImage">
                  <Image
                  src={ironmanImage} 
                  alt="Ironman Movies" 
                  className="images"
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">IRON MAN</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card>
                </Col>
              <Col md={4}className="movieWrapper">
                <Card className=" movieImage">
                  <Image
                  src={sangchiImage} 
                  alt="Sangchi Movies"
                  className="images" 
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">SANG-CHI</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card>
                </Col>
              <Col md={4}className="movieWrapper">
                <Card className=" movieImage">
                  <Image
                  src={spidermanImage} 
                  alt="Spiderman Movies"
                  className="images" 
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">SPIDER-MAN</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card>
                </Col>
              <Col md={4}className="movieWrapper">
                <Card className=" movieImage">
                  <Image
                  src={supermanImage} 
                  alt="Superman Movies" 
                  className="images"
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">MAN OF STEEL</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                  </div>
                </Card>
                </Col>
            </Row>
          </Container>
        
        </div>
    )
}

export default Superhero