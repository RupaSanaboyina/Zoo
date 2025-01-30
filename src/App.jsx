import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import ServicesSlider from "./ServicesSlider";
import Features from "./Features";
import OurStory from "./OurStory";
import Innovations from "./Innovations";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import CompanyUmberalla from "./CompanyUmberalla";
import Team from "./Team";
import AboutDirector from "./AboutDirector";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";
import Workplace from "./Workplace";
import Companyapps from "./Companyapps";
import LogoSlider from "./Logoslider";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiesPolicy from "./CookiesPolicy";
import Clientele from "./Clientele";
import WhatsAppButton from "./WhatsAppButton";
import AppDevelopment from "./AppDevelopment";
import WebDesigning from "./WebDesigning";
import OttTv from "./OttTv";
import DigitalMedia from "./DigitalMedia";
import PrePost from "./PrePost";
import EventManagement from "./EventManagement";
import Disclaimer from "./Disclaimer";
import Feedback from "./Feedback";
import AddressCards from "./AddressCards";
import AboutDirectorE from "./AboutDirectorE";

const App = () => {
  const [showClientele, setShowClientele] = useState(false);

  const handleClienteleClick = () => {
    setShowClientele(true); 
  };

  return (
    <Router>
      <div className="max-w-screen overflow-x-hidden">
     
        <Header />

       
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <Companyapps />
                <LogoSlider />
                <ServicesSlider />
                <Features />
                <OurStory />
                <Innovations />
                <Workplace />
                <Testimonials />
                <AboutDirector />
                <Team />
                <FAQ />
               
                <ContactUs />
                <AddressCards/>
                <ContactForm />
                <WhatsAppButton/>
                {showClientele && <Clientele />}
              </>
            }
          />
          <Route path="/company-umbrella" element={<CompanyUmberalla />} />
          <Route exact path="/services" element={<ServicesSlider />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/about-director" element={<AboutDirector />} />
          <Route exact path="/contact-us" element={<ContactForm />} />
          <Route exact path="/aboutdirector" element={<AboutDirectorE/>}/>
          <Route
            exact
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/cookies" element={<CookiesPolicy />} />
          <Route exact path="/clientele" element={<Clientele />} />
          <Route exact path="/AppDevelopment" element={<AppDevelopment/>}/>
          <Route exact path="/EventManagement" element={<EventManagement/>} />
          <Route exact path="/WebDesigning" element={<WebDesigning/>}/>
          <Route exact path="/OttTv" element={<OttTv/>}/>
          <Route exact path="/DigitalMedia" element={<DigitalMedia/>}/>
          <Route exact path="/PrePro" element={<PrePost/>}/>
          <Route exact path="/disclaimer" element={<Disclaimer/>}/>
          <Route exact path="/feedback" element={<Feedback/>}/>


        </Routes>

        
        <Footer />
        
      </div>
    </Router>
  );
};

export default App;
