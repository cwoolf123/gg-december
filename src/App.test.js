import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { shallow } from 'enzyme';
import SearchBar from './components/SearchBar';

    test('renders without crashing', () => {
      const div = document.createElement('div');
      render(<Provider store={store} ><App /></Provider>, div);
      unmountComponentAtNode(div);
    });


    