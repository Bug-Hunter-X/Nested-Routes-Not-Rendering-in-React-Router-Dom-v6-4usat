# React Router Dom v6 Nested Route Rendering Issue

This repository demonstrates a problem with nested routes in React Router Dom v6.  The parent route renders correctly, but its child routes do not.  Switching back to version 5.3 resolves the issue.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.

Observe that the nested routes under `/about` and `/contact` do not render their content.  The parent routes render, but the nested routes within are ignored.

## Solution

A potential solution is provided in `AppSolution.js` which involved ensuring correct path declarations and nesting structure within the `Routes` component.