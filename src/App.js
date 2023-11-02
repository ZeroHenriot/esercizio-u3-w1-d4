import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import Footer from './components/MyFooter'
import BookList from './components/BookList'
import fantasy from './books/fantasy.json'
import history from './books/history.json'
import horror from './books/horror.json'
import romance from './books/romance.json'
import scifi from './books/scifi.json'
import { Button, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'

function App() {
  const [selectedGenres, setSelectedGenres] = useState([])

  useEffect(() => {
    setSelectedGenres([...fantasy, ...history, ...horror, ...romance, ...scifi])
  }, [])

  const categoryBooks = {
    fantasy,
    history,
    horror,
    romance,
    scifi,
  }

  const handleCategoryClick = (category) => {
    setSelectedGenres(categoryBooks[category] || [])
  }
  return (
    <div>
      <MyNavbar />
      <Welcome welcomeMessage="Ciao, benvenuto nel mio shop" />
      {/* <AllTheBooks /> */}
      <Container className="d-flex justify-content-between mt-3">
        <Button
          className="w-100 me-2 btn-dark"
          onClick={() => handleCategoryClick('fantasy')}
        >
          Fantasy
        </Button>
        <Button
          className="w-100 me-2 btn-dark"
          onClick={() => handleCategoryClick('history')}
        >
          History
        </Button>
        <Button
          className="w-100 me-2 btn-dark"
          onClick={() => handleCategoryClick('horror')}
        >
          Horror
        </Button>
        <Button
          className="w-100 me-2 btn-dark"
          onClick={() => handleCategoryClick('romance')}
        >
          Romance
        </Button>
        <Button
          className="w-100 btn-dark"
          onClick={() => handleCategoryClick('scifi')}
        >
          Scifi
        </Button>
      </Container>
      <BookList books={selectedGenres} />
      <Footer />
    </div>
  )
}

export default App
