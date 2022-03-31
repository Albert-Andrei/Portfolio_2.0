import { useEffect, useState } from 'react';

export interface IconProps {}

export const Instagram: React.FC<IconProps> = ({}: IconProps) => {
  // States
  const [hover, setHover] = useState(false);

  return (
    <g
      fill="none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <g filter="url(#insta)">
        <path
          d="m3 95 .355-31.805C3.715 30.973 29.465 4.79 61.676 3.89L93.5 3l33.447.924c31.96.883 57.614 26.672 58.328 58.637L186 95l-.711 32.151c-.717 32.483-27.161 58.493-59.652 58.673L94 186l-30.989-.172c-32.748-.182-59.301-26.59-59.663-59.336L3 95Z"
          fill="url(#instab)"
        />
      </g>
      <path
        d="m3 95 .355-31.805C3.715 30.973 29.465 4.79 61.676 3.89L93.5 3l33.447.924c31.96.883 57.614 26.672 58.328 58.637L186 95l-.711 32.151c-.717 32.483-27.161 58.493-59.652 58.673L94 186l-30.989-.172c-32.748-.182-59.301-26.59-59.663-59.336L3 95Z"
        stroke={hover ? 'transparent' : '#A6A6A6'}
        strokeWidth="5"
      />
      <g filter="url(#instac)">
        <path
          d="M117.5 84.5s-7.5-14-21-15C84 70.5 77.694 74.585 75 86"
          stroke="#FFF"
          strokeWidth="2"
        />
      </g>

      <g filter={hover ? 'url(#instad)' : 'none'}>
        <circle
          cx="96"
          cy="95"
          r="25"
          stroke={hover ? '#fff' : '#A6A6A6'}
          strokeWidth="10"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter={hover ? 'url(#instae)' : 'none'}>
        <path
          d="M133 64a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          fill={hover ? '#fff' : '#A6A6A6'}
        />
      </g>
      {hover && (
        <g filter="url(#instaf)">
          <path
            d="m57 43 10.446-2.812a20 20 0 0 1 5.2-.688h38.474c1.581 0 3.156.187 4.693.558l8.646 2.087a20 20 0 0 1 6.553 2.903l5.034 3.423a20.007 20.007 0 0 1 6.785 7.884L146.5 64"
            stroke={hover ? '#fff' : '#A6A6A6'}
            strokeWidth="5"
          />
        </g>
      )}
      <g filter={hover ? 'url(#instag)' : 'none'}>
        <rect
          x="40"
          y="39"
          width="110"
          height="110"
          rx="35"
          stroke={hover ? '#fff' : '#A6A6A6'}
          strokeWidth="10"
          shapeRendering="crispEdges"
        />
      </g>
      {hover && (
        <defs>
          <filter
            id="insta"
            x=".5"
            y="-2.501"
            width="189"
            height="191.001"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="-3" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
            <feBlend in2="shape" result="effect1_innerShadow_94_39" />
          </filter>
          <filter
            id="instac"
            x="66.027"
            y="66.497"
            width="60.354"
            height="33.733"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="6" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_94_39"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_94_39"
              result="shape"
            />
          </filter>
          <filter
            id="instad"
            x="63"
            y="64"
            width="70"
            height="70"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="4" />
            <feGaussianBlur stdDeviation="2.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_94_39"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_94_39"
              result="shape"
            />
          </filter>
          <filter
            id="instae"
            x="116"
            y="55"
            width="24"
            height="24"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="3" />
            <feGaussianBlur stdDeviation="2.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_94_39"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_94_39"
              result="shape"
            />
          </filter>
          <filter
            id="instaf"
            x="47.35"
            y="32"
            width="110.404"
            height="46.082"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_94_39"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_94_39"
              result="shape"
            />
          </filter>
          <filter
            id="instag"
            x="31"
            y="33"
            width="128"
            height="129"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_94_39"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_94_39"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
            <feBlend in2="shape" result="effect2_innerShadow_94_39" />
          </filter>
          <radialGradient
            id="instab"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(-59.641 182.945 101.383) scale(300.74)"
          >
            <stop offset=".084" stopColor="#FFDC80" />
            <stop offset=".378" stopColor="#FD1D1D" />
            <stop offset=".672" stopColor="#C13584" />
            <stop offset=".899" stopColor="#405DE6" />
          </radialGradient>
        </defs>
      )}
    </g>
  );
};
