import * as React from "react";

import Avatar, { AvatarStyle } from "./avatar";
import { OptionContext, allOptions } from "./options";

export { default as Avatar, AvatarStyle } from "./avatar";

import { default as PieceComponent } from "./avatar/piece";

export interface Props {
  avatarStyle: string;
  className?: string;
  style?: React.CSSProperties;
  topType?: string;
  accessoriesType?: string;
  hairColor?: string;
  facialHairType?: string;
  facialHairColor?: string;
  clotheType?: string;
  clotheColor?: string;
  graphicType?: string;
  eyeType?: string;
  eyebrowType?: string;
  mouthType?: string;
  skinColor?: string;
  pieceType?: string;
  pieceSize?: string;
  viewBox?: string;
}
export default function AvatarComponent({
  avatarStyle,
  style,
  pieceType,
  pieceSize,
  viewBox,
}: Props) {
  return (
    <PieceComponent
      avatarStyle={avatarStyle as AvatarStyle}
      style={{
        width: "250px",
        height: "250px",
      }}
      pieceType={pieceType}
      pieceSize={pieceSize}
      viewBox={"0 0 264 280"}
    />
  );
}
