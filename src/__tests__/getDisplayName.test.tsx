import React, { Component } from 'react';
import { getDisplayName } from '../';

describe('getDisplayName', () => {
  test('should infer name from named component class or function', () => {
    class SomeComponent extends Component {
      render() {
        return null;
      }
    }

    function SomeOtherComponent() {
      return null;
    }

    expect(getDisplayName(SomeComponent)).toBe('SomeComponent');
    expect(getDisplayName(SomeOtherComponent)).toBe('SomeOtherComponent');
  });

  test('should read static displayName property if set', () => {
    class TestClassComponentNamed extends Component {
      static displayName = 'CustomDisplayName';

      render() {
        return null;
      }
    }

    expect(getDisplayName(TestClassComponentNamed)).toBe('CustomDisplayName');
  });

  test('should return "Component" for an anonymous component function', () => {
    expect(getDisplayName(() => null)).toBe('Component');
  });

  test('should return value given if tag name string', () => {
    expect(getDisplayName('div')).toBe('div');
  });
});
