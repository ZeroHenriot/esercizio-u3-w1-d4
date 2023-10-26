import { Component } from 'react'
import { ListGroupItem } from 'react-bootstrap'

class SingleComment extends Component {
  render() {
    return (
      <ListGroupItem>
        <p>Commento: {this.props.comment.comment}</p>
        <p>Voto {this.props.comment.rate}</p>
      </ListGroupItem>
    )
  }
}

export default SingleComment
