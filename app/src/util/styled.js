/**
 * Styled Components Helpers
 */

// Rules
const color = {
  white: '#fff',
  black: '#000',
  light: '#f0f0f0',
  dark: '#222',
  primary: '#3FB8AF',
  secondary: '#FF3D7F',
  blackTransparent: 'rgba(0,0,0,.75)',
  whiteTransparent: 'rgba(255,255,255,.55)'
}

const font = {
  family: {
    thin: `'robotothin', Arial, 'Helvetica Neue', Helvetica, sans-serif;`,
    default: `'robotoregular', Arial, 'Helvetica Neue', Helvetica, sans-serif;`,
    black: `'robotoblack', Arial, 'Helvetica Neue', Helvetica, sans-serif;`,
    title: `'pacificoregular', Georgia, 'Times New Roman', Times, serif`
  },
  lineHeight: {
    default: 1.3,
    paragraph: 1.4,
    title: 1.6
  },
  size: {
    small: '.9rem',
    tiny: '.7rem',
    xlarge: '8rem',
    large: '6rem',
    medium: '3rem',
    hero: '9rem',
    navLink: '.88rem',
    form: '1.6rem'
  }
}

const size = {
  pageMax: '1366px',
  desktopMax: '1366px',
  desktopMin: '1365px',
  mobileMax: '960px',
  mobileMin: '961px',
  xsMax: '650px',
  xsMin: '649px'
}


export { color, font, size };