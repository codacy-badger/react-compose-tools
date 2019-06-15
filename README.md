# react-compose-tools

**A successor to [Recompose](https://github.com/acdlite/recompose) for a React Hooks world.**

A library providing higher-order functions and utilities for composing React components.

> ![](https://img.shields.io/badge/status-initial%20development-important.svg)
> 
> **This project is newly created and not yet complete.**
>
> Please do not link to this repository in its current state, as things may change and break. When an initial version is ready, it will be published on npm.

### How does this library differ from Recompose?

react-compose-tools is a subset of the Recompose library designed to complement modern React features.

Unlike Recompose, react-compose-tools has **zero dependencies** and exports **first-party TypeScript definitions**.

react-compose-tools doesn't include original Recompose utilities that are now implementable with Hooks or relate to features that are not in React core. This includes:

- No *state* or *context* utilities.
- No *PropTypes* utilities.
- No *observable* utilities.

For more, see the API documentation.

## API overview (planned)

> To view progress on the initial Recompose migration, please refer to [this project board](https://github.com/huntie/react-compose-tools/projects/1).

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
