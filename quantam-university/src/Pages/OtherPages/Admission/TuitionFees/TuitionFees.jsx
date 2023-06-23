import React from "react";
import image1 from "../../../../assets/images/convocation.jpeg";
import image2 from "../../../../assets/images/tutionfees.png";

const TuitionFees = () => {
  return (
    <>
      {/* Banner For Tuition Fees */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">Tuition Fees</h1>
        </div>
      </div>
      {/* Text And Image For Tuition Fees */}
      <div className="my-8 mx-auto max-w-2xl text-justify">
        <p className="text-xl font-bold mb-4">Tuition Fees</p>
        <img src={image2} alt="Tuition Fees" className="my-4" />
        <p className="font-bold mb-2">Fee Payment Procedure</p>
        <p>
          Tuition fees and semester fees are to be paid on a semester basis.
          Caution money for undergraduate programs is Tk. 3,000 (refundable) and
          for graduate programs is Tk. 2,000 (refundable). All payments should
          be made to the designated Bank by pay order/cash in the prescribed
          Money Receipt taken from the Accounts section of BUBT. Fees are
          payable as per the following schedule:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>
            New students: Total fees of the 1st semester to be paid at the time
            of admission.
          </li>
          <li>
            Existing students: 50% of the total semester fees is to be paid at
            the time of registration and the remaining 50% is payable within 30
            days from the date of the start of the classes of that semester or
            as decided and notified by the university administration from time
            to time.
          </li>
        </ul>
        <p className="mb-4">
          A specific amount of fine shall be payable for failure to pay the fees
          within the scheduled date. Students will not be allowed to sit for
          the Semester Final Examination without clearance of all their dues
          before the start of the Examination.
        </p>
      </div>
    </>
  );
};

export default TuitionFees;
