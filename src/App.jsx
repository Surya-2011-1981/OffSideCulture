import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/layout/User";
import Home from "./pages/Home";
import { Toaster } from "sonner";
function App() {

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route element={<User />} path="/">
          {/* User Route */}
          <Route index element={<Home />}></Route>
        </Route>
        <Route>
          {/* Admin Route */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
