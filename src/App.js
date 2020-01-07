import React from 'react';
import './App.scss';

import logo from './shared/assets/images/logo.svg';
import option1 from './shared/assets/images/sada-1.svg';
import option2 from './shared/assets/images/sada-2.svg';
import option3 from './shared/assets/images/sada-3.svg';
import option4 from './shared/assets/images/sada-4.svg';
import option5 from './shared/assets/images/sada-5.svg';

function App() {
  return (
    <div className="App">
      {/**Navbar */}
      <nav class="navbar navbar-light">
        <div className="container">
          <a class="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
        </div>
      </nav>
      {/**Body */}
      <div className="body-wrapper container">
        <div className="row">
          {/**Title */}
          <div className="col-12">
            <div className="title-h1">Генератори QR табличкаҳо</div>
          </div>
          {/**Options */}
          <div className="col-12">
            {/**Options title */}
            <div className="title-h6">Намуди табличкаҳоро интихоб кунед</div>
            <div className="row options-wrapper">
              {/**Options */}
              <div className="col-md-3 col-lg-2">
                <div className="card-option">
                  <div className="img-block">
                    <img className="" src={option1} alt="option" />
                  </div>
                  <div className="card-description">Табличкаи нав 198х99мм</div>
                </div>
              </div>
              <div className="col-md-3 col-lg-2">
                <div className="card-option">
                  <div className="img-block">
                    <img className="" src={option2} alt="option" />
                  </div>
                  <div className="card-description">Табличка вертикалӣ</div>
                </div>
              </div>
              <div className="col-md-3 col-lg-2">
                <div className="card-option">
                  <div className="img-block">
                    <img className="" src={option3} alt="option" />
                  </div>
                  <div className="card-description">Табличка бо инструкция</div>
                </div>
              </div>
              <div className="col-md-3 col-lg-2">
                <div className="card-option">
                  <div className="img-block">
                    <img className="" src={option4} alt="option" />
                  </div>
                  <div className="card-description">Табличка бо QR ва корт</div>
                </div>
              </div>
              <div className="col-md-3 col-lg-2">
                <div className="card-option">
                  <div className="img-block">
                    <img src={option5} alt="option" />
                  </div>
                  <div className="card-description">Олуча Такси 70х120мм</div>
                </div>
              </div>
              <div className="col-md-3 col-lg-2">
                <div className="card-option disabled">
                  Агар дигар намуди табличка лозим бошад ба <span className="fw-bold">@alifmarketing</span> муроҷиат кунед.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
