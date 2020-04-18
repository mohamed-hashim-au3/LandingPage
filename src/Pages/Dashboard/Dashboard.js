import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SideNav from "../../components/SideNav/SideNav";
import { ReactComponent as Search } from "../../assets/search.svg";

import { ReactComponent as Cross } from "../../assets/red-cross.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as Question } from "../../assets/question.svg";
import { ReactComponent as Heart1 } from "../../assets/heart2.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
// import { useMediaQuery } from "react-responsive";

const Dashboard = () => {
  // const isMobile = useMediaQuery({
  //     query: "(max-device-width: 700px)"
  //   });
  return (
    <>
      <main role="main" className="main-wrapper">
        <div className="sidenav-wrapper">
          <section className="sidenav-container">
            <SideNav />
          </section>
        </div>
        <div className="maincontent-wrapper">
          <div className="fixed-div">
            <section className="searchbar-wrapper">
              <div className="searchbar-container">
                <div className="searchbar-icon mr-2">
                  <Search />
                </div>
                <div className="searchbar-input">
                  <input type="text" placeholder="Search for symptoms.." />
                </div>
              </div>
              {/* visible only on mobile deivices  */}
              <div className="brand-sm-wrapper">
                <div className="brand-sm-icon">
                  <Cross />
                </div>
                <div className="brand-sm-info">Medi</div>
              </div>
              {/* //ends here */}
              <div className="user-icon">
                <FontAwesomeIcon icon={faUser} size="1x" />
              </div>
            </section>
            <section className="info-section-container"></section>
          </div>
        </div>

        {/* //visible only on mobile deivices */}
        <div className="sidenav-sm-container">
          <div style={{ width: "30px", height: "30px" }}>
            <Home />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Settings />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Question />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Heart1 />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Mail />
          </div>
        </div>
        {/* //ends here */}
      </main>
    </>
  );
};

export default Dashboard;
