import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ChatHome from "./components/ChatHome";
import Auth from "./components/Auth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<ChatHome />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </>
  );
}

export default App;
