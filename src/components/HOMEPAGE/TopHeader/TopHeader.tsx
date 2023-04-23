import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Cloudhomebutton } from '../Cloudhomebutton/Cloudhomebutton';
import classes from './TopHeader.module.css';

interface Props {
  className?: string;
  classes?: {
    _3CDA5BFBEEF449569754DC2B629DF5?: string;
    cC38524E53914421AC5214BE5CA56F?: string;
    root?: string;
  };
}
/* @figmaId 123:128 */
export const TopHeader: FC<Props> = memo(function TopHeader(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.cOLLECTION}>COLLECTION</div>
      <div className={classes.mINT}>MINT</div>
      <div className={classes.fAQ}>FAQ</div>
      <div className={classes.mENU}>MENU</div>
      <div className={classes.line3}></div>
      <div className={classes.line4}></div>
      <div className={classes.line5}></div>
      <div
        className={`${props.classes?._3CDA5BFBEEF449569754DC2B629DF5 || ''} ${classes._3CDA5BFBEEF449569754DC2B629DF5}`}
      ></div>
      <Cloudhomebutton
        className={classes.cloudhomebutton}
        classes={{
          cC38524E53914421AC5214BE5CA56F: `${props.classes?.cC38524E53914421AC5214BE5CA56F || ''} ${
            classes.cC38524E53914421AC5214BE5CA56F
          }`,
        }}
      />
    </div>
  );
});
