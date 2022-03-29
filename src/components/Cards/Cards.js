import "./Cards.css";
const Cards = () => {
  return (
    <section id="instructors" className="p-5 img_background">
      <div className="container">
        <h2 className="text-center text-white card-text">רבני הכולל</h2>
        <p className="lead text-center text-white mb-5 card-text">
          רבני הכולל הצדיקים ילוו אתכם בכל יום
        </p>
        <div className="row g-4 col">
          <div className="col-md-6 col-lg-3 ">
            <div className="card bg-light ">
              <div className="card-body text-center img_david">
                <img
                  src="images/Rabbis/david.jpg"
                  className="rounded-circle mb-0 w-50"
                  alt=""
                />
                <h3 className="card-title mb-3">הרב דוד לוי</h3>
                <p className="card-text">
                  הרב דוד לוי רב הישוב כבר מעל 20 שנה{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="images/Rabbis/Elyakim.jpg"
                  className="rounded-circle mb-3 w-50"
                  alt=""
                />
                <h3 className="card-title mb-3">הרב אליקים</h3>
                <p className="card-text">הרב אליקים ראש הכולל </p>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="images/Rabbis/Portal.jpg"
                  className="rounded-circle mb-3 w-50"
                  alt=""
                />
                <h3 className="card-title mb-3">הרב פורטל</h3>
                <p className="card-text">הרב פורטל </p>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="images/Rabbis/tzadik.jpg"
                  className="rounded-circle mb-3 w-50"
                  alt=""
                />
                <h3 className="card-title mb-3"> הרב כהן</h3>
                <p className="card-text">הרב הצדיק </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="images/Rabbis/Eliran.jpg"
                  className="rounded-circle mb-3 w-50"
                  alt=""
                />
                <h3 className="card-title mb-3">הרב אלירן</h3>
                <p className="card-text">הרב אלירן </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
