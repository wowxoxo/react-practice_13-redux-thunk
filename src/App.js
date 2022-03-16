import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "./pages/Router";
import { Nav } from "./pages/Nav";

const navItems = [
  {
    href: "/todos",
    title: "Todos"
  },
  {
    href: "/editor",
    title: "Editor"
  }
];

function App() {
  return (
    <div className="app">
      <Router>
        <Nav activeKey="/todos" items={navItems} />
      </Router>
    </div>
  );
}

export default App;
