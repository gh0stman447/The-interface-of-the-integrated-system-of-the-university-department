import React, { forwardRef } from 'react';
import { PlayListContextMenuItem } from './PlayListContextMenuItem';
import { PlayListContextMenuItemWithSubmenu } from './PlayListContextMenuItemWithSubmenu';

export const PlayListContextMenu = forwardRef(({ menuItems, classes }, ref) => {
  return (
    <ul className={classes} ref={ref}>
      {menuItems.map(({ label, subMenuItems }) => {
        if (subMenuItems) {
          return (
            <PlayListContextMenuItemWithSubmenu key={label} subMenuItems={subMenuItems}>
              {label}
            </PlayListContextMenuItemWithSubmenu>
          );
        }

        return <PlayListContextMenuItem key={label}>{label}</PlayListContextMenuItem>;
      })}
    </ul>
  );
});
