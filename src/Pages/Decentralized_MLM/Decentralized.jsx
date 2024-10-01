
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import './Decentralized.css';

const Decentralized_MLM = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="main_header">
        <div className="d-flex justify-content-center align-items-center flex-column pt-5 container">
          <div className="col-12 col-md-8 col-lg-8">
            <h1 className="main_heading text-center fs-2">
              How we Help In Developing Crypto With MLM
            </h1>
          </div>
        </div>
      </header>

      {/* Paragraph Section */}
      <div className="framed-paragraph container my-4">
        <p>
          A number of Small and Medium-sized enterprises have shown their interest in getting cryptocurrency MLM software development services. If you are also looking to do so, we would like to tell you that cryptocurrency MLM software can help your business get financial as well as marketing assistance and follow a better roadmap.
        </p>
        <p>
          We at Taksh IT Solutions develop cryptocurrency MLM software based on blockchain networks that are the safest software and add the most trustworthy principles. These software give your business an environment equipped with the best person-to-person connectivity and Application Programming Interface (API) setups.
        </p>
        <p>
          You must make a wise decision while choosing a cryptocurrency MLM software, as it is essential for the success of your business. Taksh IT Solutions provides a range of services related to crypto MLM software and can deliver successful results within the desired timeframe.
        </p>
      </div>

      {/* Decentralized MLM Section */}
      <header className="main_header">
        <div className="d-flex justify-content-center align-items-center flex-column pt-5 container">
          <div className="col-12 col-md-8 col-lg-8">
            <h1 className="main_heading text-center fs-2">
              Why Decentralized MLM
            </h1>
          </div>
        </div>
      </header>
      <div className="framed-paragraph container my-4">
        <p>
          Decentralized applications (dApps) run on a distributed organization of computers rather than a single computer. dApps are carefully designed, and the records stored in them are unalterable, protecting the application from hacking or interruptions.
        </p>
      </div>

      {/* What We Develop Section */}
      <header className="main_header">
        <div className="d-flex justify-content-center align-items-center flex-column pt-5 container">
          <div className="col-12 col-md-8 col-lg-8">
            <h1 className="main_heading text-center fs-2">
              What We Develop In Cryptocurrency with MLM Software
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-2 py-6 max-w-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Unilevel Plan MLM Software",
            "Board Plan MLM Software",
            "Matrix Plan MLM Software",
            "Binary Plan MLM Software",
            "Gift/Helping Crowdfunding Plan",
            "Generation Plan MLM Software",
            "Repurchase Plan MLM Software",
            "Australian Plan MLM Software",
            "Level Plan MLM Software",
          ].map((title, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Cryptocurrency Smart Contract Services Section */}
      <header className="main_header">
        <div className="d-flex justify-content-center align-items-center flex-column pt-5 container">
          <div className="col-12 col-md-8 col-lg-8">
            <h1 className="main_heading text-center fs-2">
              Explore Our Cryptocurrency Smart Contract MLM Services
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-2 py-6 max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Blockchain Smart Contract MLM Software",
            "Hybrid Smart Contract Based MLM Platform",
            "Ethereum Smart Contract MLM Software",
            "Tron Smart Contract MLM Software",
            "Polygon Smart Contract MLM Software",
            "BSC Scan Smart Contract MLM Software",
          ].map((title, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reasons to Choose Section */}
      <header className="main_header">
        <div className="d-flex justify-content-center align-items-center flex-column pt-5 container">
          <div className="col-12 col-md-8 col-lg-8">
            <h1 className="main_heading text-center fs-2">
              Reasons To Choose Our Blockchain Based MLM Software Development
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-2 py-6 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="m-4 bg-white rounded-lg px-6 py-4 shadow-md">
            <p className="text-gray-600">
              Blockchain-based MLM software offers decentralized solutions, peer-to-peer networking, user-friendly dashboards, and multiple payment options, reducing workload and enhancing opportunities for business growth.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="max-w-full h-auto px-4"
              src="assets/Purple_Floral_Birthday_Instagram_Story-removebg-preview.png"
              alt="image"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p className="text-center py-5 bg-light"></p>
      </footer>
    </div>
  );
};

export default Decentralized_MLM;
