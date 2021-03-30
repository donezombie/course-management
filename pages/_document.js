import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head />
        <body className="layout-sticky-subnav layout-default">
          <Main />
          <NextScript />

          <script src="assets/vendor/jquery.min.js"></script>

          <script src="assets/vendor/popper.min.js"></script>

          <script src="assets/vendor/bootstrap.min.js"></script>

          <script src="assets/vendor/perfect-scrollbar.min.js"></script>

          <script src="assets/vendor/dom-factory.js"></script>

          <script src="assets/vendor/fix-footer.js"></script>

          <script src="assets/js/app.js"></script>
        </body>
      </Html>
    );
  }
}
