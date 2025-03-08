import './App.css'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import styled from 'styled-components';

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
  `;

const PageWrapper = styled.div`
  width: 70vw;
`;

function Root() {
  return (
    <PageWrapper>
      <Header/>
      <BodyWrapper>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BodyWrapper>
      <Footer/>
    </PageWrapper>
  )
}

const router = createBrowserRouter([{ path: '*', Component: Root}]);

export default function App() {
  return <RouterProvider router={router} />
}

