import React from "react";
import image1 from "../../../../assets/images/convocation.jpeg";

const ScholarshipsWaiver = () => {
  return (
    <>
      {/* Banner For Scholarships & Waiver
       */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">
            Scholarships & Waiver
          </h1>
        </div>
      </div>
      <div className="my-8 mx-auto max-w-2xl ">
        <ol className="list-decimal space-y-2">
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
            Scholarships, stipends, and fee waivers are awarded to a minimum of
            6% students of the University on the basis of need and merit.
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
            20% Waiver on Admission Fee for newly admitted students (Special
            Waiver).
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
            10%-100% Tuition fee waiver/scholarship for poor and meritorious
            students.
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
            25%-100% Tuition fee waiver based on the results of the SSC and HSC
            Examinations.
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
            25%-100% Tuition fee waiver based on the semester results at BUBT.
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
            Special tuition fee waiver for siblings (25% each).
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
            100% Waiver on Tuition Fee for Children of the Freedom Fighters.
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
            25% waiver will be enjoyed by the students of Dhaka Commerce College
            (DCC) and 25% for Principal Kazi Faruky School & College.
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
            20% waiver on Tuition fee for BUBT Students admitted in Master’s
            Program.
          </li>
        </ol>
      </div>
    </>
  );
};

export default ScholarshipsWaiver;
