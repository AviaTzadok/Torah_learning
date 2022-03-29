import { useState, useEffect } from "react";
import "./Showcase.css";
const Showcase = () => {
  return (
    // <div>
    <section className=" text-light p-5 text-center text-sm-start img_background">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between title">
          {/* <img
            className="img-fluid w-20 d-none d-sm-block"
            src="images/Sefer_Torah.jpg"
            alt=""
          /> */}
          <div>
            <h1>
              {" "}
              <span className="text-warning">כולל הלכה תורת חפץ</span>
              <span className="title lead my-4 ">
                <br />
                הוקם בישוב אבני חפץ לפני שבע שנים
                <br />
                האברכים לומדים בכולל עם ליווי אישי ובאוירה נעימה
                <br />
                הכולל זכה להוציא מתוכו רבנים מוסמכים
              </span>
            </h1>
            {/* <button className="btn btn-primary btn-lg">צור קשר</button> */}
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
};

export default Showcase;
