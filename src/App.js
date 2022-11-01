import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import AboutUs from './components/pages/about-us/AboutUs';
import BodPage from './components/pages/about-us/bod/BodPage';
import ManagementPage from './components/pages/about-us/management/Management';
import CorporatePage from './components/pages/about-us/corporate-governance/Corporate';
import HsseqPage from './components/pages/about-us/hsseq/Hsseq';
import CovidPage from './components/pages/about-us/covid19/Covid19';
import OperationsPage from './components/pages/operations/Operations';
import InvestorPage from './components/pages/investor/Investor';
import CareerPage from './components/pages/career/Career';
import ContactPage from './components/pages/contact-us/Contact';
import SustainabilityPage from './components/pages/sustainability/Sustainability';
import 'react-slideshow-image/dist/styles.css'

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs} />
            <Route path='/bod' component={BodPage} />
            <Route path='/management' component={ManagementPage} />
            <Route path='/corporate' component={CorporatePage} />
            <Route path='/hsseq' component={HsseqPage} />
            <Route path='/covid' component={CovidPage} />
          <Route path='/operations' component={OperationsPage} />
          <Route path='/investor' component={InvestorPage} />
          <Route path='/career' component={CareerPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/sustainability' component={SustainabilityPage} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
