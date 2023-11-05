import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Portfolio from './components/Portfolio'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import ButtonJoke from './components/ButtonJoke'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Portfolio />
      <ButtonJoke />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
