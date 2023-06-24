import React from 'react';
import image1 from "../../../../assets/images/convocation.jpeg";

const CreditTransfer = () => {
    return (
        <>
            {/* Banner For Credit Transfer
       */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">
          Credit Transfer
          </h1>
        </div>
      </div>
      <div className='my-8 mx-auto max-w-2xl text-justify'>
        <span>A student may transfer his credits earned at previously institution/university attended towards a BUBT degree. For this purpose transcripts from all previously attended institutions/universities must be submitted. Transfer students are expected to have at least 2.50 CGPA for undergraduate and graduate programs on a 4-point scale in all university level courses to be considered for admission at BUBT. Only those courses where the grade of the student is B and above will be considered for credit transfer. Catalogs, official transcripts and testimonials from previously attended university/universities must be furnished with the application for admission. Equivalence of courses for each transferred student will be determined by the university. The residency requirement is that at least 60 percent of credits and internship/project of 3 to 4 credits for a degree must be earned at BUBT.</span>
      </div>
      </>
    );
};

export default CreditTransfer;