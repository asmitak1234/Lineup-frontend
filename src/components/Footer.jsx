// <!-- Made By - Asmita Kumari -->

import React from "react"
import logo from "../static/lineup-logo.png"

import { CDBModalFooter,CDBBox} from 'cdbreact';

export default function Footer(){
  return (
    <CDBModalFooter className="shadow mx-auto px-4" style={{ height:"15vh", borderRadius:"10px",
        position: "relative",
        bottom: "10px",
        left: "40%",
        width:'70vw',
        transform: "translateX(-50%)",}} >
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-1 px-2 flex-wrap"
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={logo}
              width="45px"
            />
            {/* <span className="ms-4 h5 mb-0 font-weight-bold"></span> */}
          </a>
          <strong style={{fontSize:'23px'}} className="mx-1">LineUp</strong>
          <p className="mx-3 my-4"> by Asmita Kumari</p>
        </CDBBox>
      </CDBBox>
    </CDBModalFooter>
  );
};