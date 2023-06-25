import image1 from "../../../../assets/images/convocation.jpeg";

const ExecutiveMba = () => {
  return (
    <>
      {/* Image for Executive Mba  */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">Executive MBA</h1>
        </div>
      </div>
      {/* text */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Executive MBA Program</h2>
        <p className="text-lg mb-4">
          BUBT has designed the Executive MBA Program to cater to the needs of
          working executives, whether they hold an undergraduate business degree
          or have no formal business education. The curriculum offers a unique
          opportunity for managers and executives to enhance their professional
          expertise and improve their problem-solving skills.
        </p>
        <p className="text-lg mb-4">
          This program is designed to accommodate the busy schedules of working
          professionals, allowing them to pursue professional development while
          continuing their full-time work. It is specifically tailored for
          middle to senior level managers employed in local and multinational
          organizations, NGOs, government agencies, development institutes,
          defense services, and other sectors.
        </p>
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Program Structure</h2>
        <p className="text-lg mb-4">
          The EMBA Program at BUBT is offered in the evening, allowing working
          professionals to pursue their studies while continuing their careers.
          The program can be completed in less than 2 years, although the
          duration may vary depending on individual circumstances.
        </p>
        <p className="text-lg mb-4">
          The program consists of a total of 14 courses and an internship
          project, amounting to a requirement of 45 credits. However, candidates
          who lack sufficient academic preparation and work experience to meet
          the program's rigor may need to take foundation courses. The number of
          foundation courses can go up to 9, totaling 27 credits.
        </p>
        <p className="text-lg mb-4">
          For those who do not require foundation courses, the program includes
          12 compulsory core courses worth 36 credits. Additionally, students
          are required to take 2 elective courses (6 credits) to specialize in a
          particular area. Finally, an internship project of 3 credits is
          required to complete the program.
        </p>
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Admission Requirements</h2>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            Bachelor's Degree in any field of study from a recognized university
            or institute
          </li>
          <li>Minimum two years of work experience at a managerial level</li>
          <li>
            GPA of at least 2.50 or 2nd Division in both the SSC and HSC
            examinations, and GPA of at least 2.00 in the bachelor's program
          </li>
          <li>
            GPA of at least 2.00 either in the SSC or HSC examination, but the
            total GPA in both examinations must be at least 6.00, and GPA of at
            least 2.00 in the bachelor's program
          </li>
          <li>
            'O' Level with at least 5 subjects and 'A' Level with at least 2
            subjects. In these two examinations, out of these at least 7
            subjects, students must have passed 4 subjects with at least B grade
            or GPA of 4.00, and in 3 subjects with at least C grade or GPA of
            3.5
          </li>
          <li>
            In case of sons/daughters of Freedom Fighters, a total GPA of at
            least 5.00 in both the SSC and HSC Examinations and GPA of at least
            2.00 in the bachelor's program. Proof of Father/Mother as Freedom
            Fighter must be submitted.
          </li>
        </ul>
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Admission Procedure</h2>
        <p className="text-lg mb-4">
          To apply for the EMBA program, follow the admission procedure outlined
          below:
        </p>
        <ol className="list-decimal list-inside text-lg mb-4">
          <li>
            Visit the admission office/reception desk to collect the admission
            form and prospectus.
          </li>
          <li>
            Prepare the necessary documents for verification:
            <ul className="list-disc list-inside text-lg">
              <li>
                Two passport size color photographs (studio lab print with white
                background for ID card purpose)
              </li>
              <li>
                Photocopies of SSC/O-Level, HSC/A-Level, Bachelor degree or
                equivalent examination certificates and mark sheets/transcripts
              </li>
              <li>Birth certificate/national ID card (one copy each)</li>
            </ul>
          </li>
          <li>
            Submit the required documents for verification by the officer in
            charge of admissions. Original certificates, mark
            sheets/transcripts, registration card, and birth
            certificate/national ID card must be presented for verification.
          </li>
          <li>
            Upon successful verification, deposit the admission fees and sign
            the application form to complete the admission process.
          </li>
        </ol>
      </div>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Course Structure</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Course Type</th>
              <th className="px-4 py-2">No. of Courses</th>
              <th className="px-4 py-2">Credit Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Foundation Courses</td>
              <td className="border px-4 py-2">9</td>
              <td className="border px-4 py-2">27</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Core Functional Courses</td>
              <td className="border px-4 py-2">12</td>
              <td className="border px-4 py-2">36</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Elective Courses for Majoring
              </td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">6</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Internship / Project Work</td>
              <td className="border px-4 py-2">-</td>
              <td className="border px-4 py-2">3</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">72</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default ExecutiveMba;
