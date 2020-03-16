import React, { useState } from "react";
import "./App.scss";

import logo from "./shared/assets/images/logo.svg";

import option1 from "./shared/assets/images/sada-1.svg";
import option3 from "./shared/assets/images/sada-3.svg";
import option4 from "./shared/assets/images/sada-4.svg";

import option5 from "./shared/assets/images/sada-5.svg";
import option6 from "./shared/assets/images/sada-6.svg";

import Form from "./components/Form/Form";

function App() {
  const [activeTable, setActiveTable] = useState(6);

  function toggleActiveTable(index) {
    setActiveTable(index);
  }

  return (
    <div className="App">
      {/**Navbar */}
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </nav>
      {/**Body */}
      <div className="body-wrapper container">
        <div className="row">
          {/**Title */}
          <div className="col-12">
            <div className="title-h1">Генератори маводҳои чопӣ</div>
          </div>
          {/**Options */}
          <div className="col-12">
            {/**Options title */}
            <div className="title-h6">Намуди маводро интихоб намоед</div>
            <div className="row options-wrapper">
              {/**Options */}
              <div className="col-md-3 col-lg-2">
                <div
                  onClick={() => toggleActiveTable(4)}
                  className={
                    activeTable === 4 ? "card-option active" : "card-option"
                  }
                >
                  <div className="img-block">
                    <img className="" src={option1} alt="option" />
                  </div>
                  <div className="card-description">Табличка A6</div>
                </div>
              </div>

              <div className="col-md-3 col-lg-2">
                <div
                  onClick={() => toggleActiveTable(2)}
                  className={
                    activeTable === 2 ? "card-option active" : "card-option"
                  }
                >
                  <div className="img-block">
                    <img className="" src={option3} alt="option" />
                  </div>
                  <div className="card-description">Табличка A5</div>
                </div>
              </div>

              <div className="col-md-3 col-lg-2">
                <div
                  onClick={() => toggleActiveTable(3)}
                  className={
                    activeTable === 3 ? "card-option active" : "card-option"
                  }
                >
                  <div className="img-block">
                    <img className="" src={option3} alt="option" />
                  </div>
                  <div className="card-description">Табличка счетница А7</div>
                </div>
              </div>

              <div className="col-md-3 col-lg-2">
                <div
                  onClick={() => toggleActiveTable(5)}
                  className={
                    activeTable === 5 ? "card-option active" : "card-option"
                  }
                >
                  <div className="img-block">
                    <img src={option4} alt="option" />
                  </div>
                  <div className="card-description">Олуча Такси 70х120мм</div>
                </div>
              </div>

              <div className="col-md-3 col-lg-2">
                <div
                  onClick={() => toggleActiveTable(1)}
                  className={
                    activeTable === 1 ? "card-option active" : "card-option"
                  }
                >
                  <div className="img-block">
                    <img className="" src={option5} alt="option" />
                  </div>
                  <div className="card-description">Табличкаи нав 198х99мм</div>
                </div>
              </div>

              <div className="col-md-3 col-lg-2">
                <div
                  onClick={() => toggleActiveTable(6)}
                  className={
                    activeTable === 6 ? "card-option active" : "card-option"
                  }
                >
                  <div className="img-block">
                    <img src={option6} alt="option" />
                  </div>
                  <div className="card-description">Наклейка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Form tableId={activeTable} />
      </div>
    </div>
  );
}

export default App;
