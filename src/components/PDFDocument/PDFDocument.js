import React, { useEffect } from "react";
import "./pdf-document.scss";
import font from "./../../shared/assets/fonts/Arial.ttf";

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
  family: "Arial",
  src: font
});

const styles = StyleSheet.create({
  qr: {
    position: "absolute",
    width: 164,
    height: 164,
    marginLeft: 313.5,
    marginTop: 107,
    borderRadius: 20
  },
  qrBorder_1: {
    position: "absolute",
    width: 150,
    height: 150,
    marginLeft: 320,
    marginTop: 112
  },

  qr_11: {
    position: "absolute",
    width: 164,
    height: 164,
    marginLeft: 313.5,
    marginTop: 92,
    borderRadius: 20
  },
  qrBorder_11: {
    position: "absolute",
    width: 150,
    height: 150,
    marginLeft: 320,
    marginTop: 98
  },
  qrBorder_2: {
    position: "absolute",
    width: 140,
    height: 140,
    marginLeft: 85,
    marginTop: 218
  },
  qrBorder_3: {
    position: "absolute",
    width: 108,
    height: 108,
    marginLeft: 100,
    marginTop: 165
  },
  qrBorder_4: {
    position: "absolute",
    width: 140,
    height: 140,
    marginLeft: 84,
    marginTop: 212
  },
  logoWrapper: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    width: 158,
    marginLeft: 318,
    marginTop: 72
  },
  logo: {
    position: "absolute",
    maxWidth: 158,
    height: 28,
    maxHeight: 28
  },
  verticalQr: {
    position: "absolute",
    width: 154,
    height: 154,
    marginLeft: 78.5,
    borderRadius: 20,
    marginTop: 212
  },
  olucha_qr: {
    position: "absolute",
    width: 134,
    height: 134,
    marginLeft: 38,
    borderRadius: 20,
    marginTop: 114
  },
  verticalQrInstruction: {
    position: "absolute",
    width: 118,
    height: 118,
    marginLeft: 95.5,
    borderRadius: 20,
    marginTop: 160.5
  },
  verticalTableWithCard: {
    position: "absolute",
    width: 155,
    height: 155,
    marginLeft: 78,
    borderRadius: 20,
    marginTop: 206
  },

  merchantName_1: {
    position: "absolute",
    color: "white",
    fontFamily: "Arial",
    transform: "rotate(270deg)",
    fontSize: 9,
    // height: 200,
    marginLeft: 510,
    marginTop: 250,
    textAlign: "left"
  },
  merchantName_2: {
    position: "absolute",
    color: "white",
    fontFamily: "Arial",
    transform: "rotate(270deg)",
    fontSize: 9,
    height: 200,
    marginLeft: 394,
    marginTop: 314,
    textAlign: "left"
  },
  merchantName_3: {
    position: "absolute",
    color: "white",
    fontFamily: "Arial",
    transform: "rotate(270deg)",
    fontSize: 9,
    height: 200,
    marginLeft: 396,
    marginTop: 302,
    textAlign: "left"
  },
  merchantName_4: {
    position: "absolute",
    color: "white",
    fontFamily: "Arial",
    transform: "rotate(270deg)",
    fontSize: 9,
    height: 200,
    marginLeft: 396,
    marginTop: 302,
    textAlign: "left"
  },
  merchantName_5: {
    position: "absolute",
    color: "white",
    fontFamily: "Arial",
    fontSize: 10,
    width: "100%",
    // marginLeft: 210,
    marginTop: 280,
    textAlign: "center"
  },

  alifLogo: {
    position: "absolute",
    width: 25,
    textAlign: "center",
    marginTop: 164,
    marginLeft: 92,
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
        <Page style={styles.preview} size={{ width: 310, height: 436.75 }}>
          <View>
            <Image source={verticalTable}></Image>
            <Image source={qr} style={styles.verticalQr} />
            <Image source={qrBorder} style={styles.qrBorder_2}></Image>
            <Text style={styles.merchantName_2}>{merchantName}</Text>
          </View>
        </Page>
      ) : null}
      {tableId === 3 ? (
        <Page style={styles.preview} size={{ width: 309.9525, height: 436.75 }}>
          <View>
            <Image source={verticalTableWIthInstruction}></Image>
            <Image source={qr} style={styles.verticalQrInstruction} />
            <Image source={qrBorder} style={styles.qrBorder_3}></Image>
            <Text style={styles.merchantName_3}>{merchantName}</Text>
          </View>
        </Page>
      ) : null}
      {tableId === 4 ? (
        <Page style={styles.preview} size={{ width: 309.9525, height: 436.75 }}>
          <View>
            <Image source={verticalTableWithCard}></Image>
            <Image source={qr} style={styles.verticalTableWithCard} />
            <Image source={qrBorder} style={styles.qrBorder_4}></Image>
            <Text style={styles.merchantName_4}>{merchantName}</Text>
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
