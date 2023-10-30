import { Component } from 'react'
import { Container, Row, Form, Col } from 'react-bootstrap'

import SingleBook from './SingleBook'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    searchValue: '',
    selected: false,
    asin: '',
  }

  checkSelected = (value, asin) => {
    this.setState({
      selected: value,
      asin: asin,
    })
  }

  render() {
    return (
      <>
        <Container>
          <Form.Group className="my-3">
            <Form.Control
              type="text"
              placeholder="cerca un libro"
              value={this.state.value}
              onChange={(e) => {
                this.setState({
                  searchValue: e.target.value,
                })
              }}
            />
          </Form.Group>
          <Row>
            <Col className="col-9">
              <Row>
                {this.props.books
                  .filter((book) =>
                    book.title
                      .toLowerCase()
                      .toUpperCase()
                      .includes(this.state.searchValue)
                  )
                  .map((book) => (
                    <SingleBook
                      book={book}
                      key={book.asin}
                      selected={this.checkSelected}
                      selectedState={this.state.selected}
                      isSelected={this.state.asin === book.asin}
                    />
                  ))}
              </Row>
            </Col>
            <Col>
              {this.state.selected && <CommentArea pippo={this.state.asin} />}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default BookList
