import React from 'react';
import theme from '@theme/theme';
import { useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
import Typography from '@components/Typography';
import * as Styles from './SkillCard.styles';

interface SkillCardProps {
  title: string;
  description: string;
  subTitle?: string;
  tools?: string;
  devTitle?: string;
  devTools?: string;
  scrollValues: { start: number; end: number };
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  subTitle,
  tools,
  devTitle,
  devTools,
  scrollValues,
}) => {
  // State
  const [contentProgress, setContentProgress] = useState(0);

  const main = useParallax<HTMLDivElement>({
    onProgressChange: (progress) => {
      setContentProgress(progress);
    },
  });

  const rightS = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    // translateX: [100, 0], (show content from side)
    startScroll: scrollValues.start,
    endScroll: scrollValues.end,
    opacity: [0, 1, 'easeInOut'],
  });

  const rightM = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    startScroll: scrollValues.start + 20,
    endScroll: scrollValues.end + 20,
    opacity: [0, 1, 'easeInOut'],
  });

  const rightL = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    startScroll: scrollValues.start + 50,
    endScroll: scrollValues.end + 50,
    opacity: [0, 1, 'easeInOut'],
  });

  return (
    <Styles.SkillCard ref={main.ref}>
      <Styles.Content
        style={{
          opacity:
            contentProgress < 0.7
              ? 1
              : title.toLocaleLowerCase() === 'tools'
              ? 1
              : 0,
        }}
      >
        <Styles.ContentTitle ref={rightS.ref}>
          <Typography font="bold" size={theme.fontSizes.display}>
            {title}
          </Typography>
        </Styles.ContentTitle>
        <div ref={rightM.ref}>
          <Typography spacingBefore={theme.spacings.medium}>
            {description}
          </Typography>
        </div>
        <Styles.SubContent ref={rightL.ref}>
          <Typography
            spacingBefore={theme.spacings.xlarge}
            align="left"
            color={theme.colors.select}
          >
            {subTitle}
          </Typography>
          <Typography spacingBefore={theme.spacings.small / 2}>
            {tools}
          </Typography>
          <Typography
            spacingBefore={theme.spacings.xlarge}
            align="left"
            color={theme.colors.select}
          >
            {devTitle}
          </Typography>
          <Typography spacingBefore={theme.spacings.small / 2}>
            {devTools}
          </Typography>
        </Styles.SubContent>
      </Styles.Content>
    </Styles.SkillCard>
  );
};

export default SkillCard;
