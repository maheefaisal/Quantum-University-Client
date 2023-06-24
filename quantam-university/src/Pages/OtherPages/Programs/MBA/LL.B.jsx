import image1 from "../../../../assets/images/convocation.jpeg";

const LLB = () => {
  return (
    <>
      {/* Image for Bsc LLB  */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">LLB</h1>
        </div>
      </div>
      {/* text */}
      <div>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Program Details</h1>

          <div className=" rounded shadow p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">Program Duration</h2>
            <p className="text-gray-700">
              4-year program consisting of 12 consecutive semesters
            </p>
          </div>

          <div className=" rounded shadow p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">Credit Requirements</h2>
            <p className="text-gray-700">
              Students are required to complete a total of 144 credits
            </p>
            <p className="text-gray-700">
              - Legal Research Methodology: 3 credits
            </p>
            <p className="text-gray-700">- Dissertation: 3 credits</p>
            <p className="text-gray-700">- Viva Voce Examination: 3 credits</p>
          </div>

          <div className=" rounded shadow p-4">
            <h2 className="text-lg font-bold mb-2">Viva Voce Examination</h2>
            <p className="text-gray-700">
              Students are required to appear for a viva voce examination at the
              end of each academic year (after every 3 consecutive semesters).
            </p>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Admission Requirements</h1>

          <div className="rounded shadow p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">GPA Requirements</h2>
            <p className="text-gray-700">
              - GPA of at least 2.50 or 2nd Division in both the SSC and the HSC
              or equivalent examinations; or
            </p>
            <p className="text-gray-700">
              - GPA of at least 2.00 either in the SSC or the HSC examination,
              but the total GPA in both the examinations combined must be at
              least 6.00; or
            </p>
            <p className="text-gray-700">
              - 'O' Level with at least 5 subjects and 'A' Level with at least 2
              subjects. In these two examinations out of 7 (seven) subjects, a
              student must have passed 4 (four) subjects with at least B grade
              or GPA of 4.00 and in 3 (three) subjects with at least C grade or
              GPA of 3.5.
            </p>
          </div>

          <div className="rounded shadow p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">Alternative Requirements</h2>
            <p className="text-gray-700">
              - North American High School Diploma or International
              Baccalaureate, or its equivalent.
            </p>
            <p className="text-gray-700">
              - In case of sons/daughters of Freedom Fighters, a total GPA of at
              least 5.00 in both the SSC and the HSC Examinations. But the
              official proof of the Father/Mother as a Freedom Fighter must be
              submitted.
            </p>
          </div>
          <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admission Procedure</h1>

      <div className="bg-white rounded shadow p-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Application Process</h2>
        <p className="text-gray-700">1. Obtain the admission form and prospectus from the admission office/reception desk.</p>
        <p className="text-gray-700">2. Fill out the admission form with accurate information.</p>
        <p className="text-gray-700">3. Submit the necessary documents for verification.</p>
        <p className="text-gray-700">4. Pay the admission fees.</p>
        <p className="text-gray-700">5. Sign the application form to complete the admission process.</p>
      </div>

      <div className=" rounded shadow p-4">
        <h2 className="text-lg font-bold mb-2">Required Documents</h2>
        <p className="text-gray-700">- Two passport size color photographs (studio lab print with white background for ID card purpose)</p>
        <p className="text-gray-700">- Photocopies of certificates and mark sheets of SSC/O-Level, HSC/A-Level, or other equivalent examination</p>
        <p className="text-gray-700">- SSC/O-Level registration card</p>
        <p className="text-gray-700">- Birth certificate/national ID card of the candidate</p>
        <p className="text-gray-700">- Original certificates, mark sheets/transcripts, SSC/O-Level registration card, and birth certificate/national ID card must be produced for verification by the officer of BUBT in charge of admission.</p>
      </div>
    </div>
        </div>


      </div>
    </>
  );
};

export default LLB;
