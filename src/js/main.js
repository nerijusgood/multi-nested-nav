'use strict';
import domready from 'domready';
import Nav from './modules/Nav';

domready(() => {
  new Nav(document.getElementById('js-nav'));
});
