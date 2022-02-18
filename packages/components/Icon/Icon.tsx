import React from 'react';
import styled from 'styled-components';

interface IconProps {
  id: string;
  width?: number;
  height?: number;
  color?: string | null;
}

const Icon: React.FC<IconProps> = ({
  id,
  width,
  height,
  color,
}: IconProps): JSX.Element | null => {
  const data: any = {
    logo: {
      content: (
        <>
          <g fill="none">
            <circle cx="50" cy="50" r="50" fill={color || '#000'} />
            <path d="M12.5 105 50 20l21 48h-6L50 33l-37.5 72Z" fill="#fff" />
          </g>
        </>
      ),
      width: 100,
      height: 105,
    },
    githubM: {
      content: (
        <>
          <g fill="none">
            <g filter="url(#a1git)">
              <path
                d="m0 92 .355361-31.8048C.71539 27.9726 26.4642 1.78871 58.6763.88893L90.5 0l33.447.923948c31.96.882882 57.614 26.672152 58.328 58.636652L183 92l-.711 32.151c-.717 32.483-27.161 58.493-59.652 58.673L91 183l-30.989-.172C27.2628 182.646.709817 156.238.347975 123.492L0 92Z"
                fill="url(#b1git)"
              />
            </g>
            <g filter="url(#c1git)">
              <path
                d="M55.1706 31.2251c-3.9603 8.2627-2.2002 17.2139-.8251 20.6567-7.9195 6.9416-8.526 19.4169-7.8394 24.7869 1.2376 26.6473 22.9636 33.0503 34.4454 33.2573-3.3011 2.644-4.2625 7.85-4.3306 10.122-1.8151 1.487-5.9817 2.479-7.8381 2.479-7.5905.661-12.1009-3.719-13.4072-5.991-.9626-2.272-4.0841-7.312-8.8695-9.295-4.7853-1.983-6.9442-.964-7.4255-.207-.275.757 0 2.603 3.3003 3.925 3.3002 1.322 6.8755 8.263 8.2506 11.568 3.6303 10.576 18.5639 10.053 25.577 8.469V140c0 5.523 4.4771 10 10 10h17.7465c5.523 0 9.999-4.476 10.015-9.999.024-8.149.079-17.244.191-19.953.165-3.966-2.955-7.987-4.536-9.502v-.62c28.052-2.314 34.515-23.1355 34.24-33.2573.206-1.5837.33-6.2797-.825-12.394-1.155-6.1144-5.157-10.8104-7.013-12.3941 3.465-7.7669.756-17.0754-1.031-20.6555-5.941-1.4863-15.952 4.7514-20.214 8.0561-16.3367-4.7914-32.7968-1.9964-38.9848 0-11.2208-7.4364-18.4264-8.4693-20.6266-8.0561Z"
                fill="#fff"
              />
            </g>
            <defs>
              <filter
                id="a1git"
                x="0"
                y="-5"
                width="183"
                height="188"
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
                <feOffset dy="-5" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                <feBlend in2="shape" result="effect1_innerShadow_0_1" />
              </filter>
              <filter
                id="c1git"
                x="39"
                y="30"
                width="105"
                height="121"
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
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend in2="shape" result="effect1_innerShadow_0_1" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
                <feBlend
                  in2="effect1_innerShadow_0_1"
                  result="effect2_innerShadow_0_1"
                />
              </filter>
              <linearGradient
                id="b1git"
                x1="92"
                y1="-58.5"
                x2="91.5"
                y2="183"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#505050" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </g>
        </>
      ),
      width: 183,
      height: 183,
    },
    instagramM: {
      content: (
        <g fill="none">
          <g filter="url(#a)">
            <path
              d="m3 95 .35536-31.8048C3.71539 30.9726 29.4642 4.78871 61.6763 3.88893L93.5 3l33.447.92395c31.96.88288 57.614 26.67215 58.328 58.63665L186 95l-.711 32.151c-.717 32.483-27.161 58.493-59.652 58.673L94 186l-30.989-.172c-32.7482-.182-59.30118-26.59-59.66303-59.336L3 95Z"
              fill="url(#b)"
              // Backgound gradient
              opacity="1"
            />
          </g>
          <path
            d="m3 95 .35536-31.8048C3.71539 30.9726 29.4642 4.78871 61.6763 3.88893L93.5 3l33.447.92395c31.96.88288 57.614 26.67215 58.328 58.63665L186 95l-.711 32.151c-.717 32.483-27.161 58.493-59.652 58.673L94 186l-30.989-.172c-32.7482-.182-59.30118-26.59-59.66303-59.336L3 95Z"
            stroke="#fff"
            strokeWidth="5"
            // The stroke
            opacity="0"
          />
          <g filter="url(#c)">
            <path
              d="M117.5 84.5s-7.5-14-21-15C84 70.5 77.6939 74.5854 75 86"
              stroke="#000"
              strokeWidth="2"
            />
          </g>
          <g filter="url(#d)">
            <circle
              cx="96"
              cy="95"
              r="25"
              stroke="#fff"
              strokeWidth="10"
              shapeRendering="crispEdges"
            />
          </g>
          <g filter="url(#e)">
            <path
              d="M133 64c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7Z"
              fill="#fff"
            />
          </g>
          <g filter="url(#f)">
            <path
              d="m57 43 10.4457-2.8123c1.6955-.4565 3.4437-.6877 5.1995-.6877H111.12c1.581 0 3.156.1874 4.693.5584l8.646 2.0869c2.341.5651 4.561 1.5486 6.553 2.9031l5.034 3.4231c2.917 1.9837 5.258 4.7036 6.785 7.8839L146.5 64"
              stroke="#fff"
              strokeWidth="5"
            />
          </g>
          <g filter="url(#g)">
            <path
              d="M93.2258 38.0008c6.8412-.0246 14.9552.4918 22.7022 1.1869 17.33 1.5548 31.041 15.062 32.757 32.3766.751 7.5804 1.315 15.4977 1.315 22.1919 0 6.5518-.54 14.2758-1.267 21.7088-1.718 17.548-15.752 31.15-33.329 32.538-7.263.574-14.781.997-21.1644.997-5.9398 0-12.8613-.366-19.6458-.879-18.2953-1.384-32.6167-15.994-33.8154-34.302C40.3251 106.895 40 99.817 40 93.7562c0-6.2196.3423-13.5102.8143-20.6065C42.015 55.0962 55.9775 40.585 74.0028 39.0176c6.6369-.5771 13.4073-.9958 19.223-1.0168Z"
              stroke="#fff"
              strokeWidth="10"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="a"
              x=".499756"
              y="-2.50098"
              width="189.001"
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
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
              <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
            <filter
              id="c"
              x="66.0269"
              y="66.4971"
              width="60.3542"
              height="33.7324"
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
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="d"
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
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="e"
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
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="f"
              x="47.3501"
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
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="g"
              x="31"
              y="32"
              width="128"
              height="130"
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
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend in2="shape" result="effect2_innerShadow_0_1" />
            </filter>
            <radialGradient
              id="b"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(152.0003 -259.5004 259.5004 152.0003 3 208)"
            >
              <stop offset=".0837514" stopColor="#FFDC80" />
              <stop offset=".377988" stopColor="#FD1D1D" />
              <stop offset=".672224" stopColor="#C13584" />
              <stop offset=".898925" stopColor="#405DE6" />
            </radialGradient>
          </defs>
        </g>
      ),
      width: 189,
      height: 189,
    },
    moon: {
      content: (
        <>
          <g fill="none">
            <g filter="url(#moon_a)">
              <rect
                x="10"
                y="10"
                width="20"
                height="20"
                rx="10"
                fill="#B8B8B8"
              />
            </g>
            <path
              d="M14 19.3792C14 23.588 17.2674 27 21.2978 27c2.2452 0 4.3119-.977 5.7022-2.57-3.5051.2495-5.6555-.7425-6.9006-2.3188-3.3053-3.9111-1.7985-8.3704-.6319-10.1112C16.3229 12.8481 14 15.8304 14 19.3792Z"
              fill="#656565"
            />
            <defs>
              <filter
                id="moon_a"
                x="0"
                y="0"
                width="40"
                height="40"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="5"
                  result="effect1_foregroundBlur_63_116"
                />
              </filter>
            </defs>
          </g>
        </>
      ),
      width: 40,
      height: 40,
    },
    sun: {
      content: (
        <>
          <g fill="none">
            <g filter="url(#sun_a)">
              <rect
                x="10"
                y="10"
                width="20"
                height="20"
                rx="10"
                fill="#FFEF9A"
              />
            </g>
            <g filter="url(#sun_b)">
              <path
                d="M27.8598 20.5c0 4.1421-3.3265 7.5-7.4299 7.5C16.3265 28 13 24.6421 13 20.5s3.3265-7.5 7.4299-7.5c4.1034 0 7.4299 3.3579 7.4299 7.5Z"
                fill="url(#c)"
              />
            </g>
            <defs>
              <filter
                id="sun_a"
                x="0"
                y="0"
                width="40"
                height="40"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="5"
                  result="effect1_foregroundBlur_64_119"
                />
              </filter>
              <filter
                id="sun_b"
                x="13"
                y="13"
                width="14.8599"
                height="17"
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
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend in2="shape" result="effect1_innerShadow_64_119" />
              </filter>
              <linearGradient
                id="c"
                x1="19.3013"
                y1="24.5823"
                x2="25.5016"
                y2="13.8096"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E38800" />
                <stop offset="1" stopColor="#FFDD2D" />
              </linearGradient>
            </defs>
          </g>
        </>
      ),
      width: 40,
      height: 40,
    },
  };

  const icon = data[id];
  if (!icon) {
    return null;
  }

  return (
    <Wrapper width={width || icon.width} height={height || icon.height}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${icon.width} ${icon.height}`}
      >
        {icon.content}
      </svg>
    </Wrapper>
  );
};

export default Icon;

export const Wrapper = styled.div<{ width: number; height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
