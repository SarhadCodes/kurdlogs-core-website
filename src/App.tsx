import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from '@/components/site/SiteLayout';
import HomePage from '@/pages/HomePage';
import WavePage from '@/pages/WavePage';
import ProjectPage from '@/pages/ProjectPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="wave" element={<WavePage />} />
          <Route path="live-wave" element={<Navigate to="/wave" replace />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="core" element={<Navigate to="/project" replace />} />
          <Route path="control" element={<Navigate to="/project" replace />} />
          <Route path="work" element={<Navigate to="/project" replace />} />
          <Route path="work/*" element={<Navigate to="/project" replace />} />
          <Route path="docs" element={<Navigate to="/" replace />} />
          <Route path="faq" element={<Navigate to="/" replace />} />
          <Route path="team" element={<Navigate to="/about" replace />} />
          <Route path="core/docs" element={<Navigate to="/" replace />} />
          <Route path="core/faq" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
