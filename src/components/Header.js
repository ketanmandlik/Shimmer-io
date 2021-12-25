import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import propTypes from "prop-types";
import { changeDarkTheme, changeLightTheme } from "../Redux/actions/app.style";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import appConfig from "../styles/app.style.config";

function Header(props) {
  const { appStyle, changeLightTheme, changeDarkTheme } = props;
  return (
    <HeaderContainer appStyle={appStyle}>
      <div style={{ flex: 1 }}>
        <h2
          style={{
            color: appConfig[appStyle["THEME"]].FOREGROUND,
            fontWeight: "600",
          }}
        >
          Shimmer.io
        </h2>
        <h6
          style={{
            color: appConfig[appStyle["THEME"]].FOREGROUND,
            fontWeight: "400",
          }}
        >
          Generate Soft-UI CSS code
        </h6>
      </div>

      <IconContainer className="px-2 py-1">
        {appStyle.THEME === "LIGHT" ? (
          <div onClick={() => changeDarkTheme("DARK")}>
            <NightsStayIcon
              style={{
                fontSize: 20,
                color: appConfig[appStyle["THEME"]].FOREGROUND,
              }}
            />
          </div>
        ) : (
          <div onClick={() => changeLightTheme("LIGHT")}>
            <WbSunnyIcon
              style={{
                fontSize: 20,
                color: appConfig[appStyle["THEME"]].FOREGROUND,
              }}
            />
          </div>
        )}
      </IconContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 20px 20px 0px 20px;
`;
const IconContainer = styled.div`
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
`;

const mapStateToProps = (state) => ({
  appStyle: state.appStyle,
});

const mapDispatchToProps = {
  changeLightTheme: (color) => changeLightTheme(color),
  changeDarkTheme: (color) => changeDarkTheme(color),
};

Header.propTypes = {
  appStyle: propTypes.object.isRequired,
  changeLightTheme: propTypes.func.isRequired,
  changeDarkTheme: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
