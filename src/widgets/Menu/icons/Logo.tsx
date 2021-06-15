import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  if(isDark){
    return (
      <Svg viewBox="0 0 125 26" {...props}>
        <image width="125" height="26" href="/images/bunnymoon/LogoTextDark.png"/>
      </Svg>
    );
    }
  return (
    <Svg viewBox="0 0 125 26" {...props}>
      <image width="125" height="26" href="/images/bunnymoon/LogoTextWhite.png"/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
