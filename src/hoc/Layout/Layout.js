import React from "react";

import Header from "../../components/Common/Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="d-flux">
        <div role="main">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
