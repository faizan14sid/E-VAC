import React from "react";
import "./About.css";
import slide1 from "../images/slide-2.png";

const fillerStyle = {
  background: "#d6ecf3",

};

const About = () => {
  return (
    <div id="about" style={fillerStyle}>
      <div className="container-r">
        <div className="row">
          <div className="col-xs-12 col-md-5">
            <img
              src={slide1}
              className="img-responsive"
              height="600px"
              alt=""
            />
          </div>
          <div className="col-xs-12 col-md-5">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                {" "}
                E-VAC is a platform where user can book a emergency ambulance/
                evacuation depending on the request or the nature of the
                emergency. Statistics suggest that India has most emergency for
                accident, pregnancy, heart attacks which amounts up to 75-80% of
                the emergency and this platform will provide one stop solution
                to all of these also it will have an air evacuation available in
                case of dire consequences.
              </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Patients can now book an ambulance for an emergency</li>
                    <li>You can get the nearest available ambulance.</li>
                    <li>Instantly get the information and contact details of the driver.</li>


                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Our App provides benefits to ambulance owners like :Receive instant requests for ambulance bookings</li>
                    <li>User have the option to pay later</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;