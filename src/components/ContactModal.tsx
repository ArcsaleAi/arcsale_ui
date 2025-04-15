import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactModal = ({
  isOpen,
  onClosee,
}: {
  isOpen: boolean;
  onClosee: () => void;
}) => {    
  if (!isOpen) return null;
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitForm = (e: any) => {
    const isValid = trigger()
    if(!isValid){
        e.preventDefault()
    }

    console.log(userDetails);
    
  }

  return (
    <div className="fixed inset-0 z-[1221] flex items-center justify-center">
      {/* Modal Container */}
      <div className="flex md:w-full w-[90%] md:h-[55%] h-fit max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Left Side - Image */}
        <div
          className="w-1/2 hidden bg-blue-600 md:flex items-center justify-center"
        >
            <img className="w-full cover h-full" src="contact.jpg" alt="" />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full p-6 relative overflow-y-scroll hide-scroll">
          {/* Close Button */}
          <button
            onClick={onClosee}
            className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>

          {/* Heading */}
          <h2 className="text-xl mb-4 text-center font-bold text-gray-900">
            Contact for <span className="text-blue-600 font-bold">Demo</span>
          </h2>

          <>
            <form onSubmit={handleSubmit(submitForm)} action="">
              <div className="space-y-4">
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                  })}
                  placeholder="Enter name"
                  value={userDetails.name}
                  required
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      name: e.target.value,
                    })
                  }
                  className="w-full focus:outline-none p-1 text-xs border-b border-gray-300"
                />
                {errors.name && (
                  <p className="text-xs text-red-600">
                    {errors.name.type === "required" &&
                      "This field is required"}
                  </p>
                )}
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  placeholder="Enter email"
                  value={userDetails.email}
                  required
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      email: e.target.value,
                    })
                  }
                  className="w-full focus:outline-none p-1 text-xs border-b border-gray-300"
                />
                {errors.email && (
                  <p className="text-red-600 text-xs">
                    {errors.email.type === "required" &&
                      "This field is required"}
                    {errors.email.type === "pattern" &&
                      "Invalid email type"}
                  </p>
                )}
                <input
                  type="number"
                  {...register("phone", {
                    required: true,
                    pattern: /^\d{10}$/,
                  })}
                  placeholder="+91 phone number"
                  value={userDetails.phone}
                  required
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      phone: e.target.value,
                    })
                  }
                  className="w-full focus:outline-none p-1 text-xs border-b border-gray-300"
                />
                {errors.phone && (
                  <p className="text-xs text-red-600">
                    {errors.phone.type === "required" &&
                      "This field is required"}
                    {errors.phone.type === "pattern" &&
                      "Invalid phone type"}
                  </p>
                )}
                <textarea
                placeholder="Message"
                  value={userDetails.message}
                  {...register("message", {
                    required: true,
                  })}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      message: e.target.value,
                    })
                  }
                  className="w-full focus:outline-none p-2 text-xs border-b border-gray-300"
                >
                  <option>Select Vertical</option>
                  <option>Technology</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                </textarea>
                {errors.message && (
                  <p className="text-xs text-red-600">
                    {errors.message.type === "required" &&
                      "This field is required"}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 w-full cursor-pointer bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
