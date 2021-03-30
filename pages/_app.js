import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import Router from "next/router";
import Head from "next/head";
import i18n from "i18n";

import store from "redux/store";
import NProgress from "nprogress";

import "scss/styles.scss";
import { importExternalJS } from "helpers";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    function trigger() {
      "use strict";
      var headerNode = document.querySelector(".mdk-header");
      var layoutNode = document.querySelector(".mdk-header-layout");
      var componentNode = layoutNode ? layoutNode : headerNode;
      if (componentNode) {
        componentNode.addEventListener(
          "domfactory-component-upgraded",
          function () {
            headerNode.mdkHeader.eventTarget.addEventListener(
              "scroll",
              function () {
                var progress = headerNode.mdkHeader.getScrollState().progress;
                var navbarNode = headerNode.querySelector("#default-navbar");
                navbarNode.classList.toggle("bg-transparent", progress <= 0.2);
              }
            );
          }
        );
      }
    };

    trigger();
    importExternalJS();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Head>
          <meta charSet="utf-8" />
          <meta content="IE=edge" />
          <link rel="shortcut icon" href="assets/favicon.jpg" />
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <meta name="robots" content="noindex" />

          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700%7CRoboto:400,500%7CExo+2:600&display=swap"
            rel="stylesheet"
          />

          <link
            type="text/css"
            href="assets/vendor/perfect-scrollbar.css"
            rel="stylesheet"
          />

          <link
            type="text/css"
            href="assets/vendor/fix-footer.css"
            rel="stylesheet"
          />

          <link
            type="text/css"
            href="assets/css/material-icons.css"
            rel="stylesheet"
          />

          <link
            type="text/css"
            href="assets/css/fontawesome.css"
            rel="stylesheet"
          />

          <link
            type="text/css"
            href="assets/css/preloader.css"
            rel="stylesheet"
          />

          <link type="text/css" href="assets/css/app.css" rel="stylesheet" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        {/* <div id="dzb-progress-bar" /> */}

        <Component {...pageProps} />
      </Provider>
    </I18nextProvider>
  );
}
