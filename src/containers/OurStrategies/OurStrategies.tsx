import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";
import Img4 from "../../assets/img4.jpg";

const OurStrategies = () => {
  return (
    <div className="container mb-6">
      <div className="row">
        <h2 className="display-8 fw-bold mb-4">Contents Strategies</h2>
        <p className="fw-medium lh-base mb-6">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.{" "}
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 mb-7">
        <div className="col">
          <div className="card h-100 rounded-3">
            <img src={Img1} className="card-img-top rounded-top-3" alt="" />
            <div className="card-body">
              <p className="card-text mt-2 mb-2 pb-1">
                By <span className="fw-bold">Wahid Ari</span> | 03 March 2019
              </p>
              <h5 className="card-title fw-bold fs-4 pe-4 lh-base">
                Increasing Prosperity With Positive Thinking
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 rounded-3">
            <img src={Img2} className="card-img-top rounded-top-3" alt="" />
            <div className="card-body">
              <p className="card-text mt-2 mb-2 pb-1">
                By <span className="fw-bold">Wahid Ari</span> | 03 March 2019
              </p>
              <h5 className="card-title fw-bold fs-4 pe-3 lh-base">
                Motivation Is The First Step To Success
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 rounded-3">
            <img src={Img3} className="card-img-top rounded-top-3" alt="" />
            <div className="card-body">
              <p className="card-text mt-2 mb-2 pb-1">
                By <span className="fw-bold">Wahid Ari</span> | 03 March 2019
              </p>
              <h5 className="card-title fw-bold fs-4 lh-base">
                Success Steps For Your Personal{" "}
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 rounded-3">
            <img src={Img4} className="card-img-top rounded-top-3" alt="" />
            <div className="card-body">
              <p className="card-text mt-2 mb-2 pb-1">
                By <span className="fw-bold">Wahid Ari</span> | 03 March 2019
              </p>
              <h5 className="card-title fw-bold fs-4 lh-base">
                Success Steps For Your Personal Or Business
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStrategies;
