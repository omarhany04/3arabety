import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { I18nProvider } from './i18n';

const renderApp = () =>
  render(
    <I18nProvider>
      <App />
    </I18nProvider>
  );

beforeEach(() => {
  window.localStorage.clear();
  window.scrollTo = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
});

test('opens in Arabic (RTL) by default', () => {
  renderApp();
  expect(document.documentElement.lang).toBe('ar');
  expect(document.documentElement.dir).toBe('rtl');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('لخدمة سيارتك');
});

test('switches the whole site to English', () => {
  renderApp();
  fireEvent.click(screen.getAllByRole('button', { name: 'تغيير اللغة إلى الإنجليزية' })[0]);
  expect(document.documentElement.lang).toBe('en');
  expect(document.documentElement.dir).toBe('ltr');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Your Complete Car Service Solution');
  expect(window.localStorage.getItem('3arabety.lang')).toBe('en');
});
