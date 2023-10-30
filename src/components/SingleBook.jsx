import { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = { asin: '' }
  checkSelected = (value) => (value = this.props.selected ? 'seleceted' : '')
  render() {
    return (
      <>
        {/* {console.log(this.props.book.asin)} */}
        <Col md={3} className="py-2">
          <Card className="h-100" border={this.props.selected ? 'success' : ''}>
            <Card.Img
              variant="top"
              className="h-75"
              src={this.props.book.img}
              onClick={() => this.props.selected}
            ></Card.Img>
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title className="text-nowrap text-truncate">
                {this.props.book.title}
              </Card.Title>
              <Card.Text>{this.props.book.price} €</Card.Text>
            </Card.Body>
            {this.props.selected && <CommentArea pippo={this.state.asin} />}
          </Card>
        </Col>
      </>
    )
  }
}

export default SingleBook
