import React, { useEffect } from "react";

import "./pdf-preview.scss";

import Table from "../../../assets/images/Table";
import qrBorder from "../../../assets/images/VerticalQrBorder.png";

function PDFPreview({ image, qr, merchantName, gotDataUrl }) {
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
