import React, { useEffect } from "react";

import "./pdf-vertical-preview.scss";
import VerticalTable from "../../../assets/images/VerticalTable.png";
import olucha from "../../../assets/images/Olucha.png";
import alifLogo from "../../../assets/images/alifLogo.png";

import VerticalTableWithCard from "../../../assets/images/VerticalTableWithCard.png";
import VerticalTableWIthInstruction from "../../../assets/images/VerticalTableWIthInstruction.png";

import qrBorder from "../../../assets/images/VerticalQrBorder.png";
import QRCode from "qrcode.react";

function PDFVerticalPreview({ tableId, qr, merchantName }) {
  useEffect(() => {}, [qr]);
  return (
    <div className="PDFVerticalPreview">
      <div className="row">
        <div className="col">
          {tableId === 2 ? (
            <div>
              <img src={qrBorder} alt="qr-border" className="qr-border" />
              <div className="qr-border qr-1">
                <QRCode value={qr} size={104} />
              </div>
              <div className="merchant-name">{merchantName}</div>
              <img
                src={VerticalTable}
                alt="table"
                className="vertical-preview-image"
              />
            </div>
          ) : null}
          {tableId === 4 ? (
            <div>
              <img
                src={qrBorder}
                alt="qr-border"
                className="qr-border qr-card"
              />
              <div className="qr-border qr-2">
                <QRCode value={qr} size={104} />
              </div>
              <div className="merchant-name">{merchantName}</div>

              <img
                src={VerticalTableWithCard}
                alt="table"
                className="vertical-preview-image"
              />
            </div>
          ) : null}
          {tableId === 3 ? (
            <div>
              <img
                src={qrBorder}
                alt="qr-border"
                className="qr-border instruction"
              />
              <div className="qr-border qr-3">
                <QRCode value={qr} size={86} />
              </div>
              <div className="merchant-name-3">{merchantName}</div>
              <img
                src={VerticalTableWIthInstruction}
                alt="table"
                className="vertical-preview-image"
              />
            </div>
          ) : null}
          {tableId === 5 ? (
            <div>
              <img
                src={alifLogo}
                alt="alif-logo"
                className="alif-logo instruction"
              />
              <div>
                <QRCode value={qr} className="olucha-qr" />
              </div>
              <div className="olucha-merchant-name">{merchantName}</div>
              <img src={olucha} alt="olucha" className="olucha" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PDFVerticalPreview;
