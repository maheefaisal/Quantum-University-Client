import React from "react";
import image1 from "../../../assets/images/convocation.jpeg";
import {
  FaLocationArrow,
  FaPhone,
  FaMobile,
  FaWhatsapp,
  FaViber,
  FaInternetExplorer,
  FaMailBulk,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      {/* Banner For Contact us */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">ContactUs</h1>
        </div>
      </div>
      <div className="mt-6 mx-20 card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-1/3">
          <img
            src="https://tile.loc.gov/image-services/iiif/service:gmd:gmd5:g5700:g5700:ct001356/full/pct:25/0/default.jpg"
            alt="Map"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-center mt-40">
            {/* Contact Information */}
            <div className="flex flex-col items-center space-x-2">
              {/* Phone Icon */}
              <FaPhone className="text-gray-500" size={24} />
              <span className="text-lg text-gray-700 font-medium">
                123-456-7890
              </span>
            </div>

            {/* Separator */}
            <div className="mx-4 h-6 border-r border-gray-300"></div>

            {/* Email Information */}
            <div className="flex flex-col items-center space-x-2">
              {/* Email Icon */}
              <FaMailBulk className="text-gray-500" size={24} />
              <span className="text-lg text-gray-700 font-medium">
                example@example.com
              </span>
            </div>

            <div className="mx-4 h-6 border-r border-gray-300"></div>

            <div className="flex flex-col items-center space-x-2">
              {/* Whatsapp Icon */}
              <FaWhatsapp className="text-gray-500" size={24} />
              <span className="text-lg text-gray-700 font-medium">
                01680050630
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            {/* Contact Information */}
            <div className="flex flex-col items-center space-x-2">
              {/* Phone Icon */}
              <FaInternetExplorer className="text-gray-500" size={24} />
              <span className="text-lg text-gray-700 font-medium">
                bubt.edu.bd
              </span>
            </div>

            {/* Separator */}
            <div className="mx-4 h-6 border-r border-gray-300"></div>

            {/* Email Information */}
            <div className="flex flex-col items-center space-x-2">
              {/* Email Icon */}
              <FaPhone className="text-gray-500" size={24} />
              <span className="text-lg text-gray-700 font-medium">
                Admission Hotline Number: 01810033733
              </span>
            </div>

            <div className="mx-4 h-6 border-r border-gray-300"></div>

            <div className="flex flex-col items-center space-x-2">
              {/* Whatsapp Icon */}
              <FaViber className="text-gray-500" size={24} />
              <span className="text-lg text-gray-700 font-medium">
                01680050630
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
