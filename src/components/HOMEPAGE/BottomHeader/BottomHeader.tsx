import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BottomHeader.module.css';
import { Rectangle5Icon } from './Rectangle5Icon.js';

interface Props {
  className?: string;
  classes?: {
    _3CDA5BFBEEF449569754DC2B629DF5?: string;
    twitter1?: string;
    instagram1?: string;
    opensea_logo_icon_2482981?: string;
    root?: string;
  };
}
/* @figmaId 146:143 */
export const BottomHeader: FC<Props> = memo(function BottomHeader(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle5}>
        <Rectangle5Icon className={classes.icon} />
      </div>
      <div className={classes.cOPYRIGHT2023ALLRIGHT}>COPYRIGHT © 2023 - ALL RIGHT</div>
      <div className={classes.mINT}>MINT</div>
      <div className={classes.cOLLECTION}>COLLECTION</div>
      <div className={classes.fAQ}>FAQ</div>
      <div className={classes.rOADMAP}>ROADMAP</div>
      <div className={classes.pROJECTS}>PROJECTS</div>
      <div className={classes.cONTACT}>CONTACT</div>
      <div
        className={`${props.classes?._3CDA5BFBEEF449569754DC2B629DF5 || ''} ${classes._3CDA5BFBEEF449569754DC2B629DF5}`}
      ></div>
      <div className={`${props.classes?.twitter1 || ''} ${classes.twitter1}`}></div>
      <div className={`${props.classes?.instagram1 || ''} ${classes.instagram1}`}></div>
      <div className={`${props.classes?.opensea_logo_icon_2482981 || ''} ${classes.opensea_logo_icon_2482981}`}></div>
    </div>
  );
});
