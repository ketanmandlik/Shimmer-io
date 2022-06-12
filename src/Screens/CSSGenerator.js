/* eslint-disable react/jsx-no-target-blank */
import React, { useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import propTypes from "prop-types";
import appStyleConfig from "../styles/app.style.config";
import SelectRange from "../components/SelectRange";
import ColorPicker from "../components/ColorPicker";
import {
  changeObjectSize,
  changeObjectBorderRadius,
  changeObjectOpacity,
  changeObjectWidth,
} from "../Redux/actions/app.style";
import GeneratedOutputCSS from "../components/GeneratedOutputCSS";

function CSSGenerator(props) {
  const {
    appStyle,
    changeObjectSize,
    changeObjectBorderRadius,
    changeObjectOpacity,
    changeObjectWidth,
  } = props;

  return (
    <Container appStyle={appStyle} className="row m-3 p-4">
      {appStyle.SELECTED_OBJECT !== "TEXT" && (
        <>
          <SelectRange
            name="Size"
            changeObject={changeObjectSize}
            defaultValue={appStyle.OBJECT_SIZE}
            min={10}
            max={350}
            dimension={"px"}
          />
          <SelectRange
            name="Border-Radius"
            changeObject={changeObjectBorderRadius}
            defaultValue={appStyle.OBJECT_BORDER_RADIUS}
            min={0}
            max={350}
            dimension={"px"}
          />
        </>
      )}
      {appStyle.SELECTED_OBJECT === "TEXT" ? (
        <SelectRange
          name="Width"
          min={10}
          max={100}
          dimension={"px"}
          changeObject={changeObjectWidth}
          defaultValue={appStyle.OBJECT_WIDTH}
        />
      ) : null}
      <SelectRange
        name="Opacity"
        changeObject={changeObjectOpacity}
        defaultValue={appStyle.OBJECT_OPACITY}
        min={10}
        max={100}
        dimension={"%"}
      />
      <ColorPicker />
      <a
        href="https://codesandbox.io/s/shimmer-builder-demo-dn7t8o"
        target={"_blank"}
        className="mb-2"
      >
        Click for Demo
      </a>
      <GeneratedOutputCSS />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  appStyle: state.appStyle,
});

const mapDispatchToProps = {
  changeObjectSize: (size) => changeObjectSize(size),
  changeObjectBorderRadius: (radius) => changeObjectBorderRadius(radius),
  changeObjectOpacity: (opacity) => changeObjectOpacity(opacity),
  changeObjectWidth: (width) => changeObjectWidth(width),
};

CSSGenerator.prototype = {
  appStyle: propTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CSSGenerator);

const Container = styled.div`
  border-radius: 12px;

  background: ${({ appStyle }) =>
    appStyleConfig[appStyle["THEME"]].CSSCARDBACKGROUND};
`;

//!*For Circle size + border-radius
//!* For Square size
//!* For Rectangle size + width
