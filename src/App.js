import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks'
import Footer from './components/MyFooter'
import BookList from './components/BookList'
import fantasy from './books/fantasy.json'
import history from './books/history.json'
import horror from './books/horror.json'
import romance from './books/romance.json'
import scifi from './books/scifi.json'

function App() {
  return (
    <div>
      <MyNavbar />
      <Welcome welcomeMessage="Ciao, benvenuto nel mio shop" />
      {/* <AllTheBooks /> */}
      <BookList books={history} />
      <Footer />
    </div>
  )
}

export default App
