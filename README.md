# React components library

![gh-pages CD](https://github.com/jeremie-gauthier/react-components/actions/workflows/deploy.yml/badge.svg)

This is a personal project that I work on for fun.

I aim to reproduce UI components from game's menus that I love the most.

Check out the [live version](https://jeremie-gauthier.github.io/react-components/)!

## Technical

### Tools

For this project I use the awesome [Storybook](https://storybook.js.org/) library to help me organize and document my components.

It uses the [Vite builder](https://vitejs.dev/) with [SWC](https://swc.rs/) under the hood.

### CI/CD

The project contains **a single CD workflow**:

1. [GH-Pages CD](.github/workflows/deploy.yml): is a **CD workflow** that is responsible of **deploying the [static website for documentation](https://jeremie-gauthier.github.io/react-components/)**. The documentation is hosted on [Github Pages](https://pages.github.com/).
   _This workflow runs whenever a change is made to the project and pushed to the `main` branch._

## Author

[jergauth](https://jergauth.fr)
