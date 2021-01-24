
// https://storybook.js.org/docs/react/workflows/build-pages-with-storybook
import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/styles/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, {
            numeric: true,
          }),
  },
  layout: 'fullscreen',
};


const AppDecorator = (storyFn) => {
  return (
    <Fragment>
      <GlobalStyle />
      {storyFn()}
    </Fragment>
  );
};

addDecorator(AppDecorator);
