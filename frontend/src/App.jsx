import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";

import HomePage from "./pages/Home";
import BlogsPage from "./pages/Blogs";

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <BlogsPage />
    </div>
  );
}

export default App;
