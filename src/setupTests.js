// jest-dom adds custom jest matchers for asserting on DOM nodes.
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// React Router 7 relies on TextEncoder, which the jsdom version bundled with react-scripts lacks.
Object.assign(global, { TextEncoder, TextDecoder });
