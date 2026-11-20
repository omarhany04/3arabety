import common from './common';
import home from './home';
import products from './products';
import shop from './shop';
import services from './services';
import pages from './pages';

const en = {
  ...common,
  home,
  products,
  ...shop,
  ...services,
  ...pages,
};

export default en;
