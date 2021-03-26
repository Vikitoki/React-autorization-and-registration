import React from "react";
import MainForm from "../../components/Main-form/Main-form";

import "./Main.scss";

function Main() {
  return (
    <div>
      <div className="main-page">
        <div className="main-page__container container">
          <div className="main-page__content">
            <MainForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
