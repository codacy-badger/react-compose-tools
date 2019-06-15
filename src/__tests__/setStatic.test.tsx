import { setStatic } from '../';

describe('setStatic', () => {
  test('should set a static property on the base component', () => {
    const BaseComponent = () => null;
    const NewComponent = setStatic('displayName', 'Test')(BaseComponent);

    expect(NewComponent).toBeInstanceOf(Function);
    expect(NewComponent).toHaveProperty('displayName', 'Test');
  });
});
