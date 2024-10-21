import Profile1 from '../../assets/profile1.jpg';
import Profile2 from '../../assets/profile2.jpg';
import Profile3 from '../../assets/profile3.jpg';
import BottomBg from '../../assets/bottom-bg.png';


const Reviews = () => {
  return (
    <div>
      <div className="container mb-6">
        <div className="row">
          <h2 className="display-8 fw-bold text-center">What Clients Say</h2>
          <p className="fw-medium lh-base mb-5 text-center">Problems trying to resolve the conflict between <br/>the two
            major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 g-md-5">
          <div className="col">
            <div className="card rounded-3">
              <div className="card-body pt-4 d-flex flex-column align-items-start">
                <p className="lh-base text-gray">Product helps you see how many more days you need to work to reach your
                  financial goal.</p>
                <a href="#" className="d-flex mb-5 text-decoration-none">
                  <div><img src={Profile1} alt="Wahid Ari" className="rounded-circle"/></div>
                  <div className="d-flex flex-column ms-3 ">
                    <p className="text-success mb-0 mt-1 fw-semibold">Wahid Ari</p>
                    <p className="mb-0 fw-medium text-dark-gray">Designer</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-3">
              <div className="card-body pt-4 d-flex flex-column align-items-start">
                <p className="lh-base text-gray">Product helps you see how many more days you need to work to reach your
                  financial goal.</p>
                <a href="#" className="d-flex mb-5 text-decoration-none">
                  <div><img src={Profile2} alt="Wahid Ari" className="rounded-circle"/></div>
                  <div className="d-flex flex-column ms-3 ">
                    <p className="text-success mb-0 mt-1 fw-semibold">Wahid Ari</p>
                    <p className="mb-0 fw-medium text-dark-gray">Designer</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-3">
              <div className="card-body pt-4 d-flex flex-column align-items-start">
                <p className="lh-base text-gray">Product helps you see how many more days you need to work to reach your
                  financial goal.</p>
                <a href="#" className="d-flex mb-5 text-decoration-none">
                  <div><img src={Profile3} alt="Wahid Ari" className="rounded-circle"/></div>
                  <div className="d-flex flex-column ms-3 ">
                    <p className="text-success mb-0 mt-1 fw-semibold">Wahid Ari</p>
                    <p className="mb-0 fw-medium text-dark-gray">Designer</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-3">
              <div className="card-body pt-4 d-flex flex-column align-items-start">
                <p className="lh-base text-gray">Product helps you see how many more days you need to work to reach your
                  financial goal.</p>
                <a href="#" className="d-flex mb-5 text-decoration-none">
                  <div><img src={Profile3} alt="Wahid Ari" className="rounded-circle"/></div>
                  <div className="d-flex flex-column ms-3 ">
                    <p className="text-success mb-0 mt-1 fw-semibold">Wahid Ari</p>
                    <p className="mb-0 fw-medium text-dark-gray">Designer</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-6">
        <div className="bg-success rounded-5">
          <div className="row row-cols-1 row-cols-xl-2 justify-content-between px-6">
            <div className="pl-6 text-center text-xl-start">
              <h3 className="text-white fs-2 my-6  lh-base">Join 100 Compannies who boost their business with
                Product</h3>
              <a href="#" className="btn btn-success bg-white text-success fw-semibold fs-20 px-6 py-2 rounded-3">Get
                This</a>
            </div>
            <div className="mt-4 mb-5 d-flex justify-content-center px-3 px-xl-0">
              <img src={BottomBg} alt="" className="width"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Reviews;