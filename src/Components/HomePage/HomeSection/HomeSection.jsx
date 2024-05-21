import React from "react";
import "./homeSection.css";
import img from "../../../Images/Frame 11992.png";

const HomeSection = () => {
  return (
    <div className="homeSection_main">
      <div className="container section_div">
        <h2>Get started with us in three easy steps.</h2>
        <div className="section_content">

            <div className="left_side_div">
                <img src={img} alt="" />
            </div>
          <div className="right_side_div">
            <div className="right_side_item">
              <div className="number">1</div>
              <div className="text">
                <h4>Book a call</h4>
                <p>Book a call with our global workforce consultants. We’ll set <br/> you up with a free account ready to suit your team’s needs.</p>
              </div>
            </div>
            <div className="right_side_item">
              <div className="number">2</div>
              <div className="text">
                <h4>Add your people</h4>
                <p>From new hires to your existing workforce, onboard effortlessly with our self-serve platform.</p>
              </div>
            </div>
            <div className="right_side_item">
              <div className="number">3</div>
              <div className="text">
                <h4>Dedicated onboarding</h4>
                <p>From navigating local laws to support for your team members, our dedicated team will help you get set up seamlessly.</p>
                <button>Start Now <i className="fa-solid fa-arrow-right-long"></i></button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeSection;
