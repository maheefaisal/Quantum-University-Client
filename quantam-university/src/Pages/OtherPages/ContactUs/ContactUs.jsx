import React from "react";
import image1 from "../../../assets/images/convocation.jpeg";

const ContactUs = () => {
  return (
    <>
      {/* Banner For Credit Transfer
       */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">ContactUs</h1>
        </div>
      </div>

      <div className="container my-8 mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-2">Location</h2>
            <p>Rupnagar R/A, Mirpur-2, Dhaka-1216, Bangladesh</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-2">Phone Number</h2>
            <p>4803-6351, 4803-6352, 4803-6353</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-2">
              Admission Hotline Number
            </h2>
            <p>
              01810033733 01810033701, 01810033702, 01810033703, 01810033704,
              01810033705, 01810033706
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-2">Mobile</h2>
            <p>
              01967169189, 01845734337, 01680050630, 01741129235, 01554882075
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-2">WhatsApp</h2>
            <p>01680050630</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-2">Viber</h2>
            <p>01680050630</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-2">Email</h2>
            <p>info@bubt.edu.bd</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-2">Website</h2>
            <p>http://bubt.edu.bd</p>
          </div>
        </div>

        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
