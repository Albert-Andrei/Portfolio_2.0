import { DefaultTheme } from 'styled-components';
import global from '../global'


const lightTheme: DefaultTheme = {
  ...global,
  default: {
      background: '#f7f7f7',
      fontColor: '#000',
  },
};

export default lightTheme