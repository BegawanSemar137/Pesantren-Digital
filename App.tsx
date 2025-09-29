import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Vision from './components/Vision';
import Testimonials from './components/Testimonials';
import MarketplacePreview from './components/MarketplacePreview';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ElearningPreview from './components/ElearningPreview';
import LoginPage from './components/LoginPage';
import DashboardPage, { UserRole } from './components/DashboardPage';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<{ name: string; role: UserRole } | null>(null);
  const [view, setView] = useState<'home' | 'login'>('home');

  const handleLoginSuccess = (role: UserRole) => {
    // In a real app, user data would come from an API
    const name = role === 'Siswa' ? 'Santri Digital' : role;
    setCurrentUser({ name, role });
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
    setView('home');
  };
  
  const navigateToLogin = () => setView('login');
  const navigateToHome = () => setView('home');

  if (currentUser) {
    return <DashboardPage user={currentUser} onLogout={handleLogout} />;
  }
  
  if (view === 'login') {
    return <LoginPage onLoginSuccess={handleLoginSuccess} onNavigateHome={navigateToHome} />;
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen antialiased">
      <Header onNavigateToLogin={navigateToLogin} />
      <main>
        <Hero />
        <Features />
        <Vision />
        <ElearningPreview />
        <MarketplacePreview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;