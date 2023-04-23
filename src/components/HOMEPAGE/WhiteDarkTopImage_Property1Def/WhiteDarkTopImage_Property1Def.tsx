import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './WhiteDarkTopImage_Property1Def.module.css';

interface Props {
  className?: string;
  classes?: {
    _81BD44E16989415BB4FECD8C766788?: string;
    root?: string;
  };
}
/* @figmaId 114:9 */
export const WhiteDarkTopImage_Property1Def: FC<Props> = memo(function WhiteDarkTopImage_Property1Def(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div
        className={`${props.classes?._81BD44E16989415BB4FECD8C766788 || ''} ${classes._81BD44E16989415BB4FECD8C766788}`}
      ></div>
    </div>
  );
});
