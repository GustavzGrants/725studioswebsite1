import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BlackWhiteTopImage_Property1De.module.css';

interface Props {
  className?: string;
  classes?: {
    a447B3F84B3F45398E4690CB18CC8A?: string;
    root?: string;
  };
}
/* @figmaId 114:17 */
export const BlackWhiteTopImage_Property1De: FC<Props> = memo(function BlackWhiteTopImage_Property1De(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div
        className={`${props.classes?.a447B3F84B3F45398E4690CB18CC8A || ''} ${classes.a447B3F84B3F45398E4690CB18CC8A}`}
      ></div>
    </div>
  );
});
