import React, { useEffect } from "react";

import "./pdf-preview.scss";

import Table from "../../../assets/images/Table";
import qrBorder from "../../../assets/images/VerticalQrBorder.png";
import QRCode from "qrcode.react";

function PDFPreview({ image, qr, merchantName, gotDataUrl }) {
  useEffect(() => {}, [image, qr]);

  useEffect(() => {
    var svg = new XMLSerializer().serializeToString(
      document.getElementsByTagName("svg")[0]
    );

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
  }, [qr]);

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
              <QRCode
                value={qr}
                size={120}
                level={"H"}
                includeMargin={false}
                renderAs={"svg"}
              />
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
