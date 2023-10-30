import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import { Alert, Spinner } from 'react-bootstrap'

class CommentArea extends Component {
  state = {
    comment: [],
    isLoading: true,
    isError: false,
    isBlocked: false,
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
        // console.log(data)
        this.setState({
          comment: data,
          isLoading: false,
        })
      })
      .catch((err) => {
        console.log('ERRORE', err)
        // console.log(this.props)
        this.setState({
          isLoading: false,
          isError: true,
          isBlocked: true,
        })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pippo !== this.props.pippo) {
      this.getComments()
    }
  }

  componentDidMount() {
    this.getComments()
  }

  render() {
    return (
      <>
        {this.state.isLoading && (
          <div className="text-center">
            <Spinner animation="grow" variant="warning" />
          </div>
        )}
        {this.state.isError && (
          <div className="text-center px-2">
            <Alert variant="danger">Bravo, mo risolvi i tuoi bug</Alert>
          </div>
        )}
        <CommentList refresh={this.getComments} comments={this.state.comment} />
        <AddComment bookId={this.props.pippo} />
      </>
    )
  }
}

export default CommentArea
