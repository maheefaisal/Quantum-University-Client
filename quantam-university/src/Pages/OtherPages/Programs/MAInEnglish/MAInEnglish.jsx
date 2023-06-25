import image1 from "../../../../assets/images/convocation.jpeg";

const MAInEnglish = () => {
  return (
    <>
      {/* Image for MAInEnglish  */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">MA in English (Two-Year Program)
</h1>
        </div>
      </div>
      {/* text */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Program Structure</h2>
        <p className="text-lg mb-4">
          The M.A. program in English is designed for students who hold a
          Bachelor Degree with English as a subject of study or a pass degree in
          a 3-Year Honors Program in English.
        </p>
        <p className="text-lg mb-4">
          Students in this program are required to complete a total of 60
          credits, which includes 20 courses. They have the option to choose 3
          elective courses to concentrate on either Language or Literature.
          Additionally, a thesis worth 4 credits is required, making a total of
          64 credits for the M.A. Degree.
        </p>
        <p className="text-lg mb-4">
          A full-time student in good standing is expected to complete the
          program within two years. However, students who prefer a slower pace
          may take more than two years to complete the program.
        </p>
      </div>
    </>
  );
};

export default MAInEnglish;
