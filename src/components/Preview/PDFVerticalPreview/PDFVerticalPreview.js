import React, { useEffect } from "react";

import "./pdf-vertical-preview.scss";
import VerticalTable from "../../../assets/images/VerticalTable.png";
import olucha from "../../../assets/images/Olucha.png";
import alifLogo from "../../../assets/images/alifLogo.png";

import VerticalTableWithCard from "../../../assets/images/VerticalTableWithCard.png";
import VerticalTableWIthInstruction from "../../../assets/images/VerticalTableWIthInstruction.png";

import qrBorder from "../../../assets/images/VerticalQrBorder.png";
import QRCode from "qrcode.react";

function PDFVerticalPreview({ tableId, qr, merchantName, gotDataUrl }) {
  useEffect(() => {}, [qr]);

  useEffect(() => {
    gotDataUrl(qr);
  }, [qr, tableId]);

  return (
    <div className="PDFVerticalPreview">
      <div className="row">
        <div className="col">
          {tableId === 2 ? (
            <div className="d-flex justify-content-center">
              <img src={qrBorder} alt="qr-border" className="qr-border" />
              <div className="qr-border qr-1 ">
                {qr && qr.length ? (
                  <img
                    src={qr}
                    alt="qr"
                    style={{
                      width: "132px",
                      marginLeft: "-5.4px"
                    }}
                  />
                ) : null}
              </div>
              <div className="merchant-name merchantName">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="147" fill="white">
                    {merchantName}
                  </text>
                </svg>
              </div>
              <img
                src={VerticalTable}
                alt="table"
                className="vertical-preview-image"
              />
            </div>
          ) : null}
          {tableId === 4 ? (
            <div className="d-flex justify-content-center">
              <img
                src={qrBorder}
                alt="qr-border"
                className="qr-border qr-card"
              />
              <div className="qr-border qr-2 ">
                {qr && qr.length ? (
                  <img
                    src={qr}
                    alt="qr"
                    style={{
                      width: "140px",
                      marginLeft: "-8px",
                      borderRadius: "12px"
                    }}
                  />
                ) : null}
              </div>
              <div className="merchant-name merchantName">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="147" fill="white">
                    {merchantName}
                  </text>
                </svg>
              </div>

              <img
                src={VerticalTableWithCard}
                alt="table"
                className="vertical-preview-image"
              />
            </div>
          ) : null}
          {tableId === 3 ? (
            <div className="d-flex justify-content-center">
              <img
                src={qrBorder}
                alt="qr-border"
                className="qr-border instruction"
              />
              <div className="qr-border qr-3 ">
                {qr && qr.length ? (
                  <img
                    src={qr}
                    alt="qr"
                    style={{
                      width: "108px",
                      marginLeft: "0.4px",
                      borderRadius: "12px"
                    }}
                  />
                ) : null}
              </div>
              <div className="merchant-name-3 merchantName">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="147" fill="white">
                    {merchantName}
                  </text>
                </svg>
              </div>
              <img
                src={VerticalTableWIthInstruction}
                alt="table"
                className="vertical-preview-image"
              />
            </div>
          ) : null}
          {tableId === 5 ? (
            <div className="d-flex justify-content-center">
              <img
                src={alifLogo}
                alt="alif-logo"
                className="alif-logo instruction"
              />
              <div className="">
                {qr && qr.length ? (
                  <img src={qr} alt="qr" className="olucha-qr" />
                ) : null}
              </div>
              <div className="olucha-merchant-name merchantName">
                {merchantName}
              </div>
              <img src={olucha} alt="olucha" className="olucha" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PDFVerticalPreview;
