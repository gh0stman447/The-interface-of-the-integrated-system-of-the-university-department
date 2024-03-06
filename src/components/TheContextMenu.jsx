import React, { forwardRef } from 'react';
import { TheContextMenuItem } from './TheContextMenuItem';

export const TheContextMenu = forwardRef(
  ({ menuItems, classes, onClick: closeContextMenu }, ref) => {
    return (
      <ul className={classes} ref={ref}>
        {menuItems.map(({ label }) => (
          <TheContextMenuItem key={label} onClick={closeContextMenu}>
            {label}
          </TheContextMenuItem>
        ))}
      </ul>
    );
  },
);
