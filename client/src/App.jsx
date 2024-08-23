import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/about";
import { Contact } from "./Contact";
import { Services } from "./Services";
import { Registration } from "./Registration";
import { Login } from "./Login";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { TermsOfService } from "./TermsOfServices";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { Logout } from "./Logout";
import { AdminLayout } from "./components/layouts/AdminLayouts";
import { AdminUsers } from "./pages/AdminUsers";
import { AdminContacts } from "./pages/AdminContacts";
import { AdminUpdate } from "./pages/AdminUpdate";




const App = ()=>{
  return <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/terms-of-service" element={<TermsOfService/>}/>
      <Route path="/terms-of-service" element={<TermsOfService/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/Logout" element={<Logout/>}/>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route path="users/:id/edit" element={<AdminUpdate/>}/>
        <Route path="users" element={<AdminUsers/>}/>
        <Route path="contacts" element={<AdminContacts/>}/>

      </Route>




    </Routes>

    <Footer/>
  
  </BrowserRouter>
  
  
  </>
};

export default App;