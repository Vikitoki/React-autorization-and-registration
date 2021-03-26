import React from "react";

import "./Main-form.scss";
import "../../styles/common/common.scss";

function MainForm() {
  return (
    <div className="main-form">
      <form action="#" class="main-form__body form">
        <div class="form__content">
          <div class="form__item">
            <label class="form__label" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" class="form__input"></input>
          </div>
          <div class="form__item">
            <label class="form__label" htmlFor="password">
              Password
            </label>
            <input type="password" id="password" class="form__input"></input>
          </div>
          <div class="form__item">
            <label class="form__label" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              class="form__input"
            ></input>
          </div>
        </div>
        <div class="form__btn">
          <button type="submit" className="btn btn_form">
            Sign up
          </button>
        </div>
        <div className="form__actions">
          Already have an account?{" "}
          <a href="#" className="form__link">
            Sign-up!
          </a>
        </div>
      </form>
    </div>
  );
}

export default MainForm;
