import {
  CHANGE_DARK_THEME,
  CHANGE_LIGHT_THEME,
  OBJECT_BORDER_RADIUS,
  OBJECT_SIZE,
  SELECT_OBJECT,
  OBJECT_OPACITY,
  SELECTED_COLOR,
  OBJECT_WIDTH,
  SELECTED_TYPE,
} from "./action.type";

export const changeLightTheme = (color) => ({
  type: CHANGE_LIGHT_THEME,
  payload: color,
});

export const changeDarkTheme = (color) => ({
  type: CHANGE_DARK_THEME,
  payload: color,
});

export const selectedObject = (object) => ({
  type: SELECT_OBJECT,
  payload: object,
});

export const changeObjectSize = (size) => ({
  type: OBJECT_SIZE,
  payload: size,
});

export const changeObjectBorderRadius = (radius) => ({
  type: OBJECT_BORDER_RADIUS,
  payload: radius,
});

export const changeObjectOpacity = (opacity) => ({
  type: OBJECT_OPACITY,
  payload: opacity,
});

export const changeColor = (color) => ({
  type: SELECTED_COLOR,
  payload: color,
});

export const changeObjectWidth = (width) => ({
  type: OBJECT_WIDTH,
  payload: width,
});

export const changeType = (type) => ({
  type: SELECTED_TYPE,
  payload: type,
});
