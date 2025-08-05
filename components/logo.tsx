interface LogoProps {
  size?: number
  style?: React.CSSProperties
}

export const Logo = ({ size = 32, style = {} }: LogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <rect width="32" height="32" rx="8" fill="#232C39"/>
    <g>
      <path d="M16 6L25 11.5V20.5L16 26L7 20.5V11.5L16 6Z" fill="#1ED6F5"/>
      <path d="M16 8.236L9 12.382V19.618L16 23.764L23 19.618V12.382L16 8.236ZM16 10.618L21 13.618V18.382L16 21.382L11 18.382V13.618L16 10.618Z" fill="#0A6ED1"/>
    </g>
  </svg>
); 