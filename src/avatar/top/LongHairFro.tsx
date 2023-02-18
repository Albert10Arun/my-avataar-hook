import * as React from "react";
import { uniqueId } from "lodash";

import FacialHair from "./facialHair";
import HairColor from "./HairColor";
type Props = {
  children: JSX.Element;
};
export default function LongHairFro({ children }: Props) {
  const optionValue = "LongHairFro";
  const mask1 = uniqueId("react-mask-");
  const mask2 = uniqueId("react-mask-");
  const path1 = uniqueId("react-path-");
  const path2 = uniqueId("react-path-");
  const path3 = uniqueId("react-path-");

  return (
    <g id="Top" strokeWidth="1" fillRule="evenodd">
      <defs>
        <rect id={path1} x="0" y="0" width="264" height="280" />
        <path
          d="M180.665797,104.495381 C181.518431,106.144109 182,108.015816 182,110 L182,123 C182,129.018625 177.569129,134.002364 171.791419,134.867187 C170.048193,155.114792 157.530782,172.282984 140,180.610951 L140,190.054182 C143.832093,191.949549 148.058707,193 152.5,193 C160.121477,193 167.110765,189.906604 172.559029,184.758484 C174.020475,184.918263 175.501874,185 177,185 C195.390093,185 211.259672,172.683502 218.621514,154.88375 C224.900145,149.813883 229,141.454126 229,132 C229,130.214987 228.853847,128.468986 228.57447,126.776775 C230.785923,120.339137 232,113.331199 232,106 C232,93.1344627 228.26103,81.2644681 221.954258,71.7251464 C221.984605,71.1545437 222,70.5793265 222,70 C222,59.0433596 216.493437,49.5565783 208.470603,44.9571334 C201.160166,27.369138 185.740722,14.9905991 167.696954,14.0567347 C163.273738,9.07458291 157.201041,6 150.5,6 C149.549121,6 148.610894,6.0619088 147.688236,6.18239195 C137.909703,2.19640473 127.211351,0 116,0 C104.788649,0 94.0902965,2.19640473 84.3117637,6.18239195 C83.3891064,6.0619088 82.4508793,6 81.5,6 C74.7989589,6 68.7262617,9.07458291 64.3030458,14.0567347 C46.2592779,14.9905991 30.8398341,27.369138 23.5293968,44.9571334 C15.5065631,49.5565783 10,59.0433596 10,70 C10,70.5793265 10.0153947,71.1545437 10.0457422,71.7251464 C3.73896962,81.2644681 0,93.1344627 0,106 C0,113.331199 1.21407678,120.339137 3.42552978,126.776775 C3.14615333,128.468986 3,130.214987 3,132 C3,141.454126 7.0998554,149.813883 13.3784857,154.88375 C20.7403278,172.683502 36.6099075,185 55,185 C56.4981261,185 57.9795252,184.918263 59.4409604,184.758485 C64.8892346,189.906604 71.878523,193 79.5,193 C83.9412925,193 88.1679073,191.949549 92,190.054182 L92,180.610951 C74.4692178,172.282984 61.9518066,155.114792 60.2085808,134.867187 C54.4308707,134.002364 50,129.018625 50,123 L50,110 C50,108.017039 50.4809755,106.146415 51.3326281,104.498428 C54.034525,103.696079 57.0103265,101.444735 59.9905531,98.1675057 C59.9937016,98.1669748 59.9968506,98.1664452 60,98.1659169 L60,98.1571139 C66.866448,90.6014009 73.7548744,77.602262 77.3694073,64.3345491 C88.4864044,66.0717584 101.905207,67.0867832 116.353789,67.0867832 C130.513023,67.0867832 143.683308,66.1120054 154.66752,64.4380466 C158.288087,77.6642508 165.154277,90.6101259 172,98.1475774 L172,98.1659169 C172.006563,98.167018 172.013125,98.1681244 172.019685,98.1692362 C174.995621,101.441388 177.967097,103.690532 180.665797,104.495381 Z"
          id={path2}
        />
        <path
          d="M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z"
          id={path3}
        />
      </defs>
      <mask id={mask1} fill="white">
        <use xlinkHref={"#" + path1} />
      </mask>
      <g id="Mask" />
      <g id="Top/Long-Hair/Fro" mask={`url(#${mask1})`}>
        <g transform="translate(-1.000000, 0.000000)">
          <path
            d="M67,109.777572 C76.0375502,108.717226 88.9217814,89.3309188 94.3694073,69.3345491 C105.486404,71.0717584 118.905207,72.0867832 133.353789,72.0867832 C147.513023,72.0867832 160.683308,71.1120054 171.66752,69.4380466 C177.129582,89.3913728 189.978479,108.706688 199,109.77655 L199,89 C199,66.1159733 187.353465,45.9521405 169.664405,34.1125124 C169.136033,36.5946509 168.784517,39.3353373 168.624132,42.297284 C158.284896,40.892676 146.228147,40.0867832 133.353789,40.0867832 C120.190372,40.0867832 107.88169,40.9292706 97.3896338,42.392803 C97.2315704,39.3922173 96.8778294,36.6175705 96.3431783,34.1074375 C78.6498638,45.9463781 67,66.1127033 67,89 L67,89 L67,109.777572 Z"
            id="Shadow"
            fillOpacity="0.16"
            fill="#000000"
            fillRule="evenodd"
          />
          <g
            id="Hair"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            transform="translate(17.000000, 0.000000)"
          >
            <mask id={mask2} fill="white">
              <use xlinkHref={"#" + path2} />
            </mask>
            <use fill="#314756" xlinkHref={"#" + path2} />
            <HairColor maskID={mask2} />
          </g>
          <FacialHair />
          {children}
        </g>
      </g>
    </g>
  );
}