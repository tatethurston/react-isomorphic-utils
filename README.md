# Rreact Isomorphic Utils

<blockquote>Toolkit for writing React apps that run on the client (CSR) and the server (SSR)</blockquote>

<br />

<a href="https://www.npmjs.com/package/react-isomorphic-utils">
  <img src="https://img.shields.io/npm/v/react-isomorphic-utils.svg">
</a>
<a href="https://github.com/tatethurston/react-isomorphic-utils/blob/master/LICENSE">
  <img src="https://img.shields.io/npm/l/react-isomorphic-utils.svg">
</a>
<a href="https://bundlephobia.com/result?p=react-isomorphic-utils">
  <img src="https://img.shields.io/bundlephobia/minzip/react-isomorphic-utils">
</a>
<a href="https://www.npmjs.com/package/react-isomorphic-utils">
  <img src="https://img.shields.io/npm/dy/react-isomorphic-utils.svg">
</a>
<a href="https://github.com/tatethurston/react-isomorphic-utils/actions/workflows/ci.yml">
  <img src="https://github.com/tatethurston/react-isomorphic-utils/actions/workflows/ci.yml/badge.svg">
</a>

## What is this? 🧐

A collection of React hooks and components for writing isomorphic applications.

## Examples 🚀

### ClientOnly

A component that prevents server side rendering of its' children

```jsx
// 'Client Only!' will only be rendered client side
<ClientOnly>
  <div>Client Only!</div>
</ClientOnly>
```

`ClientOnly` optionally accepts a `placeholder` prop which will be rendered in place of the children on the server.

```jsx
// 'Loading...' will be rendered on the server, and then 'Client Only!' will be rendered when JS boots on the client.
<ClientOnly placeholder={<div>Loading...</div>}>
  <div>Client Only!</div>
</ClientOnly>
```

### useJSEnabled

Returns true when JS has booted on the client. This can be used to implement progressive enhancement.

```jsx
const jsEnabled = useJSEnabled();

return <button disabled={jsEnabled} onClick={openModal} />;
```

Above, the button will initially render in a disabled state, and when JS boots the button will become interactive.

## Installation & Usage 📦

1. Add this package to your project:
   - `yarn add react-isomorphic-utils`

Just trying things out or want to skip the build step? Use the unpkg URL:

```
<script src="https://unpkg.com/react-isomorphic-utils/dist/index.production.js"></script>
```

## Contributing 👫

PR's and issues welcomed! For more guidance check out [CONTRIBUTING.md](https://github.com/tatethurston/react-isomorphic-utils/blob/master/CONTRIBUTING.md)

## Licensing 📃

See the project's [MIT License](https://github.com/tatethurston/react-isomorphic-utils/blob/master/LICENSE).
