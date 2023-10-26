import Alert from 'react-bootstrap/Alert'

const Welcome = (props) => {
  return (
    <Alert variant="success" className="m-0">
      <Alert.Heading>{props.welcomeMessage}</Alert.Heading>
    </Alert>
  )
}

export default Welcome
