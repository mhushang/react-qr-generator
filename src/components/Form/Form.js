import React, { useState, useRef, useEffect } from "react";
import "./form.scss";

import PDFDocument from "../PDFDocument/PDFDocument";

import Input from "./../../shared/components/Input/Input";
import Button from "./../../shared/components/Button/Button";

import Checkbox from "./../../shared/components/Checkbox/Checkbox";
import Trash from "../../assets/images/Trash";
import ErrorIcon from "./../../assets/images/ErrorIcon";

import Preview from "../Preview/Preview";
import { PDFDownloadLink } from "@react-pdf/renderer";

function Form({ tableId }) {
  const [merchantName, setMerchantName] = useState("");
  const [qrLink, setQrLink] = useState("");

  const [isOnBlured, setIsOnBlured] = useState(true);
  let [isValidName, setIsValidName] = useState(true);
  let [isValidURL, setIsValidURL] = useState(true);
  const [isMerchantLogoValid, setIsMerchantLogoValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  let [preview, setPreview] = useState([]);
  const inputFile = useRef("");
  let [fileInput, setFileInput] = useState("");
  let [checkbox, setCheckbox] = useState(false);
  const [activeClass, setActiveClass] = useState(1);
  const [qrImage, setQrImage] = useState("");

  useEffect(() => {
    if (isOnBlured === true) {
      setIsOnBlured(false);
    }
  }, [tableId]);

  function urlValidator(url) {
    let expression = /^(https:\/\/api.alif.mobi\/api\/mobi\/v0\/external\/qr\/)\S*/;
    let regex = new RegExp(expression);
    if (url.match(regex) !== null) {
      return true;
    } else {
      return false;
    }
  }

  function formValidator() {
    if (preview.length) {
      setIsMerchantLogoValid(true);
    } else {
      setIsMerchantLogoValid(false);
    }

    if (
      (isValidName && isValidURL) ||
      (tableId === 3 && isValidName && isValidURL && isMerchantLogoValid)
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }

  function gotDataUrlParent(event) {
    setQrImage(event);
  }

  function merchantNameHandler(name) {
    setIsOnBlured(false);
    if (name && name.length > 2) {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }
    setMerchantName(name);
  }

  function qrLinkHandler(event) {
    setIsOnBlured(false);
    setQrLink(event);
    if (urlValidator(event)) {
      setIsValidURL(true);
    } else {
      setIsValidURL(false);
    }
  }

  function changeCheckboxHandler() {
    setCheckbox((checkbox = !checkbox));
    // setCheckbox(true);
  }

  function fileInputChange(event) {
    if (inputFile.current.files.length > 0 && inputFile.current.files[0].name) {
      const file = inputFile.current.files[0];
      var reader = new FileReader();

      reader.onloadend = function() {
        setPreview(reader.result);
        if (reader.result) {
          setIsMerchantLogoValid(true);
        } else {
          setIsMerchantLogoValid(false);
        }
      };
      if (file) {
        reader.readAsDataURL(file);
      }
      setFileInput(inputFile.current.files[0].name);
    }
  }

  function clearInput() {
    setFileInput("");
    setPreview([]);
    setIsMerchantLogoValid(false);
  }

  function activePreview(index) {
    setActiveClass(index);
  }

  function handleBlur() {
    if (merchantName && merchantName.length > 2) {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }

    if (isValidURL && qrLink.length) {
      setIsValidURL(true);
    } else {
      setIsValidURL(false);
    }
    formValidator();

    if (isFormValid) {
      setIsOnBlured(true);
    } else {
      setIsOnBlured(false);
    }
  }

  return (
    <div className="Form">
      <div className="row">
        <div className="col-lg-6">
          {tableId === 2 || tableId === 4 ? (
            <div className="pdf-preview-size">
              <div className="preview-size-text">Андозаро интихоб кунед</div>
              <div className="preview-size-block">
                <div
                  className={
                    activeClass === 1
                      ? "preview-size-block-item active"
                      : "preview-size-block-item"
                  }
                  onClick={() => activePreview(1)}
                >
                  A4
                </div>
                <div
                  className={
                    activeClass === 2
                      ? "preview-size-block-item active"
                      : "preview-size-block-item"
                  }
                  onClick={() => activePreview(2)}
                >
                  A5
                </div>
                <div
                  className={
                    activeClass === 3
                      ? "preview-size-block-item active"
                      : "preview-size-block-item"
                  }
                  onClick={() => activePreview(3)}
                >
                  A6
                </div>
              </div>
            </div>
          ) : null}
          <form>
            <div className={tableId === 5 ? "form-area mb-5" : "form-area"}>
              <Input
                value={merchantName}
                placeholder={"Абдуллоев Абдулло"}
                className={"form-control border-0"}
                maxLength={20}
                validate={isValidName}
                errorText={"Ном наметавонад аз 3 харф кам шавад"}
                type={"text"}
                onInputBlur={event => handleBlur(event.target.value)}
                spanText={
                  tableId === 5
                    ? "Номи ронанда"
                    : "Номи мерчант (на зиёда аз 20 ҳарф)"
                }
                change={event => merchantNameHandler(event.target.value)}
              />
              <Input
                value={qrLink}
                placeholder={"Абдуллоев Абдулло"}
                className={"form-control border-0"}
                maxLength={256}
                validate={isValidURL}
                errorText={"Ссылка хато аст"}
                type={"text"}
                onInputBlur={event => handleBlur(event.target.value)}
                spanText={"Ссылкаи QR code"}
                change={event => qrLinkHandler(event.target.value)}
              />
            </div>
            {tableId === 1 || tableId === 3 ? (
              <>
                {tableId !== 3 ? (
                  <div
                    className={
                      checkbox
                        ? "custom-control custom-checkbox mb-4"
                        : "custom-control custom-checkbox"
                    }
                  >
                    <Checkbox
                      className={"custom-control-input"}
                      id={"autoSizingCheck"}
                      checked={checkbox}
                      change={changeCheckboxHandler}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="autoSizingCheck"
                    >
                      <span className="checkbox-text">Бо логотип</span>
                    </label>
                  </div>
                ) : null}
                {checkbox || tableId === 3 ? (
                  <div className="form-group file-form">
                    <label className="btn-upload">
                      <input
                        type="file"
                        name="fileupload"
                        ref={inputFile}
                        onChange={fileInputChange}
                        accept="image/*"
                      />
                      <button
                        className={
                          isMerchantLogoValid ? "btn" : "btn btn-danger"
                        }
                      >
                        Ворид кардан
                      </button>
                    </label>
                    {fileInput && fileInput.length ? (
                      <>
                        <input
                          type="text"
                          className="form-control custom-input "
                          onChange={fileInputChange}
                          value={fileInput}
                        />
                        <span className="trash" onClick={clearInput}>
                          <Trash />
                        </span>
                      </>
                    ) : null}
                  </div>
                ) : null}
              </>
            ) : null}
            {tableId === 2 || tableId === 4 ? (
              <div className="error-block">
                <div className="error-icon">
                  <ErrorIcon />
                </div>
                <div className="error-text">
                  Ба ин намуди табличка логотип дохил карда намешавад. Барои
                  дохил кардан ба&nbsp;
                  <a
                    className="bot-name"
                    href="https://t.me/alifmarketbot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @alifmarketing
                  </a>{" "}
                  муроҷиат кунед.
                </div>
              </div>
            ) : null}
            {!isFormValid ||
            !isOnBlured ||
            !qrImage ||
            (tableId === 3 && !isMerchantLogoValid) ? (
              <Button
                type={"button button-success margin-top"}
                label={"Генерировать QR"}
                click={handleBlur}
              />
            ) : null}

            {(tableId !== 3 &&
              isFormValid &&
              isOnBlured &&
              tableId &&
              qrImage &&
              merchantName) ||
            (isFormValid &&
              isOnBlured &&
              tableId &&
              qrImage &&
              merchantName &&
              tableId === 3 &&
              isMerchantLogoValid) ? (
              <PDFDownloadLink
                renderMode={"svg"}
                document={
                  <PDFDocument
                    image={preview}
                    tableId={tableId}
                    qr={qrImage}
                    merchantName={merchantName}
                  />
                }
                fileName={merchantName + ".pdf"}
                style={{
                  fontFamily: "Montserrat-Bold",
                  textDecoration: "none",
                  left: "0px",
                  right: "0px",
                  top: "0px",
                  bottom: "0px",
                  padding: "18px 44px",
                  color: "white",
                  background: "#39B980",
                  borderRadius: "4px"
                }}
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Экспорт PDF"
                }
              </PDFDownloadLink>
            ) : null}
          </form>
        </div>
        <div className="col-lg-6">
          <Preview
            gotDataUrlParent={e => gotDataUrlParent(e)}
            image={preview}
            tableId={tableId}
            qr={qrLink}
            merchantName={merchantName}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
