import React, { useEffect, useState } from "react";
import image1 from "../../../../assets/images/convocation.jpeg";

const BBA = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the file
    fetch("program.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      {/* Image for BBA  */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">BBA</h1>
        </div>
      </div>
      {/* Text BBA  */}
      <div className="container my-8 mx-auto max-w-2xl">
        <div class="text-center p-4">
          <h1 class="text-2xl font-bold mb-4">
            Bachelor of Business Administration (BBA) at BUBT
          </h1>
          <p class="text-base leading-7">
            BUBT offers a comprehensive four-year undergraduate program, the
            Bachelor of Business Administration (BBA), designed to equip
            students with the knowledge and skills necessary to excel as young
            executives in government, semi-government, and private
            organizations.
          </p>
          <p class="text-base leading-7">
            Our full-day program focuses on developing the capabilities of our
            students to confidently undertake responsibilities in today's
            dynamic business environment, effectively meeting the professional
            challenges of the 21st century.
          </p>
        </div>

        <div class="text-center p-4">
          <h2 class="text-xl font-bold mb-4">
            Program Structure and Requirements
          </h2>
          <p class="text-base leading-7">
            A total of 126 credit hours must be completed by the students,
            distributed across 34 taught courses. Additionally, students are
            required to take 6 elective courses for their major, a 3-credit
            internship project, and 3 credits for viva voce examinations. Viva
            voce examinations are conducted at the end of each academic year.
          </p>
        </div>

        <div class="text-center p-4">
          <h2 class="text-xl font-bold mb-4">
            Semester Structure and Course Load
          </h2>
          <p class="text-base leading-7">
            The program is divided into 12 regular semesters, each lasting for
            15 weeks. Within a semester, 13 weeks are dedicated to classes. The
            usual course load consists of 12 credits, with 4 courses taken in
            each regular semester. To specialize in a particular area, students
            are required to complete 6 courses (18 credits) for their major.
          </p>
          <p class="text-base leading-7">
            Upon completion of all coursework, students undertake a 12-week
            internship assignment. Following the organizational attachment
            period, students prepare reports on their internship experiences,
            which are defended through a formal presentation.
          </p>
        </div>

        <div class="text-center p-4">
          <h2 class="text-xl font-bold mb-4">
            Admission Requirements for Bachelor of Business Administration (BBA)
            Program:
          </h2>
          <ul class="text-base leading-7 list-disc ml-8">
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
              subjects. In these two examinations out of 7 (seven) subjects, a
              student must have passed 4 (four) subjects with at least B grade
              or GPA of 4.00 and in 3 (three) subjects with at least C grade or
              GPA of 3.5; or
            </li>
            <li>
              North American High School Diploma or International Baccalaureate,
              or its equivalent; or
            </li>
            <li>
              In case of sons/daughters of Freedom Fighters, a total GPA of at
              least 5.00 in both the SSC and the HSC Examinations. But the
              official proof of the Father/Mother as a Freedom Fighter must be
              submitted.
            </li>
          </ul>
        </div>

        <div class="text-center p-4">
          <h2 class="text-xl font-bold mb-4">
            Admission Procedure for Bachelor of Business Administration (BBA)
            Program:
          </h2>
          <p class="text-base leading-7">
            Admission forms and prospectus are available at the admission
            office/reception desk. Once the necessary documents are verified,
            applicants can proceed to deposit the admission fees and sign the
            application form to complete the admission process.
          </p>
        </div>

        <div class="text-center p-4">
          <h2 class="text-xl font-bold mb-4">
            Documents Required for Admission:
          </h2>
          <ul class="text-base leading-7 list-disc ml-8">
            <li>
              Two passport-size color photographs (studio lab print with white
              background for ID card purpose)
            </li>
            <li>
              Photocopies of SSC/O-Level, HSC/A-Level, or equivalent examination
              certificates and mark sheets/transcripts
            </li>
            <li>
              SSC/O-Level registration card and birth certificate/national ID
              card (one copy each)
            </li>
            <li>
              Original certificates, mark sheets/transcripts, registration card,
              and birth certificate/national ID card must be produced for
              verification by the officer of BUBT in charge of admission.
            </li>
          </ul>
        </div>

        <span>
          <div className="container mx-auto">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 bg-gray-200">Course Type</th>
                  <th className="px-4 py-2 bg-gray-200">Number of Courses</th>
                  <th className="px-4 py-2 bg-gray-200">Credit Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    A. Foundation, Support and Core Courses{" "}
                  </td>
                  <td className="border px-4 py-2">34</td>
                  <td className="border px-4 py-2">102</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    B. Elective Courses for doing major{" "}
                  </td>
                  <td className="border px-4 py-2">6</td>
                  <td className="border px-4 py-2">18</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">C. Internship </td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">3</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    D. Viva Voce Examinations{" "}
                  </td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">3</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Total</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">126</td>
                </tr>
              </tbody>
            </table>
          </div>
        </span>
        <span className="text-2xl text-bold">
          A. Foundation, Support and Core Courses:
        </span>
        <span>
          <table className="min-w-full divide-y divide-gray-200">
            {/* Table headers */}
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Serial Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Course Code
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Course Title
                </th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((entry) => (
                <tr key={entry.serialNumber}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {entry.serialNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {entry.courseCode}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {entry.courseTitle}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </span>
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold mb-4">Elective Courses for Major</h2>

          <p class="mb-4">
            Currently four major areas are available. These are:
          </p>

          <ul class="list-disc ml-8 mb-4">
            <li>Human Resource Management</li>
            <li>Accounting</li>
            <li>Finance</li>
            <li>Marketing</li>
          </ul>

          <p class="mb-4">
            Students have to take 6 (six) courses of 18 (eighteen) credit hours
            in any one of the following areas for the purpose of majoring:
          </p>

          <p class="font-bold">(i) Human Resource Management:</p>

          <p class="mb-4">
            Students majoring in this area must take the following four courses
            (12 credits):
          </p>

          <ul class="list-disc ml-8">
            <li>HRM 403 Human Resource Planning and Policy</li>
            <li>HRM 405 Compensation Management</li>
            <li>HRM 407 Human Resource Management Practices in Bangladesh</li>
            <li>HRM 408 Strategic Human Resource Management</li>
          </ul>
        </div>
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold mb-4">Elective Courses for Major</h2>

          <p class="mb-4">
            Currently four major areas are available. These are:
          </p>

          <ul class="list-disc ml-8 mb-4">
            <li>Human Resource Management</li>
            <li>Accounting</li>
            <li>Finance</li>
            <li>Marketing</li>
          </ul>

          <p class="mb-4">
            Students have to take 6 (six) courses of 18 (eighteen) credit hours
            in any one of the following areas for the purpose of majoring:
          </p>

          <p class="font-bold">(i) Human Resource Management:</p>

          <p class="mb-4">
            Students majoring in this area must take the following four courses
            (12 credits):
          </p>

          <ul class="list-disc ml-8">
            <li>HRM 403 Human Resource Planning and Policy</li>
            <li>HRM 405 Compensation Management</li>
            <li>HRM 407 Human Resource Management Practices in Bangladesh</li>
            <li>HRM 408 Strategic Human Resource Management</li>
          </ul>
        </div>

        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-6">Elective Courses for Major</h2>

          <div class="mb-8">
            <h3 class="text-xl font-bold mb-2">(iii) Finance:</h3>
            <p class="mb-4">
              Students majoring in this area must take the following four
              courses (12 credits):
            </p>
            <ul class="list-disc ml-8 mb-4">
              <li>FIN 404 Corporate Finance</li>
              <li>FIN 406 Management of Financial Institutions</li>
              <li>FIN 407 Investment Management</li>
              <li>FIN 409 International Financial Management</li>
            </ul>
            <p class="mb-4">
              They have to take additional 2 courses (6 credits) from the
              following:
            </p>
            <ul class="list-disc ml-8">
              <li>FIN 405 Security Analysis and Portfolio Management</li>
              <li>FIN 408 Financial Analysis and Reporting</li>
              <li>FIN 410 Working Capital Management</li>
              <li>FIN 411 Micro Finance</li>
            </ul>
          </div>

          <div class="mb-8">
            <h3 class="text-xl font-bold mb-2">(iv) Marketing:</h3>
            <p class="mb-4">
              Students majoring in this area must take the following four
              courses (12 credits):
            </p>
            <ul class="list-disc ml-8 mb-4">
              <li>MKT 403 Consumer Behavior</li>
              <li>MKT 407 Marketing Research</li>
              <li>MKT 409 Service Marketing</li>
              <li>MKT 410 Strategic Marketing</li>
            </ul>
            <p class="mb-4">
              They have to take additional 2 courses (6 credits) from the
              following:
            </p>
            <ul class="list-disc ml-8">
              <li>MKT 404 Integrated Marketing Communication</li>
              <li>MKT 405 Supply Chain Management</li>
              <li>MKT 406 E-Marketing</li>
              <li>MKT 408 Brand Management</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BBA;
