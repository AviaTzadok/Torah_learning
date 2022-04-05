import "./Cards.css";
const Cards = () => {
  return (
    <section id="instructors" className="p-5 img_background">
      <div className="container">
        <h2 className="text-center text-white card-text">
          רבנים המלווים את אברכי הכולל
        </h2>
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
                  מרא דאתרא הרב דוד לוי שליט"א רב הישוב אבני חפץ{" "}
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
                <h3 className="card-title mb-3">הרב אליקים בן שלמה</h3>
                <p className="card-text">הרב אליקים בן שלמה ראש הכולל </p>
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
                <h3 className="card-title mb-3">הרב הדיין אברהם פורטל</h3>
                <p className="card-text">מגיד שיעור שבועי</p>
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
                <h3 className="card-title mb-3">הרב דניאל כהן</h3>
                <p className="card-text">מגיד שיעור דף יומי</p>
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
                <h3 className="card-title mb-3">הרב אלירן אבודרהם</h3>
                <p className="card-text">מגיד שיעור צורבא </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="images/Rabbis/Uriel.jpg"
                  className="rounded-circle mb-3 w-50"
                  alt=""
                />
                <h3 className="card-title mb-3">הרב אוריאל בן אבו</h3>
                <p className="card-text">מגיד שיעור שבועי </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
