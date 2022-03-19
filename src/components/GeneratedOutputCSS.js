import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changeType } from "../Redux/actions/app.style";

function GeneratedOutputCSS(props) {
  const { appStyle, changeType } = props;
  const [noOutput, setNoOutput] = React.useState("");
  const [skeletonValue, setSkeletonValue] = React.useState(`
    .skeleton {
        animation: skeleton-loading 1s linear infinite alternate;
      }

      ${
        appStyle.SELECTED_OBJECT !== "TEXT"
          ? `
        .skeleton-object {
          width: ${appStyle.OBJECT_SIZE}px;
          height: ${appStyle.OBJECT_SIZE}px;
          border-radius: ${appStyle.OBJECT_BORDER_RADIUS}px;
          opacity: ${appStyle.OBJECT_OPACITY}%;
      }
        `
          : `
          .skeleton-text {
            width: ${appStyle.OBJECT_WIDTH}%;
            height: 0.5rem;
            margin-bottom: 0.25rem;
            border-radius: 0.125rem;
            opacity:${appStyle.OBJECT_OPACITY}%;
          }
          .skeleton-text:last-child {
            margin-bottom: 0;
            width: ${appStyle.OBJECT_WIDTH - 20}%;
          }
          `
      }

    @keyframes skeleton-loading {
        0% {
          background-color: hsl(200, 20%, 70%);
        }
        100% {
          background-color: hsl(200, 20%, 95%);
        }
      }

    `);

  const [skeletonValueHTML, setSkeletonValueHTML] = React.useState(`
  ${
    appStyle.SELECTED_OBJECT === "TEXT"
      ? `
  <span class="skeleton skeleton-text">
    TEXT COMES AFTER LOADING...
  </span>
  <span class="skeleton skeleton-text">
    TEXT COMES AFTER LOADING...
  </span>
  <span class="skeleton skeleton-text">
    TEXT COMES AFTER LOADING...
  </span>
  `
      : `<img src="IMAGE COME AFTER LOADING..." 
          class="skeleton skeleton-object" />`
  }
  `);

  const [isCopied, setIsCopied] = React.useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = (copyText) => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    setSkeletonValue(`
      .skeleton {
        animation: skeleton-loading 1s linear infinite alternate;
      }
    ${
      appStyle.SELECTED_OBJECT !== "TEXT"
        ? `
      .skeleton-object {
        width: ${appStyle.OBJECT_SIZE}px;
        height: ${appStyle.OBJECT_SIZE}px;
        border-radius: ${appStyle.OBJECT_BORDER_RADIUS}px;
        opacity: ${appStyle.OBJECT_OPACITY}%;
    }
      `
        : `
        .skeleton-text {
          width: ${appStyle.OBJECT_WIDTH}%;
          height: 0.5rem;
          margin-bottom: 0.25rem;
          border-radius: 0.125rem;
          opacity:${appStyle.OBJECT_OPACITY}%;
        }
        .skeleton-text:last-child {
          margin-bottom: 0;
          width: ${appStyle.OBJECT_WIDTH - 20}%;
        }
        `
    }
    
    @keyframes skeleton-loading {
        0% {
          background-color: hsl(200, 20%, 70%);
        }
        100% {
          background-color: hsl(200, 20%, 95%);
        }
      }
      `);
  }, [appStyle, noOutput]);

  useEffect(() => {
    setSkeletonValueHTML(`
    ${
      appStyle.SELECTED_OBJECT === "TEXT"
        ? `
      <span class="skeleton skeleton-text">
        TEXT COMES AFTER LOADING...
      </span>
      <span class="skeleton skeleton-text">
        TEXT COMES AFTER LOADING...
      </span>
      <span class="skeleton skeleton-text">
        TEXT COMES AFTER LOADING...
      </span>
    `
        : `<img src="IMAGE COME AFTER LOADING..." 
            class="skeleton skeleton-object" />
            `
    }
    `);
  }, [appStyle]);

  return (
    <Container isCopied={isCopied}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {/* <button onClick={() => changeType("CSS")}>CSS</button>
          <button onClick={() => changeType("HTML")}>HTML</button> */}
          <RadioInput
            appStyle={appStyle}
            className="me-2"
            type="radio"
            value="CSS"
            checked={appStyle.SELECTED_TYPE === "CSS"}
            onChange={() => changeType("CSS")}
          />
          <TypeText className="me-2" appStyle={appStyle}>
            CSS
          </TypeText>
          <RadioInput
            appStyle={appStyle}
            className="me-2"
            type="radio"
            value="HTML"
            checked={appStyle.SELECTED_TYPE === "HTML"}
            onChange={() => changeType("HTML")}
          />
          <TypeText className="me-2" appStyle={appStyle}>
            HTML
          </TypeText>
        </div>
        <CopyToClipboardButton
          className="btn btn-success"
          onClick={() => {
            handleCopyClick(
              appStyle.SELECTED_TYPE === "CSS"
                ? skeletonValue
                : skeletonValueHTML
            );
          }}
        >
          <span style={{ fontSize: "14px" }}>
            {isCopied ? "Copied" : "Copy"}
          </span>
        </CopyToClipboardButton>
      </div>

      {appStyle.SELECTED_TYPE === "CSS" ? (
        <CssTextArea
          appStyle={appStyle}
          value={skeletonValue}
          contentEditable={false}
          disabled={true}
        ></CssTextArea>
      ) : (
        <CssTextArea
          appStyle={appStyle}
          value={skeletonValueHTML}
          contentEditable={false}
          disabled={true}
        ></CssTextArea>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  appStyle: state.appStyle,
});

const mapDispatchToProps = {
  changeType: (type) => changeType(type),
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneratedOutputCSS);

const Container = styled.div`
  background-color: ${({ isCopied }) => (isCopied ? "#c3e6d6" : "#1d1f21")};
  padding: 5px 5px 20px 5px;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
`;

const CssTextArea = styled.textarea`
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
  color: ${({ appStyle }) => appStyle.SELECTED_COLOR};
  font-size: 14px;
`;

const CopyToClipboardButton = styled.button`
  height: 30px;
  padding: 1px 4px 1px 4px;
`;

const RadioInput = styled.input`
  accent-color: ${({ appStyle }) => appStyle.SELECTED_COLOR};
  size: 20px;
`;
const TypeText = styled.span`
  color: ${({ appStyle }) => appStyle.SELECTED_COLOR};
`;
