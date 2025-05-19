import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Home, NoPage, Country } from "./pages/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":country" element={<Country />} />
          {/* :country is a dynamic parameter useparams to get it */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
