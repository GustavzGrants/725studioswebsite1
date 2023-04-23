import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Cloudhomebutton.module.css';

interface Props {
  className?: string;
  classes?: {
    cC38524E53914421AC5214BE5CA56F?: string;
    root?: string;
  };
}
/* @figmaId 146:118 */
export const Cloudhomebutton: FC<Props> = memo(function Cloudhomebutton(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div
        className={`${props.classes?.cC38524E53914421AC5214BE5CA56F || ''} ${classes.cC38524E53914421AC5214BE5CA56F}`}
      ></div>
    </button>
  );
});
