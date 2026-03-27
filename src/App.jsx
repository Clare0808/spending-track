import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import OverviewPage from "./components/OverviewPage";
import PaymentPage from "./components/PaymentPage";
import ChartPage from "./components/ChartPage";
import HelpPage from "./components/HelpPage";
import SettingPage from "./components/SettingPage";
import LoginPage from "./components/LoginPage";

import logo from "./assets/logo.png";

import "./App.css"

function App() {
  return (
    <>
      <Router>
        <nav>
          <div className="title-box">
            <img src={logo} />
            <div className="title">SpendWise</div>
          </div>
          <div className="func-frame">
            <Link to="/">Overview</Link>
            <Link to="/pay">Payment</Link>
            <Link to="/chart">Statistics</Link>
            <Link to="/help">Help</Link>
            <Link to="/setting">Settings</Link>
          </div>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/" element={<OverviewPage />}></Route>
          <Route path="/pay" element={<PaymentPage />}></Route>
          <Route path="/chart" element={<ChartPage />}></Route>
          <Route path="/help" element={<HelpPage />}></Route>
          <Route path="/setting" element={<SettingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
