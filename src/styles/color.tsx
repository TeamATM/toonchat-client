const color = {
  black: '#000E08',
  darkGreen: '#24786D',
  lightGreen: '#20A090',
  whiteGreen: '#58C3B6',
  gray: '#646464',
  greenGray: '#797C7B',
  lightGray: '#CDD1D0',
  whiteGray: '#F5F8FC',
  offWhite: '#F3F6F6',
  white: '#FFFFFF',
};

export type Theme = 'green' | 'white'

export const themeTable = {
  green: {
    backgroundColor: color.darkGreen,
    color: color.offWhite,
  },
  white: {
    backgroundColor: color.offWhite,
    color: color.greenGray,
  },
};

export default color;
