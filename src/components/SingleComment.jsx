import { Component } from 'react'
import { Col, ListGroupItem, Row } from 'react-bootstrap'
import { Trash3Fill } from 'react-bootstrap-icons'

class SingleComment extends Component {
  render() {
    return (
      <ListGroupItem>
        <Row className="justify-content-between">
          <Col sm={6}>
            <p> {this.props.comment.comment}</p>
          </Col>
          <Col>
            <p>{this.props.comment.rate} / 5</p>
          </Col>
          <Col className="text-end">
            <Trash3Fill
              style={{ cursor: 'pointer' }}
              onClick={() => {
                fetch(
                  'https://striveschool-api.herokuapp.com/api/comments/' +
                    this.props.id,
                  {
                    method: 'DELETE',
                    headers: {
                      Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWUzMmY2ZTNkZDAwMTQ5NWU0NDgiLCJpYXQiOjE2OTgzMjQwMTgsImV4cCI6MTY5OTUzMzYxOH0.Ce_pmGglJCcINuLb6Szk4tjGViYOqlj3EEoQn2xVgDg',
                    },
                  }
                )
                  .then((res) => {
                    if (res.ok) {
                      //   this.getComments()
                    } else {
                      throw new Error('Qualquadra non cosa')
                    }
                  })
                  .then(this.props.refresh)
                  .catch((err) => {
                    console.log('ERRORE', err)
                  })
              }}
            />
          </Col>
        </Row>
      </ListGroupItem>
    )
  }
}

export default SingleComment
