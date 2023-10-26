import { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = { selected: false }
  render() {
    return (
      <>
        <Col md={3} className="py-2">
          <Card className="h-100" border={this.state.selected ? 'success' : ''}>
            <Card.Img
              variant="top"
              className="h-75"
              src={this.props.book.img}
              onClick={() => this.setState({ selected: !this.state.selected })}
            ></Card.Img>
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title className="text-nowrap text-truncate">
                {this.props.book.title}
              </Card.Title>
              <Card.Text>{this.props.book.price} €</Card.Text>
            </Card.Body>
            {this.state.selected && (
              <CommentArea pippo={this.props.book.asin} />
            )}
          </Card>
        </Col>
      </>
    )
  }
}

export default SingleBook
