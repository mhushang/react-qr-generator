import React, { useEffect } from "react";

import "./pdf-preview.scss";

import axios from "axios";

import Table from "../../../assets/images/Table";
import qrBorder from "../../../assets/images/VerticalQrBorder.png";
import QRCode from "qrcode.react";

function PDFPreview({ image, qr, merchantName, gotDataUrl }) {
  useEffect(() => {
    gotDataUrl(qr);
  }, [image, qr]);

  return (
    <div className="PDFPreview">
      <div className="preview">
        <div>
          {image.length ? (
            <div className="merchant">
              <img src={image} alt="merchant logo" className="merchant-logo" />
            </div>
          ) : null}
          <div className="qr">
            <div className="qr-image">
              {qr && qr.length ? (
                <img src={qr} alt="qr" id="qr-image" className="gr" />
              ) : null}
            </div>

            <img src={qrBorder} alt="qr-border" className="qr-border" />
          </div>
          <div className="merchant-name">
            <svg xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="147" fill="white">
                {merchantName}
              </text>
            </svg>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default PDFPreview;
