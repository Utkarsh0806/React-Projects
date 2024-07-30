import './App.css'
import Contact from './components/Contact/Contact'
import ContactForm from './components/ContactForm/ContactForm'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <>
      <Navigation/>
      <main className="main_container">
        <Contact/>
        <ContactForm/>
      </main>
    </>
  )
}

export default App
