import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaComments, FaQrcode, FaRobot, FaShoppingCart } from "react-icons/fa";
import { features } from "../static-data/Features";
import FeatureCard from "../utils/howItWorksBox";
import { NavLink } from "react-router-dom";
import { scrollToBottom } from "../utils/scrollToBottom";

type Item = {
  id: number;
  title: string;
  contents: string[];
};

const Home = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (isModalOpen: boolean) => void;
}) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const steps = [
    {
      icon: <FaQrcode className="text-2xl text-blue-500" />,
      title: "Scan QR Code",
      description:
        "Customers scan the in-store QR code to begin their personalized shopping experience.",
    },
    {
      icon: <FaRobot className="text-2xl text-green-500" />,
      title: "Personalized Recommendations",
      description:
        "Raya analyzes past purchases, browsing habits, and real-time interactions to offer tailored product suggestions.",
    },
    {
      icon: <FaComments className="text-2xl text-yellow-500" />,
      title: "Real-Time Assistance",
      description:
        "Customers can compare products, explore offers, and ask questions—all in real time.",
    },
    {
      icon: <FaShoppingCart className="text-2xl text-red-500" />,
      title: "Seamless Checkout",
      description:
        "Customers can proceed to self-checkout or request in-store assistance as needed.",
    },
  ];

  const items: Item[] = [
    {
      id: 1,
      title: "Fashion Retailers – Personalized Outfit Recommendations",
      contents: [
        "Raya acts like a virtual stylist, suggesting outfits based on a customer’s past purchases, wishlist, and in-store browsing.",
        "If a customer buys a dress, Raya can recommend matching shoes, bags, or accessories to complete the look.",
        "It can also suggest seasonal trends, discounts on complementary items, or notify customers of restocked sizes.",
        "Example: A shopper buying jeans might be recommended a top that matches or a belt that complements the outfit.",
      ],
    },
    {
      id: 2,
      title: "Electronics Stores – Cross-Selling Relevant Accessories",
      contents: [
        "When a customer shows interest in a smartphone, Raya suggests compatible accessories like screen protectors, wireless chargers, and phone cases.",
        "It can offer bundle discounts for buying multiple accessories together",
        "Helps customers compare models based on features, specifications, and reviews, acting as an expert sales associate.",
        "Example: If a customer is browsing for a laptop, Raya might recommend a mouse, external hard drive, or extended warranty.",
      ],
    },
    {
      id: 3,
      title: "Supermarkets – Suggests Bundle Deals & Offers",
      contents: [
        "Raya enhances grocery shopping by recommending combo deals and discounts based on what’s in a customer’s cart.",
        "If a shopper buys pasta, Raya might suggest complementary items like pasta sauce, parmesan cheese, and olive oil.",
        "It can promote weekly deals, suggest alternative brands, and even notify customers about loyalty rewards.",
        "Example: A customer purchasing coffee could receive recommendations for a discounted milk or a matching biscuit offer.",
      ],
    },
    {
      id: 4,
      title: "Furniture & Home Decor – Shows Complementary Decor Ideas",
      contents: [
        "Furniture & Home Decor – Shows Complementary Decor Ideas",
        "If a shopper looks at a sofa, Raya can suggest matching rugs, curtains, or wall art for a complete setup.",
        "Offers personalized recommendations based on a customer’s past decor purchases and preferred styles.",
        "Example: A customer buying a dining table might receive suggestions for matching chairs, placemats, and centerpiece decor.",
      ],
    },
  ];

  function StepBox() {
    return steps.map((step, index) => (
      <>
        <img
          src="arrow.png"
          className={`h-12 ${index !== 0 ? "md:block hidden" : ""}  ${
            index === 0 ? "hidden" : ""
          }`}
          alt=""
        />
        <div
          key={index}
          className="flex flex-col items-center text-center max-w-xs"
        >
          <div className="p-4 bg-gray-200 rounded-full mb-3">{step.icon}</div>
          <h3 className="text-[19px] font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-600 text-[15px]">{step.description}</p>
        </div>
      </>
    ));
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}

        {/* Main Content */}
        <main className="container mx-auto relative md:pr-14 md:pl-28 md:py-12 py-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute hidden md:block w-80 h-80 bg-gradient-to-bl from-red-200 via-white to-blue-200 rounded-full -left-64 top-10 translate-y-1/2"></div>

          {/* Left Section */}
          <div className="flex-1 w-full space-y-4">
            <h1 className="md:text-5xl text-3xl font-bold">
              AI-Powered Sales Associate for{" "}
              <span className="whitespace-nowrap">Brick-and-Mortar</span> Stores
            </h1>
            <p className="text-gray-600 w-full md:text-xl">
              Raya is a team member that enhances customer experience, drives
              sales, and reduces human dependency with AI-powered product
              recommendations and self-service assistance.
            </p>
            <div className="flex gap-4">
              <NavLink
                to={"/contact"}
                className="px-6 py-3 font-medium rounded-full bg-gradient-to-bl from-red-200 via-white to-blue-200 text-black cursor-pointer transition-colors"
              >
                View Demo
              </NavLink>
              <button onClick={() => scrollToBottom()} className="px-6 py-3 cursor-pointer font-medium rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section - Images */}
          <div className="flex-1 relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-bl-full opacity-20 -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-tr-full opacity-20 -z-10" />

            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div className="rounded-2xl h-fit overflow-hidden">
                <img
                  src="n1.jpg"
                  alt="Drive-thru sign"
                  className="w-full h-90 object-cover overflow-hidden"
                />
              </div>
              <div className="rounded-2xl overflow-hidden mt-10">
                <img
                  src="n2.jpg"
                  alt="Person at drive-thru"
                  className="w-full h-90 object-cover overflow-hidden"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      <section className="flex md:mx-12 md:px-14 px-4 overflow-hidden relative z-[1000] rounded-2xl py-12 flex-col items-center text-center">
        <img
          className="absolute inset-0 -z-10 w-full h-full"
          src="https://firebasestorage.googleapis.com/v0/b/arcsaleai.appspot.com/o/arcsale%2Fbg-logo%2Fbg-1.webp?alt=media&token=983969d7-1341-42f9-9956-6210915cdfc6"
          alt=""
        />
        <h1 className="text-4xl font-bold text-black max-w-3xl">Why Raya?</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 cursor-pointer bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-900"
        >
          View Demo
        </button>
      </section>

      <section className="my-4 rounded-xl overflow-hidden relative">
        <div className="flex flex-col items-center p-8">
          <h2 className="md:text-4xl text-3xl text-center font-bold py-8">
            How It Works
          </h2>

          <div className="w-full flex justify-center mb-8">
            <div className="md:w-[40%] w-full md:h-86 bg-gray-300 flex items-center justify-center rounded-xl">
              <img src="n6.jpg" className="w-full h-full rounded-md" alt="" />
            </div>
          </div>

          <div className="flex md:flex-row justify-center flex-col gap-7 md:gap-0 items-center mt-8 space-x-4">
            {StepBox()}
          </div>
        </div>
      </section>

      <section className="my-10 rounded-xl overflow-hidden md:mx-14 relative">
        <img
          className="absolute inset-0 -z-10 w-full h-full"
          src="https://firebasestorage.googleapis.com/v0/b/arcsaleai.appspot.com/o/arcsale%2Fbg-logo%2Fbg-1.webp?alt=media&token=983969d7-1341-42f9-9956-6210915cdfc6"
          alt=""
        />
        <div className="flex flex-col items-center justify-center py-24 md:px-10 px-4">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-20 text-center">
            Maximize Revenue, Minimize Costs
          </h2>

          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
            {/* Left Image */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl flex items-center justify-center md:h-90">
              <img src="n4.jpg" className="w-full h-full rounded-xl" alt="" />
            </div>

            {/* Right Section - Three Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 flex md:backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-3 md:p-6">
                <p className="md:text-md text-md font-medium text-center my-auto">
                  Reduce reliance on sales associates while maintaining
                  excellent customer service.
                </p>
              </div>
              <div className="bg-white/10 flex md:backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-3 md:p-6">
                <p className="md:text-md text-md font-medium my-auto text-center">
                  Boost AOV (Average Order Value) with AI-powered personalized
                  recommendations.
                </p>
              </div>
              <div className="bg-white/10 flex md:backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 col-span-2">
                <p className="text-md font-medium my-auto text-center">
                  There are no expensive kiosks or tablets—just a simple
                  QR-based AI assistant.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-14 rounded-xl overflow-hidden md:mx-14 relative">
        <img
          className="absolute inset-0 -z-10 w-full h-full"
          src="https://firebasestorage.googleapis.com/v0/b/arcsaleai.appspot.com/o/arcsale%2Fbg-logo%2Fbg-1.webp?alt=media&token=983969d7-1341-42f9-9956-6210915cdfc6"
          alt=""
        />
        <div className="flex flex-col items-center justify-center py-24 md:px-10 px-4">
          {/* Heading */}
          <h2 className="text-4xl font-bold md:mb-16 mb-10 text-center">
            Zero Wait Times. Instant Answers. Smart Shopping.
          </h2>

          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
            {/* Left Image */}

            {/* Right Section - Three Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 flex md:backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-3 md:p-5">
                <p className="font-medium text-md md:text-md text-center my-auto">
                  Customers get real-time product recommendations and store
                  navigation assistance.
                </p>
              </div>
              <div className="bg-white/10 flex md:backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-3 md:p-6">
                <p className="font-medium text-md md:text-md my-auto text-center">
                  Reduce frustration caused by unavailable staff or long
                  checkout lines.
                </p>
              </div>
              <div className="bg-white/10 flex md:backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 col-span-2">
                <p className="font-medium my-auto text-center">
                  Enable self-checkout integration for a frictionless shopping
                  experience.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl flex items-center justify-center md:h-90">
              <img src="n5.jpg" className="w-full h-full rounded-md" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 w-full">
        <div className="flex flex-col items-center justify-center md:p-8 p-2">
          <h2 className="text-4xl font-bold mb-6 md:mb-14 text-center">
            Use Cases Across Retail Formats
          </h2>

          <div className="w-full max-w-2xl">
            {items.map((item) => (
              <div key={item.id} className="md:p-6 p-2">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex items-center border px-3 md:px-6 py-6 cursor-pointer border-gray-300 rounded-3xl justify-between w-full"
                >
                  {/* Left side with icon and text */}
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-medium md:px-0 px-1 md:text-lg text-sm">
                      {item.title}
                    </span>
                  </div>

                  {/* Plus/Minus Icon */}
                  {openItem === item.id ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>

                {/* Dropdown Content */}
                {openItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: openItem === item.id ? 1 : 0,
                      y: openItem === item.id ? 0 : -10,
                      display: openItem === item.id ? "block" : "none",
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="mt-2 bg-white/5 p-4 rounded-lg transition-all"
                  >
                    <ul className="list-disc pl-5">
                      {item.contents.map((content, index) => (
                        <li className="py-2" key={index}>
                          {content}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
