import image1 from "../../../../assets/images/convocation.jpeg";

const BSCEEE = () => {
  return (
    <>
      {/* Image for Bsc EEE  */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">Bsc EEE</h1>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Program Structure</h1>

        <div className="rounded shadow p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Program Details</h2>
          <p className="text-gray-700">
            B.Sc. in Electrical and Electronic Engineering at BUBT
          </p>
          <p className="text-gray-700">
            Four-year full-time program consisting of 12 regular semesters
          </p>
          <p className="text-gray-700">Total credits required: 154.5</p>
          <p className="text-gray-700">- Theory credits: 120</p>
          <p className="text-gray-700">- Lab credits: 30.00</p>
          <p className="text-gray-700">- Thesis/Senior Project credits: 4.50</p>
          <p className="text-gray-700">- Remedial course credits: 0 (zero)</p>
        </div>

        <div className=" rounded shadow p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Course Categories</h2>
          <p className="text-gray-700">
            Courses offered in the undergraduate program are divided into 8
            categories:
          </p>
          <ol className="list-decimal list-inside">
            <li>English</li>
            <li>Mathematics</li>
            <li>General Education</li>
            <li>Basic Sciences</li>
            <li>Interdisciplinary Engineering Courses</li>
            <li>Compulsory Remedial Course</li>
            <li>Program Core Courses</li>
            <li>Elective Courses</li>
          </ol>
        </div>

        <div className=" rounded shadow p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Elective Courses</h2>
          <p className="text-gray-700">
            The elective courses are designed to give students advanced
            knowledge in their chosen major fields:
          </p>
          <ol className="list-decimal list-inside">
            <li>Power</li>
            <li>Electronics</li>
            <li>Communication</li>
            <li>Computer</li>
          </ol>
          <p className="text-gray-700">
            Students must take seven elective courses of 25.50 credits, with
            four from their chosen major field and three from any other major
            field as a minor.
          </p>
        </div>

        <div className=" rounded shadow p-4">
          <h2 className="text-lg font-bold mb-2">Course Load and Credits</h2>
          <p className="text-gray-700">
            - Theory courses: 3 credits each, 3 contact hours
          </p>
          <p className="text-gray-700">
            - Lab courses: 1.5 credits each, 3 contact hours
          </p>
          <p className="text-gray-700">
            - Remedial course: 1.5 credits, 3 contact hours (earns 0 credits)
          </p>
          <p className="text-gray-700">- Thesis/Senior Project: 4.50 credits</p>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Admission Requirements</h1>

        <div className=" rounded shadow p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">
            For HSC or Equivalent Level Students
          </h2>
          <ul className="list-disc list-inside">
            <li>
              Science background with Mathematics, Physics, and Chemistry in SSC
              and HSC or equivalent level
            </li>
            <li>
              GPA of at least 2.50 or 2nd Division in both SSC and HSC
              examinations; OR
            </li>
            <li>
              GPA of at least 2.00 either in SSC or HSC examination, but the
              total GPA in both examinations must be at least 6.00; OR
            </li>
            <li>
              'O' Level with at least 5 subjects and 'A' Level with at least 3
              subjects with an average grade of B; OR
            </li>
            <li>
              Sons/daughters of Freedom Fighters must have a total GPA of at
              least 5.00 in both SSC and HSC Examinations. Official proof of the
              parent's status as a Freedom Fighter must be submitted.
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            Prospective students may need to sit for an admission test.
          </p>
        </div>

        <div className=" rounded shadow p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">
            For Diploma (Engineering) Students
          </h2>
          <ul className="list-disc list-inside">
            <li>
              SSC with Physics, Higher Mathematics & Chemistry GPA 2.5 and above
            </li>
            <li>
              Three/Four years Diploma in Engineering from Bangladesh Technical
              Education Board (BTEB) with a minimum CGPA of 2.5 out of 4.00 OR
            </li>
            <li>
              A Diploma recognized by BTEB with a minimum CGPA of 2.5 out of
              4.00 in any engineering discipline from a recognized institute
            </li>
            <li>
              Proof of Physics, Chemistry & Maths in Diploma level is a must
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            Prospective students may need to sit for an admission test.
          </p>
        </div>

        <h1 className="text-2xl font-bold mb-4">Admission Procedure</h1>

        <div className=" rounded shadow p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Admission Process</h2>
          <p className="text-gray-700">
            Admission form and prospectus are available in the admission
            office/reception desk. After the verification of necessary
            documents, successful applicants must deposit the admission fees and
            sign the application form to complete the admission process.
          </p>
        </div>

        <div className=" rounded shadow p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Required Documents</h2>
          <ul className="list-disc list-inside">
            <li>
              Two passport size color photographs (studio lab print with white
              background for ID card purpose)
            </li>
            <li>
              Photocopies of SSC/O-Level, HSC/A-Level/Diploma, or equivalent
              examination certificates and mark sheets/transcripts, SSC/O-Level
              registration card, and birth certificate/national ID card (one
              copy each)
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            Original certificates, mark sheets/transcripts, registration card,
            and birth certificate/national ID card must be produced for
            verification by the officer of BUBT in charge of admission.
          </p>
        </div>

        <h1 className="text-2xl font-bold mb-4">
          Total Cost of B.Sc. in Electrical and Electronic Engineering
        </h1>

        <div className="rounded shadow p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">
            For HSC or Equivalent Level Students
          </h2>
          <p className="text-gray-700">Total cost: 409,490/-</p>
        </div>

        <div className=" rounded shadow p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">
            For Diploma (Engineering) Students
          </h2>
          <p className="text-gray-700">Total cost: 260,495/-</p>
        </div>
      </div>
    </>
  );
};

export default BSCEEE;
