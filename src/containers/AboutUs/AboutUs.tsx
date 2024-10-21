import MainBg from  '../../assets/main-bg.svg';

const AboutUs = () => {
  return (
    <div className="container mb-7 pt-2">
      <div className="row row-cols-1 row-cols-md-2 justify-content-between mt-4">
        <div className="d-flex flex-column justify-content-center align-items-start">
          <h1 className="display-6 mb-3 pb-2 fw-bold">Work at the speed of thought</h1>
          <p className="display-7 mb-5 pb-1 lh-base">Tools, tutorials, design and innovation experts, all in one
            place! <br/>The most intuitive way to imagine your next user experience.</p>
          <a className="btn btn-success fw-bold py-3 px-5">Get started</a>
        </div>
        <div className="d-flex justify-content-end mt-5 mt-md-0">
          <img src={MainBg} alt="" className="image"/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;