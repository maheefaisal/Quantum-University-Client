import image1 from "../../../../assets/images/convocation.jpeg";

const MBA = () => {
  return (
    <>
      {/* Image for Bsc LLB  */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">MBA</h1>
        </div>
      </div>
      {/* text */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Program Structure</h2>
        <p className="mb-4">
          MBA at BUBT is a full-time evening program designed for students to
          acquire in-depth knowledge and skills in the field of business
          administration. The program consists of core courses, elective courses
          for majoring, and an internship project.
        </p>
        <p className="mb-4">
          Students with a 4-year BBA background may be eligible for credit
          transfer/waiver of up to 24 credits based on their grades. Other
          students can also apply for credit transfer/waiver depending on their
          educational background.
        </p>
        <p className="mb-4">
          The two-year full-time program is structured into five regular
          semesters, with students taking courses totaling 12 credits in each
          semester. Upon completion of the coursework, students are required to
          undertake a twelve-week internship assignment or project work. After
          the organizational attachment, students prepare reports on their
          internship experiences, which are then defended in a formal
          presentation.
        </p>
        <p className="mb-4">
          The duration of the program in the evening depends on the number of
          courses a student enrolls in per semester.
        </p>
        <div className="flex justify-center">
          <div className=" p-6 rounded-md shadow-lg">
            <p className="text-lg font-semibold mb-2">Program Details:</p>
            <ul className="list-disc pl-6">
              <li>Total Credits: 67</li>
              <li>Core Courses: Included</li>
              <li>Elective Courses for Majoring: Included</li>
              <li>Internship Project: Included</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">
          Admission Requirements for MBA Program
        </h2>
        <p className="mb-4">
          To be eligible for the MBA program at BUBT, applicants must meet the
          following admission requirements:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Bachelor Degree in any field of study from any recognized university
            or institute. Candidates from GEC track or with foreign
            degree/diploma/certificate may also apply.
          </li>
          <li>
            GPA of at least 2.50 or 2nd Division in both the SSC and the HSC
            examinations and GPA of at least 2.00 in the bachelor program; or
          </li>
          <li>
            GPA of at least 2.00 either in the SSC or the HSC examination, but
            the total GPA in both the examinations must be at least 6.00 and GPA
            of at least 2.00 in the bachelor program; or
          </li>
          <li>
            'O' Level with at least 5 subjects and 'A' Level with at least 2
            subjects. In these two examinations, out of the at least 7 subjects,
            students must have passed 4 subjects with at least B grade or GPA of
            4.00 and 3 subjects with at least C grade or GPA of 3.5.
          </li>
          <li>
            In case of sons/daughters of Freedom Fighters, a total GPA of at
            least 5.00 in both the SSC and the HSC Examinations and GPA of at
            least 2.00 in the bachelor program. Proof of Father/Mother as
            Freedom Fighter must be submitted.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">
          Admission Procedure for MBA Program
        </h2>
        <p className="mb-4">
          To complete the admission process for the MBA program, applicants need
          to follow the admission procedure outlined below:
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            Collect the admission form and prospectus from the admission
            office/reception desk.
          </li>
          <li>
            Submit the necessary documents for verification, including:
            <ul className="list-disc pl-6">
              <li>
                Two passport size color photographs (studio lab print with white
                background for ID card purpose).
              </li>
              <li>
                Photocopies of SSC/O-Level, HSC/A-Level, Bachelor degree or
                equivalent examination certificates, mark sheets/transcripts,
                and birth certificate/national ID card (one copy each).
              </li>
            </ul>
          </li>
          <li>
            Original certificates, mark sheets/transcripts, registration card,
            and birth certificate/national ID card must be produced for
            verification by the officer of BUBT in charge of admission.
          </li>
          <li>
            Upon verification, deposit the admission fees and sign the
            application form to complete the admission process.
          </li>
        </ol>
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Course Structure</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Course type
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                No. of courses
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Credit hours
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                A. Foundation, Support and Core Courses
              </td>
              <td className="px-6 py-4 whitespace-nowrap">17</td>
              <td className="px-6 py-4 whitespace-nowrap">51</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                B. Elective Courses for majoring
              </td>
              <td className="px-6 py-4 whitespace-nowrap">04</td>
              <td className="px-6 py-4 whitespace-nowrap">12</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                C. Internship / Project work
              </td>
              <td className="px-6 py-4 whitespace-nowrap">-</td>
              <td className="px-6 py-4 whitespace-nowrap">04</td>
            </tr>
          </tbody>
          <tfoot className="bg-gray-100">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-semibold">
                Total
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-semibold"></td>
              <td className="px-6 py-4 whitespace-nowrap font-semibold">67</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default MBA;
