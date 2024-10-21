import MainBg from "../../assets/main-bg.svg";

const AboutUs = () => {
  return (
    <div className="container mb-7 pt-2">
      <div className="row row-cols-1 row-cols-md-2 justify-content-between mt-4">
        <div className="d-flex flex-column justify-content-center align-items-start">
          <h1 className="display-6 mb-3 pb-2 fw-bold">About Our Company</h1>
          <p className="display-7 mb-2 pb-1 lh-base">
            We strive to bring innovative solutions to everyday challenges.
            Founded in 1956, our mission has always been to provide high-quality
            products and services that make a real difference in people's lives.
            With our talented team of professionals, we offer cutting-edge
            technology solutions tailored to meet the evolving needs of our
            clients.
          </p>
          <p className="display-7 mb-5 pb-1 lh-base">
            We specialize in Web development, delivering both consumer and
            business-to-business (B2B) solutions. Our commitment to excellence,
            attention to detail, and focus on customer satisfaction has earned
            us the trust of clients across various industries.
          </p>
          <h4 className="fw-bold mb-3">Our Values:</h4>
          <ul>
            <li className="mb-3">
              <strong>Innovation:</strong> We embrace change and consistently
              push the boundaries of what's possible.
            </li>
            <li className="mb-3">
              <strong>Integrity:</strong> Transparency and honesty guide every
              interaction we have with our clients, partners, and team members.
            </li>
            <li className="mb-3">
              <strong>Customer Focus:</strong> Your success is our success. We
              are committed to delivering tailored solutions that solve your
              most pressing challenges.
            </li>
          </ul>
          <a className="btn btn-success fw-bold py-3 px-5">Get started</a>
        </div>
        <div className="d-flex justify-content-end mt-5 mt-md-0">
          <img src={MainBg} alt="" className="image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
