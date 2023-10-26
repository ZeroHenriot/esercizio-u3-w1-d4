import { Component } from 'react'
import { Container, Row, Form } from 'react-bootstrap'

import SingleBook from './SingleBook'

class BookList extends Component {
  state = {
    searchValue: '',
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
            {this.props.books
              .filter((book) =>
                book.title
                  .toLowerCase()
                  .toUpperCase()
                  .includes(this.state.searchValue)
              )
              .map((book) => (
                <SingleBook book={book} key={book.asin} />
              ))}
          </Row>
        </Container>
      </>
    )
  }
}

export default BookList
