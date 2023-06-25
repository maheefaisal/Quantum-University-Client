import image1 from "../../../../assets/images/convocation.jpeg";

const MSCINMATHEMATICS = () => {
  return (
    <>
      {/* Image for MSCINMATHEMATICS  */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">
            M. Sc. in Mathematics (1 Year)
          </h1>
        </div>
      </div>
      {/* text */}

      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">M. Sc. in Mathematics</h2>
        <p className="text-lg mb-4">
          The M. Sc. in Mathematics program is offered by the Department of
          Mathematics and Statistics under the Faculty of Engineering and
          Applied Sciences. It is a challenging postgraduate degree designed for
          individuals who are ambitious to excel in the professional and
          academic fields. The program provides an opportunity to gain advanced
          financial knowledge and skills through the application of mathematics,
          which have direct relevance to the business, banking, insurance, and
          industrial sectors. These skills are highly valued by employers in
          these industries.
        </p>
        <p className="text-lg mb-4">
          The curriculum of the program is meticulously designed to provide
          rigorous training in mathematics, ensuring that graduates have a solid
          foundation and expertise in the subject. The courses offered in the
          program are carefully selected to have practical applications in
          various fields, equipping graduates with the necessary skills to
          thrive in their chosen career paths.
        </p>
        <p className="text-lg mb-4">
          In addition to its applicability in the financial sector, the M. Sc.
          in Mathematics program also prepares graduates for teaching
          professions at all levels. The program ensures that graduates are
          equipped with the knowledge and pedagogical skills to excel in math
          teaching roles, making them versatile professionals in both academic
          and professional settings.
        </p>
        <p className="text-lg mb-4">
          By pursuing the M. Sc. in Mathematics at our institution, students can
          expect a challenging yet rewarding educational experience that will
          enhance their professional prospects and open doors to a wide range of
          opportunities.
        </p>
      </div>

      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Program Structure</h2>
        <p className="text-lg mb-4">
          The M. Sc. in Mathematics program at BUBT is a one-year (3 semesters)
          program that offers two groups: General group and Thesis group.
        </p>
        <p className="text-lg mb-4">
          The General group students are required to complete 33 credit hours,
          which include 4 courses (12 credits) from Area-I, 4 courses (12
          credits) from Area-II, 2 courses (6 credits) from specialization
          courses, and a project/internship of 3 credits.
        </p>
        <p className="text-lg mb-4">
          On the other hand, the Thesis group students are required to complete
          36 credit hours, including 4 courses (12 credits) from Area-I, 4
          courses (12 credits) from Area-II, and 2 courses (6 credits) from
          specialization courses. In addition to the course requirements, each
          thesis group student must write a thesis on a topic under the guidance
          of a supervisor and a co-supervisor. The thesis work carries 6 credits
          and requires prior approval of the topic and supervisor by the
          university authority.
        </p>
        <p className="text-lg mb-4">
          The normal workload for students includes 12 credits in each of the
          1st and 2nd semesters. The remaining credits are allocated for the
          project/internship in the 3rd semester for the General group, while
          the Thesis group students allocate those credits for their thesis
          work. Any adjustments to the workload require special permission from
          the appropriate authority at BUBT.
        </p>
      </div>
    </>
  );
};

export default MSCINMATHEMATICS;
