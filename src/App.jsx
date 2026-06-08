import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import OverOns from './pages/OverOns';
import Werkwijze from './pages/Werkwijze';
import DaaromMetz from './pages/DaaromMetz';
import Projecten from './pages/Projecten';
import ProjectDetail from './pages/ProjectDetail';
import WerkenBij from './pages/WerkenBij';
import VacatureDetail from './pages/VacatureDetail';
import Solliciteren from './pages/Solliciteren';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop />
      <Navigation />
      <main id="main" key={`${location.pathname}${location.search}`} className="site-main page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/werkwijze" element={<Werkwijze />} />
          {/* Legacy WordPress sub-page URLs — redirect to consolidated /werkwijze to preserve backlinks/SEO */}
          <Route path="/werkwijze/onderzoek-en-advies" element={<Navigate to="/werkwijze" replace />} />
          <Route path="/werkwijze/de-uitvoering" element={<Navigate to="/werkwijze" replace />} />
          <Route path="/werkwijze/het-eindrapport" element={<Navigate to="/werkwijze" replace />} />
          <Route path="/daarom-metz" element={<DaaromMetz />} />
          {/* Legacy redirect: oude Secuur-URL → nieuwe Metz-URL */}
          <Route path="/veiligheid" element={<Navigate to="/daarom-metz" replace />} />
          <Route path="/projecten" element={<Projecten />} />
          <Route path="/projecten/:projectSlug" element={<ProjectDetail />} />
          <Route path="/werken-bij" element={<WerkenBij />} />
          <Route path="/werken-bij/:vacatureSlug" element={<VacatureDetail />} />
          <Route path="/vacatures" element={<Navigate to="/werken-bij" replace />} />
          {/* Sollicitatiepagina — bewust NIET in de navigatie; bereikbaar via vacature-links */}
          <Route path="/solliciteren" element={<Solliciteren />} />
          <Route path="/sollicitatie" element={<Navigate to="/solliciteren" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
