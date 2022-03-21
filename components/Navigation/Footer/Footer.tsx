import Link from 'next/dist/client/link';
import SocialMediaData from '../../../data/SocialMediaData';
import theme from '../../../theme';
import Typography from '../../Typography';
import * as Styles from './Styles';

const Footer: React.FC = () => {
  return (
    <Styles.FooterContaier>
      <Styles.SocialMediaLinks>
        {SocialMediaData.map((value, index) => (
          <Link href={value.link} key={index}>
            <a target="_blank" rel="noreferrer">
              <Styles.SocialItem
                hoverColor={value.color}
                isSpotify={value.title === 'spotify' ? true : false}
              >
                {value.image}
              </Styles.SocialItem>
            </a>
          </Link>
        ))}
      </Styles.SocialMediaLinks>
      <Styles.MadeWithLove>
        <Typography align="center" size={10} color={theme.colors.grey4}>
          {'Made with ❤️ by the me '}
        </Typography>
        <Typography align="center" size={10} color={theme.colors.grey4}>
          {` © ${new Date().getFullYear()} All rights reseved`}
        </Typography>
      </Styles.MadeWithLove>
      <Styles.Address>
        <div style={{ maxWidth: 130 }}>
          <Typography align="right" size={10} color={theme.colors.grey4}>
            {/* Contact info here */}
          </Typography>
        </div>
      </Styles.Address>
    </Styles.FooterContaier>
  );
};

export default Footer;
