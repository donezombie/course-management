import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import Header from "components/Header";
import { Fragment } from "react";
import Footer from "./Footer";
import Drawer from "components/Drawer";

const propTypes = {

}

const DefaultLayout = ({ children }) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <Fragment>
      <Header />
      <Drawer />
      {children}
    </Fragment>
    
  )
}

DefaultLayout.propTypes = propTypes;
export default DefaultLayout;