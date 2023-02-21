import Avatar, { AvatarStyle } from "./avatar";

export { default as Avatar, AvatarStyle } from "./avatar";

import { default as PieceComponent } from "./avatar/piece";
import { OptionProvider } from "./options/OptionContext";

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
    <OptionProvider>
      <Avatar avatarStyle="circle" />
    </OptionProvider>
  );
}
