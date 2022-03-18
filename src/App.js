import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "./pages/Router";
import { Nav } from "./pages/Nav";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "./store/todos/thunks";

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Nav activeKey="/todos" items={navItems} />
      </Router>
    </div>
  );
}

export default App;
