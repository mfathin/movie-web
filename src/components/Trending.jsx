import { Card, Container, Row, Col, Image, Navbar, Nav, NavbarBrand } from "react-bootstrap"
import duneImage from "../assets/images/trending/Dune.jpg"
import everythingImage from "../assets/images/trending/Everything.jpg"
import infiniteImage from "../assets/images/trending/Infinite.jpg"
import jokerImage from "../assets/images/trending/Joker.jpg"
import lightyearImage from "../assets/images/trending/Lightyear.jpg"
import morbiusImage from "../assets/images/trending/Morbius.jpg"

const Trending = () => {
    return (
        <div>
          <Container id="trending">
            <br />
            <Navbar variant="dark">
                <Container >
                    <NavbarBrand href="/"><h1>TRENDING FILMS</h1></NavbarBrand>
                    <Nav>
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                    </Nav>
                </Container>
              </Navbar>
            <br />
            <Row>
              <Col md={4} className="movieWrapper">
                <Card className=" movieImage">
                  <Image
                  src={duneImage} 
                  alt="Dune Movies" 
                  className="images"
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">DUNE</Card.Title>
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
                  src={everythingImage} 
                  alt="Everything Movies" 
                  className="images"
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">EVERYTHING EVERYWHERE ALL AT ONCE</Card.Title>
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
                  src={infiniteImage} 
                  alt="Infinite Movies" 
                  className="images"
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">INFINITE STORM</Card.Title>
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
                  src={jokerImage} 
                  alt="Joker Movies"
                  className="images" 
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">JOKER</Card.Title>
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
                  src={lightyearImage} 
                  alt="Lightyear Movies"
                  className="images" 
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">LIGHTYEAR</Card.Title>
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
                  src={morbiusImage} 
                  alt="Morbius Movies" 
                  className="images"
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">MORBIUS</Card.Title>
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

export default Trending