import React, { useEffect } from "react";

import "./pdf-preview.scss";

import LogoMerchant from "../../../assets/images/logo-merchant.png";

import Table from "../../../assets/images/Table";
import qrBorder from "../../../assets/images/VerticalQrBorder.png";
import QRCode from "qrcode.react";

function PDFPreview({ image, qr, merchantName, gotDataUrl }) {
  useEffect(() => {}, [image, qr]);

  useEffect(() => {
    var canvas = document.getElementsByTagName("canvas");
    var dataURL = canvas[0].toDataURL("image/jpeg", 1.0);
    gotDataUrl(dataURL);
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
              <QRCode value={qr} size={120} />
            </div>

            <img src={qrBorder} alt="qr-border" className="qr-border" />
          </div>
          <div className="merchant-name">{merchantName}</div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default PDFPreview;
