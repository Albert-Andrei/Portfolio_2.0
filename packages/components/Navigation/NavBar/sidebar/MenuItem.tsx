import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useDarkMode } from '@lib/dark-mode';
import Typography from '@components/Typography';
import theme from '@theme/index';

export interface MenuProps {
  value: any;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    display: 'flex',
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

export const MenuItem: React.FC<MenuProps> = ({ value }: MenuProps) => {
  const { darkMode } = useDarkMode();

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      //@ts-ignore
      href={value.path}
    >
      <div className="icon-placeholder" style={{ border: `2px solid ${darkMode ? 'white' : 'black'}` }}>
        {value.icon}
      </div>
      <Link href={value.path} passHref>
        <a>
          <Typography
            color={darkMode ? theme.colors.white : theme.colors.black}
            align="left"
            font="bold"
            size={theme.fontSizes.display}
          >
            {value.title}
          </Typography>
        </a>
      </Link>
    </motion.li>
  );
};
