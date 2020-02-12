import React, { useEffect } from "react";

import "./pdf-vertical-preview.scss";
import VerticalTable from "../../../assets/images/VerticalTable.png";
import olucha from "../../../assets/images/Olucha.png";
import alifLogo from "../../../assets/images/alifLogo.png";

import VerticalTableWithCard from "../../../assets/images/VerticalTableWithCard.png";
import TableCounter from "../../../assets/images/TableCounter.png";
// import VerticalTableWIthInstruction from "../../../assets/images/VerticalTableWIthInstruction.png";

import qrBorder from "../../../assets/images/VerticalQrBorder.png";
import QRCode from "qrcode.react";

function PDFVerticalPreview({ tableId, qr, image, merchantName, gotDataUrl }) {
  useEffect(() => {
    function getBase64Image(imgUrl, callback) {
      var img = new Image();

      // onload fires when the image is fully loadded, and has width and height

      img.onload = function() {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/jpeg"),
          dataURL = dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");

        callback(dataURL); // the base64 string
      };

      // set attributes and src
      img.setAttribute("crossOrigin", "anonymous"); //
      img.src = imgUrl;
    }

    getBase64Image(qr, base64image => {
      gotDataUrl("data:image/jpeg;base64," + base64image);
    });
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
            // <div className="d-flex justify-content-center">
            //   <img
            //     src={qrBorder}
            //     alt="qr-border"
            //     className="qr-border instruction"
            //   />
            //   <div className="qr-border qr-3 ">
            //     {qr && qr.length ? (
            //       <img
            //         src={qr}
            //         alt="qr"
            //         style={{
            //           width: "108px",
            //           marginLeft: "0.4px",
            //           borderRadius: "12px"
            //         }}
            //       />
            //     ) : null}
            //   </div>
            //   <div className="merchant-name-3 merchantName">
            //     <svg xmlns="http://www.w3.org/2000/svg">
            //       <text x="0" y="147" fill="white">
            //         {merchantName}
            //       </text>
            //     </svg>
            //   </div>
            //   <img
            //     src={VerticalTableWIthInstruction}
            //     alt="table"
            //     className="vertical-preview-image"
            //   />
            // </div>

            <div className="d-flex justify-content-center">
              {image && image.length > 1 ? (
                <div className="merchant-logo">
                  <img src={image} alt="logo" className="merchant-logo-img" />
                </div>
              ) : null}
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
                      width: "130px",
                      marginLeft: "-5px",
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
                src={TableCounter}
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
