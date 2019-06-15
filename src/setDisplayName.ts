import setStatic from './setStatic';

/**
 * Assign a value to the static `displayName` property on the base component.
 */
const setDisplayName = (displayName: string) =>
  setStatic('displayName', displayName);

export default setDisplayName;
