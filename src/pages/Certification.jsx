import './Certification.css';
export default function Certification(){
    return(
        <>
        <h2><button><a href="">Get Certficate</a></button></h2>
        <section className="certification-hero">
          <div className="container mx-auto">
            <h1>Certifications for Engineering Excellence</h1>
            <p>Earn prestigious certifications from IEI, including the Chartered Engineer and Professional Engineer credentials, to elevate your professional standing and career opportunities.</p>
            <button>Apply for Certification</button>
          </div>
        </section>
        <section className="certification-types">
          <div className="container mx-auto">
            <h2>Certification Types</h2>
            <div className="certification-card">
              <h3>Chartered Engineer (CEng)</h3>
              <p>Recognized globally, the Chartered Engineer certification validates your expertise and allows you to practice as a consultant in India and abroad. Ideal for Corporate Members of IEI.</p>
            </div>
            <div className="certification-card">
              <h3>Professional Engineer (PEng)</h3>
              <p>Enhance your career with the Professional Engineer certification, designed for engineers to certify plans, drawings, and public works, ensuring compliance with industry standards.</p>
            </div>
          </div>
        </section>
        <section className="certification-benefits">
          <div className="container mx-auto">
            <h2>Benefits of Certification</h2>
            <ul>
              <li>Global recognition of your engineering expertise.</li>
              <li>Eligibility to practice as a self-employed consultant.</li>
              <li>Enhanced credibility for empanelment as a Valuer or Loss Assessor.</li>
              <li>Access to exclusive professional development resources.</li>
              <li>Opportunities to certify engineering plans and public works.</li>
            </ul>
          </div>
        </section>
        </>
    )
}