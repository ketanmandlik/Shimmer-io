import {
  CHANGE_DARK_THEME,
  CHANGE_LIGHT_THEME,
  OBJECT_BORDER_RADIUS,
  OBJECT_OPACITY,
  OBJECT_SIZE,
  OBJECT_WIDTH,
  SELECTED_COLOR,
  SELECT_OBJECT,
} from "../actions/action.type";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  THEME: "LIGHT",
  SELECTED_OBJECT: "CIRCLE",
  OBJECT_SIZE: "50",
  OBJECT_WIDTH: "50",
  OBJECT_BORDER_RADIUS: "50",
  OBJECT_OPACITY: "100",
  SELECTED_COLOR: "#46B2E0",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LIGHT_THEME:
      return {
        ...state,
        THEME: action.payload,
      };
    case CHANGE_DARK_THEME:
      return {
        ...state,
        THEME: action.payload,
      };
    case SELECT_OBJECT:
      return {
        ...state,
        SELECTED_OBJECT: action.payload,
      };
    case OBJECT_SIZE:
      return {
        ...state,
        OBJECT_SIZE: action.payload,
      };
    case OBJECT_BORDER_RADIUS:
      return {
        ...state,
        OBJECT_BORDER_RADIUS: action.payload,
      };
    case OBJECT_OPACITY:
      return {
        ...state,
        OBJECT_OPACITY: action.payload,
      };
    case SELECTED_COLOR: {
      return {
        ...state,
        SELECTED_COLOR: action.payload,
      };
    }
    case OBJECT_WIDTH: {
      return {
        ...state,
        OBJECT_WIDTH: action.payload,
      };
    }
    default:
      return state;
  }
};
