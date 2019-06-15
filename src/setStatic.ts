import { ComponentType } from 'react';

/**
 * Assign a value to a static property on the base component.
 */
const setStatic = (key: string, value: unknown) => <
  T extends ComponentType<unknown>
>(
  BaseComponent: T
): T => Object.assign(BaseComponent, { [key]: value });

export default setStatic;
