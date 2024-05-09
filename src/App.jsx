import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/signup/Signup";
import CsvUpload from "./pages/csv-upload/CsvUpload";
import Common from "./pages/common/Common";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}> </Route>
        <Route path="/csv-upload" element={<CsvUpload/>}> </Route>
        <Route path="*" element={<Common/>}> </Route> 
        {/* <Route path="/dashboard" element={<common/>}/>
        <Route path="/dashboard" element={<common/>}/>
        <Route path="/dashboard" element={<common/>}/> */}
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
