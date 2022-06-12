import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import propTypes from "prop-types";
// import Header from "./components/Header";
import appConfig from "./styles/app.style.config";
// import SelectObject from "./components/SelectObject";
// import ObjectGenerator from "./Screens/ObjectGenerator";
// import CSSGenerator from "./Screens/CSSGenerator";

const Header = lazy(() => import("./components/Header"));
const SelectObject = lazy(() => import("./components/SelectObject"));
const ObjectGenerator = lazy(() => import("./Screens/ObjectGenerator"));
const CSSGenerator = lazy(() => import("./Screens/CSSGenerator"));
function App({ appStyle }) {
  return (
    <Suspense
      fallback={
        <div className="loading text-center">
          <p>L</p>
          <p>O</p>
          <p>A</p>
          <p>D</p>
          <p>I</p>
          <p>N</p>
          <p>G</p>
        </div>
      }
    >
      <AppContainer appStyle={appStyle}>
        <Header />
        <SelectObject />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row">
                <div className="col-md-6">
                  <ObjectGenerator />
                </div>
                <div className="col-md-6">
                  <CSSGenerator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </Suspense>
  );
}

const AppContainer = styled.div`
  background-color: ${({ appStyle }) => appConfig[appStyle.THEME].BACKGROUND};
  height: 100vh;
`;

const mapStateToProps = (state) => ({
  appStyle: state.appStyle,
});

App.propTypes = {
  appStyle: propTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(App);
