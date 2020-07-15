import React from "react";
import "./pdf-document.scss";
import font from "./../../shared/assets/fonts/Montserrat-Medium.ttf";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

import qrBorder from "./../../assets/images/VerticalQrBorder.png";

import alifLogo from "./../../assets/images/alifLogo.png";
import olucha from "./../../assets/images/Olucha.png";

import background from "./../../assets/images/Table.png";
import verticalTable from "./../../assets/images/VerticalTable.png";
import TableCounter from "./../../assets/images/TableCounter.png";

import Table_A6 from "./../../assets/images/A6.png";
import Table_A6_1 from "./../../assets/images/A6_1.png";

Font.register({
  family: "Montserrat-Medium",
  src: font,
});

const styles = StyleSheet.create({
  qr: {
    position: "absolute",
    width: 164,
    height: 164,
    marginLeft: 313.5,
    marginTop: 107,
  },
  qrBorder_1: {
    position: "absolute",
    width: 150,
    height: 150,
    marginLeft: 320,
    marginTop: 112,
  },

  qr_11: {
    position: "absolute",
    width: 164,
    height: 164,
    marginLeft: 313.5,
    marginTop: 92,
  },
  qrBorder_11: {
    position: "absolute",
    width: 150,
    height: 150,
    marginLeft: 320,
    marginTop: 98,
  },

  qrBorder_3: {
    position: "absolute",
    width: 100,
    height: 100,
    marginLeft: 58,
    marginTop: 152,
  },

  qrBorder_3NoQrBorder: {
    position: "absolute",
    width: 100,
    height: 100,
    marginLeft: 58,
    marginTop: 136,
  },

  qrBorder_4: {
    position: "absolute",
    width: 200,
    height: 200,
    marginLeft: 50,
    marginTop: 194,
  },

  qrBorder_4_1: {
    position: "absolute",
    width: 200,
    height: 200,
    marginLeft: 50,
    marginTop: 156,
  },
  logoWrapper: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    width: 158,
    marginLeft: 318,
    marginTop: 72,
  },
  logo: {
    position: "absolute",
    maxWidth: 158,
    height: 28,
    maxHeight: 28,
  },

  logoWrapper_a6: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    width: 244,
    marginLeft: 30,
    marginTop: 372,
  },
  logo_a6: {
    position: "absolute",
    maxWidth: 244,
    height: 46,
    maxHeight: 46,
  },

  olucha_qr: {
    position: "absolute",
    width: 134,
    height: 134,
    marginLeft: 38,
    marginTop: 114,
  },
  verticalQrInstruction: {
    position: "absolute",
    width: 110,
    height: 110,
    marginLeft: 53.5,
    marginTop: 147.5,
  },

  verticalQrInstructionNoQr: {
    position: "absolute",
    width: 110,
    height: 110,
    marginLeft: 53.5,
    marginTop: 131.5,
  },

  //2
  logo_wrapper: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    width: 200,
    marginLeft: 122,
    marginTop: 244,
  },
  logo_img: {
    position: "absolute",
    maxWidth: 200,
    height: 50,
    maxHeight: 50,
  },

  qrBorder_2: {
    position: "absolute",
    width: 190,
    height: 190,
    marginLeft: 126,
    marginTop: 310,
  },
  verticalQr: {
    position: "absolute",
    width: 212,
    height: 212,
    marginLeft: 115,
    marginTop: 301,
  },

  verticalQr_22: {
    position: "absolute",
    width: 212,
    height: 212,
    marginLeft: 115,
    marginTop: 281,
  },
  qrBorder_22: {
    position: "absolute",
    width: 190,
    height: 190,
    marginLeft: 126,
    marginTop: 290,
  },

  count_logo_wrapper: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    width: 110,
    marginLeft: 53.5,
    marginTop: 118,
  },
  count_logo_img: {
    position: "absolute",
    maxWidth: 110,
    height: 25,
    maxHeight: 25,
  },

  table_a6_qr: {
    position: "absolute",
    width: 218,
    height: 218,
    marginLeft: 41,
    borderRadius: 12,
    marginTop: 186,
  },

  table_a6_qr_1: {
    position: "absolute",
    width: 218,
    height: 218,
    marginLeft: 42,
    marginTop: 147.5,
  },

  merchantName_1: {
    position: "absolute",
    color: "white",
    fontFamily: "Montserrat-Medium",
    transform: "rotate(-90deg)",
    fontSize: 9,
    height: 200,
    marginLeft: 612,
    marginTop: 170,
    textAlign: "left",
  },
  merchantName_2: {
    position: "absolute",
    color: "white",
    fontFamily: "Montserrat-Medium",
    transform: "rotate(270deg)",
    fontSize: 9,
    height: 200,
    marginLeft: 524,
    marginTop: 482,
    textAlign: "left",
  },
  merchantName_3: {
    position: "absolute",
    color: "white",
    fontFamily: "Montserrat-Medium",
    transform: "rotate(270deg)",
    fontSize: 9,
    height: 200,
    marginLeft: 305,
    marginTop: 190,
    textAlign: "left",
  },
  merchantName_4: {
    position: "absolute",
    color: "white",
    fontFamily: "Montserrat-Medium",
    transform: "rotate(270deg)",
    fontSize: 9,
    height: 200,
    marginLeft: 388,
    marginTop: 300,
    textAlign: "left",
  },
  merchantName_5: {
    position: "absolute",
    color: "white",
    fontFamily: "Montserrat-Medium",
    fontSize: 10,
    width: "100%",
    // marginLeft: 210,
    marginTop: 280,
    textAlign: "center",
  },

  alifLogo: {
    position: "absolute",
    width: 25,
    textAlign: "center",
    marginTop: 164,
    marginLeft: 92,
    zIndex: "4",
  },
});

function PDFDocument({ image, tableId, qr, merchantName }) {
  return (
    <Document style={styles.background}>
      {tableId === 1 ? (
        <Page
          style={styles.preview}
          orientation={"landscape"}
          size={{ width: 292.25, height: 531.5 }}
        >
          <View>
            <Image source={background} style={styles.background}></Image>
            {image.length ? (
              <View style={styles.logoWrapper}>
                <Image source={image} style={styles.logo}></Image>
              </View>
            ) : null}
            {image && image.length ? (
              <>
                <Image source={qr} style={styles.qr} />
                <Image source={qrBorder} style={styles.qrBorder_1}></Image>
              </>
            ) : (
              <>
                <Image source={qr} style={styles.qr_11} />
                <Image source={qrBorder} style={styles.qrBorder_11}></Image>
              </>
            )}
            <Text style={styles.merchantName_1}>{merchantName}</Text>
          </View>
        </Page>
      ) : null}
      {tableId === 2 ? (
        <Page style={styles.preview} size={{ width: 440, height: 620 }}>
          <View>
            <Image source={verticalTable}></Image>
            {image.length ? (
              <View style={styles.logo_wrapper}>
                <Image source={image} style={styles.logo_img} />
              </View>
            ) : null}
            <Image
              source={qr}
              style={
                image && image.length ? styles.verticalQr : styles.verticalQr_22
              }
            />
            <Image
              source={qrBorder}
              style={
                image && image.length ? styles.qrBorder_2 : styles.qrBorder_22
              }
            ></Image>
            <Text style={styles.merchantName_2}>{merchantName}</Text>
          </View>
        </Page>
      ) : null}
      {tableId === 3 ? (
        <Page style={styles.preview} size={{ width: 218.5, height: 310 }}>
          <View>
            <Image source={TableCounter}></Image>
            <View style={styles.count_logo_wrapper}>
              <Image source={image} style={styles.count_logo_img} />
            </View>
            <Image
              source={qr}
              style={
                image && image.length
                  ? styles.verticalQrInstruction
                  : styles.verticalQrInstructionNoQr
              }
            />
            <Image
              source={qrBorder}
              style={
                image && image.length
                  ? styles.qrBorder_3
                  : styles.qrBorder_3NoQrBorder
              }
            ></Image>
            <Text style={styles.merchantName_3}>{merchantName}</Text>
          </View>
        </Page>
      ) : null}
      {tableId === 4 ? (
        <Page style={styles.preview} size={{ width: 301, height: 448.75 }}>
          <View>
            <View>
              <Image
                source={image && image.length ? Table_A6_1 : Table_A6}
              ></Image>
              {image.length ? (
                <View style={styles.logoWrapper_a6}>
                  <Image source={image} style={styles.logo_a6}></Image>
                </View>
              ) : null}
              <Image
                source={qr}
                style={
                  image && image.length
                    ? styles.table_a6_qr_1
                    : styles.table_a6_qr
                }
              />
              <Image
                source={qrBorder}
                style={
                  image && image.length
                    ? styles.qrBorder_4_1
                    : styles.qrBorder_4
                }
              ></Image>
              <Text style={styles.merchantName_4}>{merchantName}</Text>
            </View>
          </View>
        </Page>
      ) : null}
      {tableId === 5 ? (
        <Page style={styles.preview} size={{ width: 206.75, height: 354.25 }}>
          <View>
            <Image source={olucha}></Image>
            <Image source={qr} style={styles.olucha_qr} />
            <Image source={alifLogo} style={styles.alifLogo}></Image>
            <Text style={styles.merchantName_5}>{merchantName}</Text>
          </View>
        </Page>
      ) : null}
    </Document>
  );
}

export default PDFDocument;
