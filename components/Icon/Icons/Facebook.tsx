import { useEffect, useState } from 'react';

export interface IconProps {}

export const Facebook: React.FC<IconProps> = ({}: IconProps) => {
  // States
  const [hover, setHover] = useState(false);
  return (
    <g
      fill="none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <g filter="url(#a)">
          <path
            d="m3 95 .355-31.805C3.715 30.973 29.465 4.79 61.676 3.89L93.5 3l33.447.924c31.96.883 57.614 26.672 58.328 58.637L186 95l-.711 32.151c-.717 32.483-27.161 58.493-59.652 58.673L94 186l-30.989-.172c-32.748-.182-59.301-26.59-59.663-59.336L3 95Z"
            fill="url(#b)"
          />
        </g>
      )}

      {!hover && (
        <path
          d="m3 95 .355-31.805C3.715 30.973 29.465 4.79 61.676 3.89L93.5 3l33.447.924c31.96.883 57.614 26.672 58.328 58.637L186 95l-.711 32.151c-.717 32.483-27.161 58.493-59.652 58.673L94 186l-30.989-.172c-32.748-.182-59.301-26.59-59.663-59.336L3 95Z"
          stroke={hover ? 'transparent' : '#A6A6A6'}
          strokeWidth="5"
        />
      )}

      {hover && (
        <g filter="url(#c)">
          <path
            d="M124.877 56.203V41.238c0-.374-.149-1.347-.748-2.245-.374-.748-4.491-1.621-6.736-1.87-2.246-.375-8.233-1.123-14.221-1.123-5.988 0-9.48.998-10.479 1.496-1.87.749-5.763 3.368-9.356 7.857-3.592 4.49-4.24 9.923-4.116 12.08v15.98c0 1.197-.749 1.496-1.123 1.496H67.994c-.749 0-2.32.15-2.62.748-.3.599-.374 1.497-.374 1.871v17.21c0 .623.3 1.945 1.497 2.245 1.497.374 9.356 0 11.227 0 1.497 0 1.871.748 1.871 1.122v43.024c0 1.123 1.123 1.871 5.988 1.871h16.84c2.395 0 2.994-1.497 2.994-2.245V98.853c0-1.796 1.747-1.995 2.62-1.87 3.742.124 11.601.299 13.098 0 1.497-.3 2.121-1.372 2.245-1.871l2.246-14.965c0-.374.374-1.497.374-3.367 0-1.87-1.123-1.87-2.245-1.87h-16.467c-1.197 0-1.746-.75-1.871-1.123-.249-2.993-.599-9.653 0-12.346.599-2.694 2.745-3.368 3.743-3.368h13.098c1.122 0 2.619.225 2.619-1.87Z"
            fill={hover ? '#fff' : 'transparent'}
          />
        </g>
      )}

      <g filter="url(#d)">
        <path
          d="M124.877 56.162V41.227c0-.373-.149-1.344-.748-2.24-.374-.747-4.491-1.618-6.736-1.867-2.246-.373-8.233-1.12-14.221-1.12-5.988 0-9.48.996-10.479 1.493-1.87.747-5.763 3.36-9.356 7.841-3.592 4.48-4.24 9.904-4.116 12.055v15.949c0 1.195-.749 1.493-1.123 1.493H67.994c-.749 0-2.32.15-2.62.747-.3.597-.374 1.493-.374 1.867V94.62c0 .622.3 1.942 1.497 2.24 1.497.374 9.356 0 11.227 0 1.497 0 1.871.747 1.871 1.12v51.153c0 1.12 1.123 1.867 5.988 1.867h16.84c2.395 0 2.994-1.493 2.994-2.24V98.727c0-1.792 1.747-1.991 2.62-1.867 3.742.125 11.601.3 13.098 0 1.497-.298 2.121-1.369 2.245-1.867l2.246-14.935c0-.373.374-1.493.374-3.36 0-1.867-1.123-1.867-2.245-1.867h-16.467c-1.197 0-1.746-.747-1.871-1.12-.249-2.987-.599-9.633 0-12.321.599-2.689 2.745-3.36 3.743-3.36h13.098c1.122 0 2.619.223 2.619-1.868Z"
          fill={hover ? '#fff' : '#A6A6A6'}
        />
      </g>

      <defs>
        <filter
          id="a"
          x=".5"
          y="-4.501"
          width="188"
          height="193.001"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
        <filter
          id="c"
          x="60"
          y="36"
          width="81"
          height="127"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5" dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="d"
          x="65"
          y="35"
          width="61"
          height="116"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" />
          <feBlend in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
        <linearGradient
          id="b"
          x1="95"
          y1="-55.5"
          x2="94.5"
          y2="186"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E0FF" />
          <stop offset="1" stopColor="#0077E3" />
        </linearGradient>
      </defs>
    </g>
  );
};
