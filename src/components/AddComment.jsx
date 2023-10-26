import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    comment: {
      comment: '',
      elementId: '',
      rate: '',
    },
  }

  handleInputChange = (property, value) => {
    this.setState({
      comment: {
        ...this.state.comment,
        [property]: value,
      },
    })
  }

  addComment = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + this.props.pippo,
      {
        method: 'POST',
        body: JSON.stringify(this.state.comment),
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWUzMmY2ZTNkZDAwMTQ5NWU0NDgiLCJpYXQiOjE2OTgzMjQwMTgsImV4cCI6MTY5OTUzMzYxOH0.Ce_pmGglJCcINuLb6Szk4tjGViYOqlj3EEoQn2xVgDg',
        },
      }
    )
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
          comment: {
            comment: '',
            elementId: this.props.pippo,
            rate: 1,
          },
        })
      })
      .catch((err) => {
        console.log('ERRORE', err)
      })
  }
  componentDidMount() {
    this.addComment()
  }

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Lascia il tuo commento</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={this.state.comment.comment}
            onChange={(e) => {
              this.handleInputChange('comment', e.target.value)
            }}
          />
        </Form.Group>
        <Form.Select
          aria-label="Voto"
          value={this.state.comment.rate}
          onChange={(e) => {
            this.handleInputChange('rate', e.target.value)
          }}
        >
          <option>Dai un voto al libro</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        <Button type="submit">Vota</Button>
      </Form>
    )
  }
}

export default AddComment
