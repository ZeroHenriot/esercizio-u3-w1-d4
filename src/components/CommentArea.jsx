import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    comment: [],
  }
  getComments = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + this.props.pippo,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWUzMmY2ZTNkZDAwMTQ5NWU0NDgiLCJpYXQiOjE2OTgzMjQwMTgsImV4cCI6MTY5OTUzMzYxOH0.Ce_pmGglJCcINuLb6Szk4tjGViYOqlj3EEoQn2xVgDg',
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Errore nel recupero commenti')
        }
      })
      .then((data) => {
        console.log(data)
        this.setState({
          comment: data,
        })
      })
      .catch((err) => {
        console.log('ERRORE', err)
      })
  }

  componentDidMount() {
    this.getComments()
  }

  render() {
    return (
      <>
        <CommentList comments={this.state.comment} />
        <AddComment bookId={this.props.pippo} />
      </>
    )
  }
}

export default CommentArea
