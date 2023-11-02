import { Component, useState } from 'react'
import { Container, Row, Form, Col } from 'react-bootstrap'

import SingleBook from './SingleBook'
import CommentArea from './CommentArea'

// class BookList extends Component {
//   state = {
//     searchValue: '',
//     selected: false,
//     asin: '',
//   }

//   checkSelected = (value, asin) => {
//     this.setState({
//       selected: value,
//       asin: asin,
//     })
//   }

//   render() {
//     return (
//       <>
//         <Container>
//           <Form.Group className="my-3">
//             <Form.Control
//               type="text"
//               placeholder="cerca un libro"
//               value={this.state.value}
//               onChange={(e) => {
//                 this.setState({
//                   searchValue: e.target.value,
//                 })
//               }}
//             />
//           </Form.Group>
//           <Row>
//             <Col className="col-9">
//               <Row>
//                 {this.props.books
//                   .filter((book) =>
//                     book.title
//                       .toLowerCase()
//                       .toUpperCase()
//                       .includes(this.state.searchValue)
//                   )
//                   .map((book) => (
//                     <SingleBook
//                       book={book}
//                       key={book.asin}
//                       selected={this.checkSelected}
//                       selectedState={this.state.selected}
//                       isSelected={this.state.asin === book.asin}
//                     />
//                   ))}
//               </Row>
//             </Col>
//             <Col>
//               {this.state.selected && <CommentArea pippo={this.state.asin} />}
//             </Col>
//           </Row>
//         </Container>
//       </>
//     )
//   }
// }

const BookList = (props) => {
  // state = {
  //   searchValue: '',
  //   selected: false,
  //   asin: '',
  // }

  const [searchValue, setSearchValue] = useState('')

  const [asin, setAsin] = useState('')

  const checkSelected = (value, newAsin) => {
    // this.setState({
    //   selected: value,
    //   asin: asin,
    // })

    setAsin(newAsin)
  }
  // console.log(asin.asin)
  return (
    <>
      <Container>
        <Form.Group className="my-3">
          <Form.Control
            type="text"
            placeholder="cerca un libro"
            // value={selected}
            onChange={(e) => {
              setSearchValue(e.target.value)
            }}
          />
        </Form.Group>
        <Row>
          <Col xs={6} md={8} lg={9}>
            <Row className="justify-content-center">
              {props.books
                .filter((book) =>
                  book.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((book, index) => (
                  <SingleBook
                    book={book}
                    key={index}
                    selected={checkSelected}
                    isSelected={asin === book.asin}
                  />
                ))}
            </Row>
          </Col>
          <Col>{<CommentArea pippo={asin} />}</Col>
        </Row>
      </Container>
    </>
  )
}

export default BookList
