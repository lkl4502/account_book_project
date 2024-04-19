import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import IncomeWrite from "./pages/IncomeWrite";
import SpendingWrite from "./pages/SpendingWrite";
import RecordCheck from "./pages/RecordCheck";
import AccountConnect from "./pages/AccountConnect";
import Login from "./pages/Login";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import useAuth from "./Auth/useAuth";
import { AuthContext } from "./context/auth-context";

function App() {
  const { token, login, logout, userId } = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <main>
          <AuthContext.Provider
            value={{ isLoggedIn: !!token, token, userId, login, logout }}
          >
            <Routes>
              <Route element={<PublicRoute />}>
                <Route path="/" exact element={<Login />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/incomeWrite" element={<IncomeWrite />} />
                <Route path="/spendingWrite" element={<SpendingWrite />} />
                <Route path="/recordCheck" element={<RecordCheck />} />
                <Route path="/accountConnect" element={<AccountConnect />} />
              </Route>
            </Routes>
          </AuthContext.Provider>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
