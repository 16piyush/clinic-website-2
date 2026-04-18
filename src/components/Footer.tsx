import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-500 h-[60px] border-t border-slate-100 flex items-center justify-center text-[12px]">
      <div className="container mx-auto px-4 text-center">
        <p>© {currentYear} Dr. Priyadarshni’s Dental Clinic. Designed for Premium Care.</p>
      </div>
    </footer>
  );
}
