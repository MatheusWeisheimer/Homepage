import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home';
import Footer from './components/Footer'

function App() {
  const [languageOption, setLanguageOption] = useState("en_uk")

  function changeLanguageOption(language) {
    setLanguageOption(language)
    console.log(languageOption)
  }

  return (
    <>
      <Header languageOption={languageOption} changeLanguageOption={changeLanguageOption} />
      <Home languageOption={languageOption} />
      <Footer />
    </>
  );
}

export default App;
