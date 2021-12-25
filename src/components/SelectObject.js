import React, { useState } from "react";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import CropDinOutlinedIcon from "@material-ui/icons/CropDinOutlined";
import ShortTextIcon from "@material-ui/icons/ShortText";
import styled from "styled-components";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {
  changeObjectBorderRadius,
  changeObjectSize,
  selectedObject,
} from "../Redux/actions/app.style";

function SelectObject(props) {
  const {
    appStyle,
    selectedObject,
    changeObjectBorderRadius,
    changeObjectSize,
  } = props;
  return (
    <div className="px-2 d-flex justify-content-center align-items-center">
      <ObjContainer
        appStyle={appStyle}
        myObject={"CIRCLE"}
        onClick={() => {
          changeObjectSize(50);
          changeObjectBorderRadius(50);
          selectedObject("CIRCLE");
        }}
      >
        <FiberManualRecordOutlinedIcon />
      </ObjContainer>
      <ObjContainer
        appStyle={appStyle}
        myObject={"SQUARE"}
        onClick={() => {
          changeObjectBorderRadius(0);
          selectedObject("SQUARE");
        }}
      >
        <CropDinOutlinedIcon />
      </ObjContainer>
      <ObjContainer
        appStyle={appStyle}
        myObject={"TEXT"}
        onClick={() => {
          selectedObject("TEXT");
        }}
      >
        <ShortTextIcon />
      </ObjContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  appStyle: state.appStyle,
});

const mapDispatchToProps = {
  selectedObject: (object) => selectedObject(object),
  changeObjectBorderRadius: (radius) => changeObjectBorderRadius(radius),
  changeObjectSize: (size) => changeObjectSize(size),
};

SelectObject.propTypes = {
  appStyle: propTypes.object.isRequired,
  selectedObject: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectObject);

const ObjContainer = styled.div`
  cursor: pointer;
  padding: 0.5% 0.5% 0.5% 0.5%;
  border-radius: 5px;
  background-color: ${({ appStyle, myObject }) =>
    appStyle.SELECTED_OBJECT === myObject ? "#0099FF" : "transparent"};
  color: ${({ appStyle, myObject }) =>
    appStyle.SELECTED_OBJECT === myObject
      ? "antiquewhite"
      : appStyle["THEME"] === "DARK"
      ? "#FFF"
      : "#1C1C1C"};
`;
