import { HashRouter as Router, Routes, Route } from "react-router-dom";
// as im deploying my react app inside django, some url routing wont work properly
// so using HashRouter to overcome that issue
import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<NotesListPage />}></Route>
            <Route path="/note/:id" element={<NotePage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
