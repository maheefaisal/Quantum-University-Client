import image1 from "../../../../assets/images/convocation.jpeg";

const BaHonsEnglish = () => {
  return (
    <>
      {/* Image for BaHonsEnglish  */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">Ba Hons English</h1>
        </div>
      </div>
      {/* text */}
      <div>
        <div className="container mx-auto py-8">
          <h2 className="text-2xl font-bold mb-4">Admission Requirements</h2>
          <ul className="list-disc pl-6">
            <li>
              GPA of at least 2.50 or 2nd Division in both the SSC and the HSC
              or equivalent examinations; or
            </li>
            <li>
              GPA of at least 2.00 either in the SSC or the HSC examination, but
              the total GPA in both the examinations combined must be at least
              6.00; or
            </li>
            <li>
              'O' Level with at least 5 subjects and 'A' Level with at least 2
              subjects. In these two examinations out of 7 subjects, a student
              must have passed 4 subjects with at least B grade or GPA of 4.00
              and in 3 subjects with at least C grade or GPA of 3.5.
            </li>
            <li>
              North American High School Diploma or International Baccalaureate,
              or its equivalent.
            </li>
            <li>
              In case of sons/daughters of Freedom Fighters, a total GPA of at
              least 5.00 in both the SSC and the HSC Examinations. But the
              official proof of the Father/Mother as a Freedom Fighter must be
              submitted.
            </li>
          </ul>
        </div>
        <div className="container mx-auto py-8">
    <h2 className="text-2xl font-bold mb-4">Admission Procedure</h2>
    <p className="mb-4">
      Admission form and prospectus are available in the admission office/reception desk. After verification of the
      necessary documents, the applicants are allowed to deposit the admission fees and sign on the application form to
      complete the admission process.
    </p>
    <p className="mb-4">The following documents are needed at the time of admission:</p>
    <ul className="list-disc pl-6">
      <li>Two passport size color photographs (studio lab print with white background for ID card purpose).</li>
      <li>Photocopies (one copy each):</li>
      <ul className="list-disc pl-6">
        <li>Certificates and marksheets of SSC/O-Level, HSC/A-Level, or other equivalent examination.</li>
        <li>SSC/O-Level registration card.</li>
        <li>Birth certificate/national ID card of the candidate (one copy each).</li>
      </ul>
      <li>
        Original certificates, mark sheets/transcripts, SSC/O-Level registration card and birth certificate/national ID card
        must be produced for verification by the officer of BUBT in charge of admission.
      </li>
    </ul>
  </div>
      </div>
    </>
  );
};

export default BaHonsEnglish;
