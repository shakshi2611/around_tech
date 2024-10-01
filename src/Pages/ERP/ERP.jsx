import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import './ERP.css'

const ERP = () => {
  return (
    <div>
    <header className="main_header">
        <div className="d-flex justify-content-center align-items-center flex-column pt-5 container">
            <div className="col-12 col-md-8 col-lg-8 text-center">
                <h1 className="main_heading fs-2">ERP Software Development Company</h1>
                <h2 className="fs-5">Simple, Robust, effective and fast ERP Development Solutions at Around Tech Solutions!</h2>
            </div>
        </div>
    </header>

    <div className="framed-paragraph container my-4">
        <p>
            Whether you are expanding your business operations or are new to the industry, an effective ERP (Enterprise Resource Planning) system is essential to automate operations. Taksh IT Solutions Private Limited is a pioneering ERP software development company in Noida, Delhi/NCR, with years of hands-on experience in ERP development. Our team has expertise in creating fully-integrated modules for managing workflows, workforce, manufacturing processes, financial flows, and more. Our top-notch ERP development solutions improve existing business processes and monitor resources and projects.
        </p>
    </div>

    <header className="main_header">
        <div className="d-flex justify-content-center align-items-center flex-column pt-5 container">
            <div className="col-12 col-md-8 col-lg-8 text-center">
                <h1 className="main_heading fs-2">Empower Businesses Via Our Custom ERP Development Services</h1>
            </div>
        </div>
    </header>

    <div className="framed-paragraph container my-4">
        <p>
            We are a full-fledged ERP software development company, helping industry clients streamline and automate their processes within a single integrated system. Our ERP service development includes:
        </p>
    </div>

    <div className="container mx-auto px-2 py-6 max-w-md sm:max-w-3xl lg:max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-2">Data Warehousing</h2>
                <p className="text-gray-600">Leverage central repository data warehousing systems to load, transform, or extract data from various sources.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-2">ERP Integration Services</h2>
                <p className="text-gray-600">Robust solutions to integrate with various enterprise systems ensuring seamless business workflows.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-2">Expert ERP Implementation</h2>
                <p className="text-gray-600">Assistance in configuring and deploying custom security, servers, and networks with zero downtime.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-2">Powerful Reporting</h2>
                <p className="text-gray-600">Custom reporting functionalities for real-time queries and data visualization.</p>
            </div>
        </div>
    </div>

    <div style={{display: 'flex', justifyContent: 'center', alignitems: 'center'}}>
        <img className="erp_img py-4" src="assets/{0D03A86C-33B4-4C89-BE16-46A12D03B8E7}.png" alt="ERP Development Solutions Image"/>
    </div>
  
    <footer className="main_footer">
        <div className="container mx-auto text-center">
            <p>Industries we Cater Our ERP Software Services Into: Healthcare, Retail, Finance, etc.</p>
        </div>
    </footer>
    </div>
  );
};


export default ERP;