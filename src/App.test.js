import React from 'react'
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './_helpers';

    test('renders without crashing', () => {
      const div = document.createElement('div');
      render(<Provider store={store} ><App /></Provider>, div);
      unmountComponentAtNode(div);
    });


    