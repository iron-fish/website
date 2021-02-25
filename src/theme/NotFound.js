/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import Layout from "@theme/Layout";

function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "510px",
          justifyContent: "center",
          marginTop: "100px",
          textAlign: "center",
          marginBottom: "100px",
        }}
      >
        <h1
          className="hero__title"
          style={{
            marginBottom: "40px",
          }}
        >
          You must be lost if you’re down here.
        </h1>
        <img src="/img/notFound.svg" role="presentation" />
      </div>
    </Layout>
  );
}

export default NotFound;
