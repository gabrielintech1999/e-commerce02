import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout";
import Auth from "./routes/auth";
import Home from "./routes/home";

function App() {
  
  // RootLayout
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="orders" element={<h1>Checkout Page</h1>} />
            <Route path="checkout" element={<h1>Orders Page</h1>} />
            <Route path="payment" element={<h1>Payment Page</h1>} />
          </Route>
          <Route path="login" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
