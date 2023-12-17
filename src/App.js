// App.js
import React from 'react';
import Navbar from './pages/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home2'; // Update to the correct Home component
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import ContactUs from './pages/contactus';
import EditUser from './pages/EditUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ChooseOptions from './pages/ChooseOptions';
import Doctor from './pages/home';
import Admin from './pages/Login'
import DoctorSignup from './pages/DoctorSignup';
import DoctorLogin from './pages/DoctorLogin';
import MultiForm from './pages/Multiform';
import ChooseOptions2 from './pages/ChooseOptions2';
import Patients from './pages/Patients';
import Medicine from './pages/Medicine';
import Rooms from './pages/Rooms';
import EditPatients from './pages/editPatients';
import EditMedicine from './pages/editMedicine';
import EditRooms from './pages/editRooms';
import NewMedicine from './pages/newMedicine'
import NewPatient from './pages/newPatient'
import NewRoom from './pages/newRoom';
import PatientSignup from './pages/PatientSignup';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Include the Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Doctor/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/DoctorSignup" element={<DoctorSignup />} />
          <Route path="/DoctorLogin" element={<DoctorLogin />} />
          <Route path="/Multiform" element={<MultiForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/choose-options" element={<ChooseOptions />} />
          <Route path="/choose-options2" element={<ChooseOptions2 />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/editPatient/:id" element={<EditPatients />} />
          <Route path="/editMedicine/:id" element={<EditMedicine />} />
          <Route path="/editRoom/:id" element={<EditRooms />} />
          <Route path="/newMedicine" element={<NewMedicine />} />
          <Route path="/newPatient" element={<NewPatient />} />
          <Route path="/newRoom" element={<NewRoom />} />
          <Route path="/patientSignup" element={<PatientSignup />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
