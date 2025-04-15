import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  interface FormErrors {
    name?: string | null;
    phone?: string | null;
    email?: string | null;
    message?: string | null;
    [key: string]: string | null | undefined;
  }

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate message field
    const newErrors = { message: "" };
    if (
      !formData.message.trim() ||
      !formData.email.trim() ||
      !formData.name.trim() ||
      !formData.phone.trim()
    ) {
      newErrors.message = "This field is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <main>
      <h1 className="text-5xl font-bold mt-6 md:mb-8 text-center">Contact us</h1>
      <div className="flex md:flex-row flex-col justify-between w-full md:w-[85%] py-12 mx-auto">
        <div className="w-full max-w-lg bg-gradient-to-bl from-red-100 via-white to-blue-100 rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            <div>
              <label
                htmlFor="name"
                className="block text-purple-700 text-sm"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}

            <div>
              <label
                htmlFor="phone"
                className="block text-purple-700 text-sm"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-purple-700 text-sm"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}

            <div>
              <label
                htmlFor="message"
                className="block text-purple-700 text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="mx-auto block bg-black text-white font-medium mt-8 py-3 px-8 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2"
            >
              Submit Form
            </button>
          </form>
        </div>

        <div className="mt-12 max-w-lg text-center">
          <h2 className="text-3xl font-bold mb-2">We're here to help</h2>
          <p className="text-gray-700">
            Our team is ready to assist you seven days a week, no matter the
            issue.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
