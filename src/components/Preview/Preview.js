import React from "react";

import "./preview.scss";
import PDFPreview from "./PDFPreview/PDFPreview";
import PDFVerticalPreview from "./PDFVerticalPreview/PDFVerticalPreview";

function Preview({ image, tableId, qr, merchantName, gotDataUrlParent }) {
  function gotDataUrl(event) {
    gotDataUrlParent(event);
  }
  return (
    <div className="Preview">
      <div className="row">
        <div className="col">
          <div className="preview-wrapper">
            <div className="preview-title">Намуди пешакӣ</div>

            {tableId === 1 ? (
              <PDFPreview
                image={image}
                qr={qr}
                merchantName={merchantName}
                gotDataUrl={e => gotDataUrl(e)}
              />
            ) : (
              <PDFVerticalPreview
                image={image}
                tableId={tableId}
                qr={qr}
                merchantName={merchantName}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
