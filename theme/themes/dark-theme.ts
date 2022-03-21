import { DefaultTheme } from 'styled-components';
import global from '../global'

const darkTheme: DefaultTheme = {
  ...global,
  default: {
      background: '#171717',
      fontColor: '#fff',
  }
};

export default darkTheme