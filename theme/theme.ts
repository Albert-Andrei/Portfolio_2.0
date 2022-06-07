import { DefaultTheme } from 'styled-components';

interface MediaQueries {
  desktop?: any;
  tabletwide?: any;
  tablet?: any;
  phone?: any;
}

export interface ITheme {
  default: {
    background: string;
    fontColor: string;
  };
  colors: {
    purpleLow: string;
    purpleHigh: string;
    purpleStrong: string;
    purpleGreyBlend: string;
    seedLow: string;
    seedHigh: string;
    seedStrong: string;
    orangeLow: string;
    orangeHigh: string;
    orangeStrong: string;
    white: string;
    black: string;
    dark: string;
    action: string;
    actionLight: string;
    brand: string;
    contrast: string;
    pale: string;
    border: string;
    light: string;
    alert: string;
    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
    grey5: string;
    grey6: string;
    grey7: string;
    grey8: string;
    grey9: string;
    success: string;
    danger: string;
    select: string;
    warning: string;
    shadow: string;
    transparent: string;
    darkTransparent: string;
  };
  fontSizes: {
    display: number;
    header: number;
    subHeader: number;
    normal: number;
    medium: number;
    small: number;
    data: number;
  };
  spacings: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
  };
  screenSizes: MediaQueries;
}

const theme: DefaultTheme = {
  default: {
    background: '',
    fontColor: '',
  },
  colors: {
    purpleLow: '#FED4ED',
    purpleHigh: '#FEE8F7',
    purpleStrong: '#FFB2E1',
    purpleGreyBlend: '#F9E3F2',
    orangeLow: '#FFD2A6',
    orangeHigh: '#FFDDBA',
    orangeStrong: '#FDBB79',
    seedLow: '#DFD9BD',
    seedHigh: '#EDEADA',
    seedStrong: '#EDE5B9',
    white: '#FFFFFF',
    black: '#000000',
    dark: '#171717',
    action: '#2670EC',
    actionLight: '#679BF1',
    brand: '#15339E',
    contrast: '#ECBEDE',
    pale: '#F3DFC9',
    border: '#F3F3F0',
    light: '#F5F5F5',
    alert: '#F36162',
    grey1: '#FAFAFA',
    grey2: '#F0F0F0',
    grey3: '#E5E5E5',
    grey4: '#A6A6A6',
    grey5: '#808080',
    grey6: '#666666',
    grey7: '#343434',
    grey8: '#272727',
    grey9: '#1A1A1A',
    success: '#75EF88',
    danger: '#F36162',
    select: '#3AAEF0',
    warning: '#FFDC5F',
    shadow: '#DBDBDB',
    transparent: 'rgba(0, 0, 0, 0.1)',
    darkTransparent: 'rgba(0, 0, 0, 0.5)',
  },
  fontSizes: {
    display: 35,
    header: 30,
    subHeader: 22,
    normal: 16,
    medium: 14,
    small: 12,
    data: 9,
  },
  spacings: {
    small: 10,
    medium: 15,
    large: 20,
    xlarge: 30,
    xxlarge: 40,
  },
  screenSizes: {
    desktop: 1000,
    tabletwide: 1100,
    tablet: 790,
    phone: 415,
  },
};

export default theme;
