import { setDisplayName } from '../';

describe('setDisplayName', () => {
  test('should set the `displayName` property on the base component', () => {
    const BaseComponent = () => null;
    const NewComponent = setDisplayName('Test')(BaseComponent);

    expect(NewComponent).toHaveProperty('displayName', 'Test');
  });
});
