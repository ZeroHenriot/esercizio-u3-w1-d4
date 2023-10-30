import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    comments: {
      comment: '',
      rate: 1,
      elementId: this.props.bookId,
    },
  }

  addComment = (e) => {
    e.preventDefault()
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      body: JSON.stringify(this.state.comments),
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWUzMmY2ZTNkZDAwMTQ5NWU0NDgiLCJpYXQiOjE2OTgzMjQwMTgsImV4cCI6MTY5OTUzMzYxOH0.Ce_pmGglJCcINuLb6Szk4tjGViYOqlj3EEoQn2xVgDg',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore nell'invio del commento")
        }
      })
      .then((data) => {
        console.log(data)
        this.setState({
          comments: {
            comment: '',
            rate: 1,
            elementId: this.props.bookId,
          },
        })
      })
      .catch((err) => {
        console.log('ERRORE', err)
      })
  }

  render() {
    return (
      <Form onSubmit={this.addComment}>
        <div className="px-2">
          <Form.Group className="mb-3">
            <Form.Label>Lascia il tuo commento</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={this.state.comments.comment}
              onChange={(e) => {
                this.setState({
                  comments: {
                    ...this.state.comments,
                    comment: e.target.value,
                  },
                })
              }}
            />
          </Form.Group>
          <Form.Select
            aria-label="Voto"
            value={this.state.comments.rate}
            onChange={(e) => {
              this.setState({
                comments: {
                  ...this.state.comments,
                  rate: e.target.value,
                },
              })
            }}
          >
            <option>Dai un voto al libro</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          <Button type="submit" className="w-100 my-2">
            Vota
          </Button>
        </div>
      </Form>
    )
  }
}

export default AddComment
