import image1 from "../../../../assets/images/convocation.jpeg";

const BSCHonsEnglish = () => {
  return (
    <>
      {/* Image for Bsc EEE  */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">Bsc Hons English</h1>
        </div>
      </div>
    </>
  );
};

export default BSCHonsEnglish;
