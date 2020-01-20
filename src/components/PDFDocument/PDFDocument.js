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
  Font
} from "@react-pdf/renderer";

import qrBorder from "./../../assets/images/VerticalQrBorder.png";

import alifLogo from "./../../assets/images/alifLogo.png";
import olucha from "./../../assets/images/Olucha.png";

import background from "./../../assets/images/Table.png";
import verticalTable from "./../../assets/images/VerticalTable.png";
import verticalTableWIthInstruction from "./../../assets/images/VerticalTableWIthInstruction.png";
import verticalTableWithCard from "./../../assets/images/VerticalTableWithCard.png";

Font.register({
  family: "Montserrat",
  src: font
});

const styles = StyleSheet.create({
  qr: {
    position: "absolute",
    width: 306,
    height: 306,
    marginLeft: 732,
    marginTop: 236
  },
  qrBorder_1: {
    position: "absolute",
    width: 348,
    height: 348,
    marginLeft: 712,
    marginTop: 215
  },
  qrBorder_2: {
    position: "absolute",
    width: 230,
    height: 240,
    marginLeft: 132,
    marginTop: 335
  },
  qrBorder_3: {
    position: "absolute",
    width: 160,
    height: 160,
    marginLeft: 168,
    marginTop: 272
  },
  qrBorder_4: {
    position: "absolute",
    width: 220,
    height: 220,
    marginLeft: 138,
    marginTop: 348
  },
  logo: {
    position: "absolute",
    width: 338,
    height: 66,
    marginLeft: 718,
    marginTop: 130
  },
  verticalQr: {
    position: "absolute",
    width: 204,
    height: 206,
    marginLeft: 145,
    marginTop: 352
  },
  olucha_qr: {
    position: "absolute",
    width: 260,
    height: 260,
    marginLeft: 118,
    marginTop: 310
  },
  verticalQrInstruction: {
    position: "absolute",
    width: 140,
    height: 140,
    marginLeft: 177,
    marginTop: 283
  },
  verticalTableWithCard: {
    position: "absolute",
    width: 190,
    height: 190,
    marginLeft: 151,
    marginTop: 363
  },

  merchantName_1: {
    position: "absolute",
    color: "white",
    fontFamily: "Montserrat",
    transform: "rotate(270deg)",
    fontSize: 9,
    height: 400,
    marginLeft: 1362,
    marginTop: 360,
    textAlign: "left"
  },
  merchantName_2: {
    position: "absolute",
    color: "white",
    fontFamily: "Montserrat",
    transform: "rotate(270deg)",
    fontSize: 9,
    height: 300,
    marginLeft: 610,
    marginTop: 503,
    textAlign: "left"
  },
  merchantName_3: {
    position: "absolute",
    color: "white",
    fontFamily: "Montserrat",
    transform: "rotate(270deg)",
    fontSize: 9,
    height: 300,
    marginLeft: 610,
    marginTop: 503,
    textAlign: "left"
  },
  merchantName_4: {
    position: "absolute",
    color: "white",
    fontFamily: "Montserrat",
    transform: "rotate(270deg)",
    fontSize: 9,
    height: 300,
    marginLeft: 610,
    marginTop: 503,
    textAlign: "left"
  },
  merchantName_5: {
    position: "absolute",
    color: "white",
    fontFamily: "Montserrat",
    fontSize: 14,
    width: "100%",
    // marginLeft: 210,
    marginTop: 664,
    textAlign: "center"
  },

  alifLogo: {
    position: "absolute",
    width: 60,
    textAlign: "center",
    marginTop: 410,
    marginLeft: 222,
    zIndex: "4"
  }
});

function PDFDocument({ image, tableId, qr, merchantName }) {
  return (
    <Document style={styles.background}>
      {tableId === 1 ? (
        <Page
          style={styles.preview}
          orientation={"landscape"}
          size={{ width: 599.74, height: 1200 }}
        >
          <View>
            <Image source={background} style={styles.background}></Image>
            <Image source={qr} style={styles.qr} />
            {image.length ? (
              <Image source={image} style={styles.logo}></Image>
            ) : null}
            <Image source={qrBorder} style={styles.qrBorder_1}></Image>
            <Text style={styles.merchantName_1}>{merchantName}</Text>
          </View>
        </Page>
      ) : null}
      {tableId === 2 ? (
        <Page style={styles.preview} size={{ width: 494.8688, height: 700 }}>
          <View>
            <Image source={verticalTable}></Image>
            <Image source={qr} style={styles.verticalQr} />
            <Image source={qrBorder} style={styles.qrBorder_2}></Image>
            <Text style={styles.merchantName_2}>{merchantName}</Text>
          </View>
        </Page>
      ) : null}
      {tableId === 3 ? (
        <Page style={styles.preview} size={{ width: 494.8688, height: 700 }}>
          <View>
            <Image source={verticalTableWIthInstruction}></Image>
            <Image source={qr} style={styles.verticalQrInstruction} />
            <Image source={qrBorder} style={styles.qrBorder_3}></Image>
            <Text style={styles.merchantName_3}>{merchantName}</Text>
          </View>
        </Page>
      ) : null}
      {tableId === 4 ? (
        <Page style={styles.preview} size={{ width: 494.8688, height: 700 }}>
          <View>
            <Image source={verticalTableWithCard}></Image>
            <Image source={qr} style={styles.verticalTableWithCard} />
            <Image source={qrBorder} style={styles.qrBorder_4}></Image>
            <Text style={styles.merchantName_4}>{merchantName}</Text>
          </View>
        </Page>
      ) : null}
      {tableId === 5 ? (
        <Page
          style={styles.preview}
          size={{ width: 494.8688, height: 847.439 }}
        >
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
