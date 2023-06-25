import image1 from "../../../../assets/images/convocation.jpeg";

const LLMOneYear = () => {
  return (
    <>
      {/* Image for  LLMOneYear  */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">LLM One Year</h1>
        </div>
      </div>
      {/* text */}
      <div className=" py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            LL.M. Program Details
          </h2>
          <div className=" shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Program Overview
              </h3>
              <p className="mt-1 text-sm text-gray-700">
                At BUBT, the LL.M. program is a 1-year program consisting of 3
                consecutive semesters. It is designed to prepare students who
                have successfully completed LL.B. (Hons) degree from any
                recognized University for careers in law, enabling them to
                become good lawyers, judges, academics, and professionals in
                multifarious dimensions of law.
              </p>
            </div>
            <div className="border-t ">
              <dl>
                <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Duration
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    1 Year (3 consecutive semesters)
                  </dd>
                </div>
                <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Admission Criteria
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Students who have successfully completed LL.B. (Hons) degree
                    from any recognized University
                  </dd>
                </div>
                <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Total Credits
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    36 credits
                  </dd>
                </div>
                <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Courses</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    12 courses
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Requirement 1 */}
            <div className=" p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">
                Four-years LL.B. Honors Degree
              </h3>
              <p className="text-gray-700 mb-2">
                From any recognized college or university
              </p>
              <p className="text-gray-700 mb-2">
                GPA of at least 2.50 or 2nd Division in both the SSC and the HSC
                or equivalent examinations and GPA of at least 2.00 in bachelor
                program
              </p>
            </div>

            {/* Requirement 2 */}
            <div className=" p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">GPA Requirements</h3>
              <p className="text-gray-700 mb-2">
                GPA of at least 2.00 either in the SSC or the HSC examination,
                but the total GPA in both the examinations combined must be at
                least 6.00 and GPA of at least 2.00 in bachelor program
              </p>
            </div>

            {/* Requirement 3 */}
            <div className=" p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">
                'O' Level and 'A' Level
              </h3>
              <p className="text-gray-700 mb-2">
                At least 5 subjects in 'O' Level and at least 2 subjects in 'A'
                Level
              </p>
              <p className="text-gray-700 mb-2">
                In these two examinations, out of these at least 7 subjects,
                students must have passed 4 subjects with at least B grade or
                GPA of 4.00 and 3 subjects with at least C grade or GPA of 3.5
              </p>
            </div>

            {/* Requirement 4 */}
            <div className=" p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">
                North American High School Diploma or International
                Baccalaureate
              </h3>
              <p className="text-gray-700">Or its equivalent</p>
            </div>

            {/* Requirement 5 */}
            <div className=" p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">
                Freedom Fighters' Sons/Daughters
              </h3>
              <p className="text-gray-700 mb-2">
                A total GPA of at least 5.00 in both the SSC and the HSC
                Examinations
              </p>
              <p className="text-gray-700 mb-2">
                Official proof of the Father/Mother as a Freedom Fighter must be
                submitted
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">
          Admission Procedure for LL.M. Program
        </h2>
        <p className="text-lg mb-4">
          To apply for the LL.M. program, please follow the admission procedure
          outlined below:
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">
            Step 1: Collect Admission Form and Prospectus
          </h3>
          <p className="mb-4">
            Admission forms and prospectuses are available at the admission
            office/reception desk.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">
            Step 2: Document Verification
          </h3>
          <p className="mb-4">
            After collecting the admission form, submit the following necessary
            documents:
          </p>

          <ul className="list-disc list-inside">
            <li>
              Two passport size color photographs (studio lab print with white
              background for ID card purpose).
            </li>
            <li>
              Photocopies of SSC/O-Level, HSC/A-Level, Bachelor degree, or
              equivalent examination certificates and mark sheets/transcripts.
            </li>
            <li>Photocopy of birth certificate/national ID card.</li>
          </ul>
          <p className="mt-4">
            Please ensure that you have one copy of each document mentioned
            above for verification purposes.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">
            Step 3: Admission Fee Payment
          </h3>
          <p className="mb-4">
            Upon successful document verification, proceed to deposit the
            admission fees.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">
            Step 4: Application Form Completion
          </h3>
          <p className="mb-4">
            Sign on the application form to complete the admission process.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg font-bold">
            Note: Original certificates, mark sheets/transcripts, and birth
            certificate/national ID card must be produced for verification by
            the officer of BUBT in charge of admission.
          </p>
        </div>

        <p className="text-lg mb-4">
          If you have any further questions or need assistance, please feel free
          to contact the admission office.
        </p>

        <p className="text-sm text-gray-500">
          Please note that this information is subject to change. Contact the
          university for the most up-to-date admission procedure.
        </p>
      </div>
      
    </>
  );
};

export default LLMOneYear;
