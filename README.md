# BunnyMoon UIkit

[![Version](https://img.shields.io/npm/v/@bunnymoon-libs/uikit)](https://www.npmjs.com/package/@bunnymoon-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@bunnymoon-libs/uikit)](https://www.npmjs.com/package/@bunnymoon-libs/uikit)

BunnyMoon UIkit is a set of React components and hooks used to build pages on BunnyMoonFarm's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @bunnymoon-libs/uikit`

## Setup

### Theme

Before using BunnyMoon UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@bunnymoon-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@bunnymoon-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://bunnymoondev.github.io/bunnymoon-uikit/)
