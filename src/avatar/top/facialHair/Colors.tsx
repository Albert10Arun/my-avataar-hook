import * as React from "react";

import { FacialHairColor, Selector } from "../../../options";

export interface Props {
  maskID: string;
}

function makeColor(name: string, color: string) {
  function ColorComponent({ maskID }: Props) {
    return (
      <g id="Color/Hair/Brown" mask={`url(#${maskID})`} fill={color}>
        <g transform="translate(-32.000000, 0.000000)" id="Color">
          <rect x="0" y="0" width="264" height="244" />
        </g>
      </g>
    );
  }
  const anyComponent = ColorComponent as any;
  anyComponent.displayName = name;
  anyComponent.optionValue = name;
  return anyComponent;
}

const Auburn = makeColor("Auburn", "#A55728");
const Black = makeColor("Black", "#2C1B18");
const Blonde = makeColor("Blonde", "#B58143");
const BlondeGolden = makeColor("BlondeGolden", "#D6B370");
const Brown = makeColor("Brown", "#724133");
const BrownDark = makeColor("BrownDark", "#4A312C");
const Platinum = makeColor("Platinum", "#ECDCBF");
const Red = makeColor("Red", "#C93305");

export default function Colors({ maskID }: Props) {
  return (
    <Selector option={FacialHairColor} defaultOption={BrownDark}>
      <Auburn maskID={maskID} />
      <Black maskID={maskID} />
      <Blonde maskID={maskID} />
      <BlondeGolden maskID={maskID} />
      <Brown maskID={maskID} />
      <BrownDark maskID={maskID} />
      <Platinum maskID={maskID} />
      <Red maskID={maskID} />
    </Selector>
  );
}
