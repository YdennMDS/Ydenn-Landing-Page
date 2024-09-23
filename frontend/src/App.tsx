import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import YourAvatar from "./pages/YourAvatar";
import YourContact from "./pages/YourContact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="survey" element={<Survey />} />
        <Route path="youravatar" element={<YourAvatar />} />
        <Route path="yourcontact" element={<YourContact />} />
      </Routes>
    </Router>
  );
}

export default App;
