import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import QuizApp from "./components/Screen2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screen1 />} />
        <Route path='/screen2/2' element={<QuizApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
