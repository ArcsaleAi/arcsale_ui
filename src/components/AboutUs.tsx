import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="w-full mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-6 w-[120%]">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Arcsale AI</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              Retail is evolving, but traditional in-store shopping still lacks personalization, efficiency, and automation. Customers struggle to find the right products, and retailers miss out on sales due to limited staff availability and inconsistent service. We believe shopping should be seamless, intuitive, and powered by AI-driven intelligence.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6">Our Mission</h3>
            <p className="text-gray-700">
              At Arcsale AI, our mission is to redefine the in-store shopping experience by making retail more self-reliant and automated. Our AI sales associate provides instant, personalized assistance tracks customer preferences, and drives smarter upselling and cross-selling, helping stores increase revenue while reducing dependency on human staff.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6">Our Vision</h3>
            <p className="text-gray-700">
              Our vision is to create a future where AI enhances retail efficiency, ensuring every customer receives tailored recommendations, seamless navigation, and effortless self-checkout. With Raya, we're building a world where retail is not just automated—but smarter, more profitable, and truly customer-first.
            </p>
          </div>
          
          <div className="pt-4">
            <NavLink to={'/contact'} className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200 inline-flex items-center">
              Learn More About Raya
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </NavLink>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="order-first lg:ml-auto lg:order-last w-[80%]">
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
            <img 
              src="n7.jpg" 
              alt="AI-powered retail experience" 
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;