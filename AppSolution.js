import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <Routes>
        <Route path=':id' element={<AboutDetails />} />
      </Routes>
    </div>
  );
}

function AboutDetails(){
  let { id } = useParams();
  return (
    <div>
      <h1>About Details {id}</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;