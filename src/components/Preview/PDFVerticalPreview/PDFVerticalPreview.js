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
    var qrBlock = document.getElementsByClassName("svg-block");
    var qrSvg = qrBlock[0].children[0];

    var svg = new XMLSerializer().serializeToString(qrSvg);

    function svgString2Image(svgString, width, height, format, callback) {
      // set default for format parameter
      format = format ? format : "png";
      // SVG data URL from SVG string
      var svgData =
        "data:image/svg+xml;base64," +
        btoa(unescape(encodeURIComponent(svgString)));
      // create canvas in memory(not in DOM)
      var canvas = document.createElement("canvas");
      // get canvas context for drawing on canvas
      var context = canvas.getContext("2d");
      // set canvas size
      canvas.width = width;
      canvas.height = height;
      // create image in memory(not in DOM)
      var image = new Image();
      // later when image loads run this
      image.onload = function() {
        // async (happens later)
        // clear canvas
        context.clearRect(0, 0, width, height);
        // draw image with SVG data to canvas
        context.drawImage(image, 0, 0, width, height);
        // snapshot canvas as png
        var pngData = canvas.toDataURL("image/" + format);
        // pass png data URL to callback
        callback(pngData);
      }; // end async
      // start loading SVG data into in memory image
      image.src = svgData;
    }

    // call svgString2Image function
    svgString2Image(svg, 800, 600, "png", function(pngData) {
      gotDataUrl(pngData);
    });
  }, [qr, tableId]);
  return (
    <div className="PDFVerticalPreview">
      <div className="row">
        <div className="col">
          {tableId === 2 ? (
            <div className="d-flex justify-content-center">
              <img src={qrBorder} alt="qr-border" className="qr-border" />
              <div className="qr-border qr-1 svg-block">
                <QRCode
                  value={qr}
                  size={104}
                  level={"H"}
                  includeMargin={false}
                  renderAs={"svg"}
                />
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
              <div className="qr-border qr-2 svg-block">
                <QRCode
                  value={qr}
                  size={110}
                  level={"H"}
                  includeMargin={false}
                  renderAs={"svg"}
                />
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
              <div className="qr-border qr-3 svg-block">
                <QRCode
                  value={qr}
                  size={86}
                  level={"H"}
                  includeMargin={false}
                  renderAs={"svg"}
                />
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
              <div className="svg-block">
                <QRCode
                  value={qr}
                  level={"H"}
                  includeMargin={false}
                  renderAs={"svg"}
                  className="olucha-qr"
                />
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
