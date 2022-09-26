import { Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Menu from "./Menu";
import Heading from "./shared/Heading";

export default function App() {
  return (
    <main>
      <Heading level={1}>React Restaurant</Heading>
      <nav className="bg-indigo-100 p-2">
        <ul className="flex">
          <li className="mr-2">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </main>
  );
}
