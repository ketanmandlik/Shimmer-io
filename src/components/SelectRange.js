import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core";
import propTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import appStyleConfig from "../styles/app.style.config";
import appStyle from "../Redux/reducers/app.style";

function SelectRange(props) {
  const { name, appStyle, changeObject, defaultValue, dimension, min, max } =
    props;

  return (
    <Container appStyle={appStyle}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h6>{name}</h6>
        <h6>{defaultValue + dimension}</h6>
      </div>

      <InputRange
        appStyle={appStyle}
        type="range"
        value={defaultValue}
        min={min}
        max={max}
        onChange={(e) => changeObject(e.target.valueAsNumber)}
      />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  appStyle: state.appStyle,
});

SelectRange.propTypes = {
  name: propTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(SelectRange);

const Container = styled.div`
  color: ${({ appStyle }) => appStyleConfig[appStyle["THEME"]].FOREGROUND};
`;
const InputRange = styled.input`
  overflow: hidden;
  max-width: 700px;
  width: 100%;
  margin: 0;
  cursor: pointer;
`;
