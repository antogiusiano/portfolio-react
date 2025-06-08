import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { home, aboutMe, contact, projects, error } from "./Routes/path";
import useThemeStore from "./store/ThemeStore"; 

function App() {
  const { theme } = useThemeStore(); 

  return (
    <div className={`app-container ${theme}`}> {}
      <BrowserRouter>
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={aboutMe} element={<AboutMe />} />
          <Route path={contact} element={<Contact />} />
          <Route path={projects} element={<Projects />} />
          <Route path={error} element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;