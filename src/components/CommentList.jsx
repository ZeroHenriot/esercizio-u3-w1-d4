import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.comments.map((comment) => {
          return <SingleComment key={comment._id} comment={comment} />
        })}
      </ListGroup>
    )
  }
}

export default CommentList
