import './App.css';
import AboutSection from './Components/AboutSection.jsx';
import Footer from './Components/Footer.jsx';
import HeroSection from './Components/HeroSection.jsx';
import Navbar from './Components/Navbar.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RegistrationForm from './Components/RegistrationForm.jsx';
import DonorProfile from './Components/DonorProfile.jsx';
import FindDonors from './Components/FindDonors.jsx';
import AnimatedText from './Components/AnimatedText.jsx';
import ContactDonor from './Components/ContactDonor.jsx';

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: 
      <div>
        <Navbar/>
        <HeroSection/>
        <Footer/>
      </div>  
    },
    {
      path:'/about',
      element:
      <div>
        <Navbar/>
        <AboutSection/>
        <Footer/>
      </div>
    },
    {
      path:'/Signin',
      element:
      <div>
        <Navbar/>
        <RegistrationForm/>
        <Footer/>
      </div>
    },
    {
      path:'/donorsProfile',
      element: 
      <div>
        <Navbar/>
        <DonorProfile/>
        <Footer/>
      </div>
    },
    {
      path:'/findDonors',
      element: 
      <div>
        <Navbar/>
        <FindDonors/>
        <Footer/>
      </div>
    },
    {
      path:'/registeredsuccesslly',
      element: 
      <div>
        <Navbar/>
        <AnimatedText/>
        <Footer/>
      </div>
    },
    {
      path:'/contactdonor',
      element: 
      <div>
        <Navbar/>
        <ContactDonor/>
        <Footer/>
      </div>
    },
  ]
)
function App() {
  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  );
}

export default App;
