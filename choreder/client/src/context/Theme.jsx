import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

function Theme({children}) {
  const theme = {
    primary: "#5d5c61",
    primary_l: "#948d94",
    secondary: "#557a95",
    secondary_l: "#7395ae",
    tertiary: "#bfb8bf",
    dark: "#313133",
    light: "#bfb8bf",
    highlight: "#66aacc",
    secondary_highlight: "#66ccaa",
    colors: {
      green_light: "#1abc9c",
      green: "#16a085",
      blue_light: "#3498db",
      blue: "#2980b9",
      purple_light: "#9b59b6",
      purple: "#8e44ad",
      asphalt: "#34495e",
      midnight: "#2c3e50",
      yellow_light: "#f1c40f",
      yellow: "#f39c12",
      orange_light: "#e67e22",
      orange: "#d35400",
      red_light: "#e74c3c",
      red: "#c0392b",
      white: "#ecf0f1",
      grey_light: "#bdc3c7",
      grey_medium: "#95a5a6",
      grey_dark: "#7f8c8d",
      black: "#232323",
      primary: "#5d5c61",
      secondary: "#557a95"
    },
    colors_real: {
      turquoise: "#1abc9c",
      greenSea: "#16a085",
      river: "#3498db",
      belize: "#2980b9",
      amethyst: "#9b59b6",
      wisteria: "#8e44ad",
      asphalt: "#34495e",
      midnight: "#2c3e50",
      sunflower: "#f1c40f",
      orange: "#f39c12",
      carrot: "#e67e22",
      pumpkin: "#d35400",
      alizarin: "#e74c3c",
      pomegranate: "#c0392b",
      cloud: "#ecf0f1",
      silver: "#bdc3c7",
      concrete: "#95a5a6",
      asbestos: "#7f8c8d"
    }
  }
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default Theme