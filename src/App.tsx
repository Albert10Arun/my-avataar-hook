import { useContext, useState } from "react";
import Avatar, { AvatarStyle } from "./avatar";

export { default as Avatar, AvatarStyle } from "./avatar";

import { default as PieceComponent } from "./avatar/piece";
import AvatarForm from "./AvatarForm";
import { allOptions } from "./options";
import { OptionContext, OptionProvider } from "./options/OptionContext";

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
    <OptionProvider options={allOptions}>
      <Avatar avatarStyle="circle" />
      <AvatarForm />
    </OptionProvider>
  );
}
