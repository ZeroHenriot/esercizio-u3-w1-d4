import Card from 'react-bootstrap/Card'
import fantasy from '../books/fantasy.json'
import history from '../books/history.json'
import horror from '../books/horror.json'
import romance from '../books/romance.json'
import scifi from '../books/scifi.json'
import { Container, Row, Col } from 'react-bootstrap'

function AllTheBooks() {
  return (
    <Container>
      <Row>
        <div className="d-flex display-5 fw-bold justify-content-center">
          Libri Fantasy
        </div>
        {fantasy.map((books) => (
          <Col md={3} key={books.asin} className="py-2">
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-nowrap text-truncate">
                  {books.title}
                </Card.Title>
                <Card.Text>{books.price} €</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <div className="d-flex display-5 fw-bold justify-content-center">
          Libri Fantasy
        </div>
        {history.map((books) => (
          <Col md={3} key={books.asin} className="py-2">
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-nowrap text-truncate">
                  {books.title}
                </Card.Title>
                <Card.Text>{books.price} €</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <div className="d-flex display-5 fw-bold justify-content-center">
          Libri Horror
        </div>
        {horror.map((books) => (
          <Col md={3} key={books.asin} className="py-2">
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-nowrap text-truncate">
                  {books.title}
                </Card.Title>
                <Card.Text>{books.price} €</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <div className="d-flex display-5 fw-bold justify-content-center">
          Libri Romance
        </div>
        {romance.map((books) => (
          <Col md={3} key={books.asin} className="py-2">
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-nowrap text-truncate">
                  {books.title}
                </Card.Title>
                <Card.Text>{books.price} €</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <div className="d-flex display-5 fw-bold justify-content-center">
          Libri Sci-Fi
        </div>
        {scifi.map((books) => (
          <Col md={3} key={books.asin} className="py-2">
            <Card className="h-100">
              <Card.Img variant="top" src={books.img} className="h-75" />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-nowrap text-truncate">
                  {books.title}
                </Card.Title>
                <Card.Text>{books.price} €</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllTheBooks
