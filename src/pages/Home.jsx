import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import useThemeStore from '../store/ThemeStore'
import "../css/Main.css"

const Home = () => {

  const { Theme } = useThemeStore()
    


  return (
    <div className={Theme ? 'dark-mode' : 'light-mode'}>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home