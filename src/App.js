import { BrowserRouter, Routes, Route } from "react-router-dom";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import QuizApp from "./components/Screen2";
import last_page from "./components/Screen3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screen1 />} />
        <Route path='/screen2/2' element={<QuizApp />} />
        <Route path='/screen3' element={<last_page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
