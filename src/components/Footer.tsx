import { Mail, Phone, ArrowUp, Linkedin, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-500 relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img className='h-10' src="arcsale-logo.png" alt="" />
              <span className="text-white text-xl font-bold">Arcsale AI</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Virtual Assistant For Superior In-Person Customer Experiences And World-Class Software
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Pricing', 'About Us'].map((item) => (
                <li key={item}>
                  <p onClick={() => {
                    if(item === 'Home'){
                      scrollToTop()
                    }else if(item === 'Pricing'){
                        navigate('/pricing')
                    }else if(item === 'About Us'){
                        navigate('/aboutus')
                    }
                  }} className="text-white/80 cursor-pointer hover:text-white transition-colors text-sm">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact us</h3>
            <div className="space-y-3">
              <a href="tel:+919529030349" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors text-sm">
                <Phone size={16} />
                <span>+919529030349</span>
              </a>
              <a href="mailto:contact@arcsaleai.com" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors text-sm">
                <Mail size={16} />
                <span>contact@arcsaleai.com</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a target='_blank' href="https://www.linkedin.com/company/arcsaleai/posts" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center backdrop-blur-sm">
                <Linkedin size={20} className="text-white" />
              </a>
              <a target='_blank' href="https://www.instagram.com/arcsaleai" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center backdrop-blur-sm">
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 Arcsale AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute right-8 -top-5 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        <ArrowUp size={20} className="text-blue-600" />
      </button>
    </footer>
  );
};

export default Footer;