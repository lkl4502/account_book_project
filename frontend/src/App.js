import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import IncomeWrite from "./pages/IncomeWrite";
import SpendingWrite from "./pages/SpendingWrite";
import RecordCheck from "./pages/RecordCheck";
import AccountConnect from "./pages/AccountConnect";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/incomeWrite" element={<IncomeWrite />} />
            <Route path="/spendingWrite" element={<SpendingWrite />} />
            <Route path="/recordCheck" element={<RecordCheck />} />
            <Route path="/accountConnect" element={<AccountConnect />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
