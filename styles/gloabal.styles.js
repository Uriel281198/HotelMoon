import styled, { css, keyframes } from "styled-components";

export const colors = {
  primaryColor: "#ef6c00",
  primaryDark :"#424242",
  // primaryDark :"#212121",  
  second: "#23c0e9",
  bacgroundColor: "#f5f5f5f5",
};

export const sharedProps = css`
  padding: 20px 15px 10px 15px;
`;

export const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1800,
};

export const size = {
  xs: `${breakpoints.xs}px`,
  sm: `${breakpoints.sm}px`,
  md: `${breakpoints.md}px`,
  lg: `${breakpoints.lg}px`,
  xl: `${breakpoints.xl}px`,
  xxl: `${breakpoints.xxl}px`,
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
};
