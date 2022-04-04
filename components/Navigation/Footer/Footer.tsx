import Icon from '@components/Icon';
import Link from 'next/dist/client/link';
import { useState } from 'react';
import SocialMediaData from '../../../data/SocialMediaData';
import theme from '../../../theme';
import Typography from '../../Typography';
import * as Styles from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <Styles.FooterContaier>
      <Styles.SocialMediaLinks>
        {SocialMediaData.map((value, index) => (
          <Link href={value.link} key={index}>
            <a target="_blank" rel="noreferrer">
              <Styles.SocialItem>
                <Icon id={value.title} width={27} height={27} />
              </Styles.SocialItem>
            </a>
          </Link>
        ))}
      </Styles.SocialMediaLinks>
      <Styles.MadeWithLove>
        <Typography align="center" size={10} color={theme.colors.grey4}>
          {'Made with ❤️ by me :D'}
        </Typography>
        <Typography align="center" size={10} color={theme.colors.grey4}>
          {` © ${new Date().getFullYear()} All rights reseved`}
        </Typography>
      </Styles.MadeWithLove>
      <Styles.Address>
        <a href="mailto:moldovanualiberta@gmail.com">
          <Typography align="right" size={10} color={theme.colors.grey4}>
            Feel free to contact me any time! {'\n'} moldovanualiberta@gmail.com
          </Typography>
        </a>
      </Styles.Address>
    </Styles.FooterContaier>
  );
};

export default Footer;
