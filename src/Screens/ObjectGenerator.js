import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

function ObjectGenerator(props) {
  const { appStyle } = props;
  return (
    <div className="p-4">
      {appStyle.SELECTED_OBJECT === "TEXT" ? (
        <Container>
          <SkeletonText className="skeleton" appStyle={appStyle} />
          <SkeletonText className="skeleton" appStyle={appStyle} />
          <SkeletonText className="skeleton" appStyle={appStyle} />
        </Container>
      ) : (
        <div
          className="skeleton"
          style={{
            width: `${appStyle.OBJECT_SIZE}px`,
            height: `${appStyle.OBJECT_SIZE}px`,
            borderRadius: `${appStyle.OBJECT_BORDER_RADIUS}px`,
            opacity: `${appStyle.OBJECT_OPACITY}%`,
          }}
        ></div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  appStyle: state.appStyle,
});

export default connect(mapStateToProps, null)(ObjectGenerator);

const Container = styled.div`
  padding: 10px;
`;

const SkeletonText = styled.div`
  width: ${({ appStyle }) => `${appStyle.OBJECT_WIDTH}%`};
  height: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.425rem;
  opacity: ${({ appStyle }) => `${appStyle.OBJECT_OPACITY}%`};
  :last-child {
    margin-bottom: 0;
    width: ${({ appStyle }) => `${appStyle.OBJECT_WIDTH - 20}%`};
  }
`;
