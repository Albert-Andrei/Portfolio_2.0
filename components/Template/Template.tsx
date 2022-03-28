import { useDarkMode } from '@lib/dark-mode';
import theme from '@theme/global';
import * as Styles from './Template.styles';

const Template: React.FC = () => {
  // Hooks
  const { darkMode } = useDarkMode();

  return <Styles.TemplateContaier></Styles.TemplateContaier>;
};

export default Template;
