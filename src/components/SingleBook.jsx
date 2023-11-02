// import { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
// import CommentArea from './CommentArea'

// class SingleBook extends Component {
//   render() {
//     return (
//       <>
//         {/* {console.log(this.props.book.asin)} */}
//         <Col md={3} className="py-2">
//           <Card
//             className="h-100"
//             border={
//               this.props.isSelected && this.props.selectedState ? 'success' : ''
//             }
//           >
//             <Card.Img
//               variant="top"
//               className="h-75"
//               src={this.props.book.img}
//               onClick={() =>
//                 this.props.selected(
//                   !this.props.selectedState,
//                   this.props.book.asin
//                 )
//               }
//             ></Card.Img>
//             <Card.Body className="d-flex flex-column justify-content-between">
//               <Card.Title className="text-nowrap text-truncate">
//                 {this.props.book.title}
//               </Card.Title>
//               <Card.Text>{this.props.book.price} €</Card.Text>
//             </Card.Body>
//             {/* {this.props.selected && <CommentArea pippo={this.state.asin} />} */}
//           </Card>
//         </Col>
//       </>
//     )
//   }
// }

const SingleBook = (props) => {
  // console.log(props.book.asin)
  return (
    <>
      {/* {console.log(props.book.asin)} */}
      <Col md={5} lg={3} className="py-2">
        <Card className="h-100" border={props.isSelected ? 'success' : ''}>
          <Card.Img
            variant="top"
            className="h-75"
            src={props.book.img}
            onClick={() =>
              props.selected(!props.selectedState, props.book.asin)
            }
          ></Card.Img>
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className="text-nowrap text-truncate">
              {props.book.title}
            </Card.Title>
            <Card.Text>{props.book.price} €</Card.Text>
          </Card.Body>
          {/* {props.selected && <CommentArea pippo={props.asin} />} */}
        </Card>
      </Col>
    </>
  )
}
export default SingleBook
