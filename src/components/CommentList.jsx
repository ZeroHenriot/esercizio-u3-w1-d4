// import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

// class CommentList extends Component {
//   render() {
//     return (
//       <div className="px-2">
//         <ListGroup>
//           {this.props.comments.map((comment) => {
//             return (
//               <SingleComment
//                 key={comment._id}
//                 comment={comment}
//                 id={comment._id}
//                 refresh={this.props.refresh}
//               />
//             )
//           })}
//         </ListGroup>
//       </div>
//     )
//   }
// }
const CommentList = (props) => {
  return (
    <div className="px-2">
      <ListGroup>
        {props.comments.map((comment) => {
          return (
            <SingleComment
              key={comment._id}
              comment={comment}
              id={comment._id}
              refresh={props.refresh}
            />
          )
        })}
      </ListGroup>
    </div>
  )
}

export default CommentList
