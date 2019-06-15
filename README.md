# react-compose-tools

**A successor to [Recompose](https://github.com/acdlite/recompose) for a React Hooks world.**

A library providing higher-order functions and utilities for composing React components.

### How does this library differ from Recompose?

react-compose-tools is a subset of the Recompose library designed to complement modern React features.

Unlike Recompose, react-compose-tools has **zero dependencies** and exports **first-party TypeScript definitions**.

react-compose-tools doesn't include original Recompose utilities that are now implementable with Hooks or relate to features that are not in React core. This includes:

- No *state* or *context* utilities.
- No *PropTypes* utilities.
- No *observable* utilities.

For more, see the API documentation.

## API overview (planned)

### Higher-order components

- mapProps
- withProps
- defaultProps
- renameProp
- renameProps
- flattenProp
- branch
- renderComponent
- renderNothing
- shouldUpdate
- pure
- onlyUpdateForKeys

### Static property helpers

- setStatic
- setDisplayName

### Utilities

- compose
- getDisplayName
