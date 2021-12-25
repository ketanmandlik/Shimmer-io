import React, { useState } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import appStyleConfig from "../styles/app.style.config";
import { changeColor } from "../Redux/actions/app.style";

function ColorPicker(props) {
  const { appStyle, changeColor } = props;
  const [colorSelected, setColorSelected] = useState("#E83A59");
  return (
    <Container appStyle={appStyle}>
      <div>
        <label htmlFor="color-picker">
          <h6 style={{ marginRight: "10px" }}>Select Color </h6>
        </label>
        <PickerInput
          type="color"
          name="color-picker"
          id="color-picker"
          value={appStyle.SELECTED_COLOR}
          onChange={(event) => changeColor(event.target.value)}
        />
      </div>
      <h6 className="fw-bold text-uppercase">{appStyle.SELECTED_COLOR}</h6>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  appStyle: state.appStyle,
});

const mapDispatchToProps = {
  changeColor: (color) => changeColor(color),
};

ColorPicker.propTypes = {
  appStyle: propTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);

const Container = styled.div`
  color: ${({ appStyle }) => appStyleConfig[appStyle["THEME"]].FOREGROUND};
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const PickerInput = styled.input`
  border-radius: 2px;
`;
