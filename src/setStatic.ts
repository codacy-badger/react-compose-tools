import { ComponentType } from 'react';

/**
 * Assign a value to a static property on the base component.
 */
const setStatic = (key: string, value: any) => <T extends ComponentType<any>>(
  BaseComponent: T
): T => Object.assign(BaseComponent, { [key]: value });

export default setStatic;
