import { ComponentType } from 'react';

/**
 * Return the display name of a React component. Falls back to 'Component'.
 */
const getDisplayName = (Component: ComponentType<unknown> | string) => {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

export default getDisplayName;
