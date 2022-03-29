import "./Location.css";
import Maps from "../Maps/Maps";
const Location = () => {
  return (
    <section className="p-5 background" id="Lorem_Ipsum">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4 text_color">יצירת קשר</h2>
            <ul className="list-group list-group-flush lead contact_list">
              <li className="list-group-item background">
                <span className="fw-bold">טלפון:&nbsp;</span>
                <span className="text_color">הרב אליקים 052-481-7981</span>
              </li>
              <li className="list-group-item background">
                <span className="fw-bold">מייל:&nbsp;</span>
                <span className="text_color">elyakim1230@walla.co.il</span>
              </li>
            </ul>
          </div>
          {/* <Maps /> */}
        </div>
      </div>
    </section>
  );
};

export default Location;
