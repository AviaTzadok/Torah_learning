import "./Location.css";
import Maps from "../Maps/Maps";
const Location = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">יצירת קשר</h2>
            <ul className="list-group list-group-flush lead contact_list">
              <li className="list-group-item">
                <span className="fw-bold">טלפון:&nbsp;</span>
                הרב אליקים 052-481-7981
              </li>
              <li className="list-group-item">
                <span className="fw-bold">מייל:&nbsp;</span>
                elyakim1230@walla.co.il
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
