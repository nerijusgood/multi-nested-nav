import { forEach } from '../utils';

export default class Nav {
  constructor () {
    const nav = document.getElementById('js-nav');
    const sub1 = document.querySelectorAll('#js-nav-sub1 > li > a');
    const sub2 = document.querySelectorAll('#js-nav-sub2 > li > a');
    const sub3 = document.querySelectorAll('#js-nav-sub3 > li > a');

    if (sub1.length) {
      forEach(sub1, (i, el) => {
        el.addEventListener('click', this.handleSubClick.bind(this, nav, el), false);
      });
    }

    if (sub2.length) {
      forEach(sub2, (i, el) => {
        el.addEventListener('click', this.handleSubClick.bind(this, nav, el), false);
      });
    }

    if (sub3.length) {
      forEach(sub3, (i, el) => {
        el.addEventListener('click', this.handleSubClick.bind(this, nav, el), false);
      });
    }
  }

  handleSubClick (nav, el, e) {
    e.preventDefault();

    // Check if not back button!
    if (el.classList.contains('Nav-link--back')) {
      el.addEventListener('click', this.handleBackClick.bind(this, nav), false);
      return;
    }

    // Check if next element exist
    if (el.nextSibling !== null) {
      if (nav.classList.contains('Nav-depth-2')) {
        nav.classList.add('Nav-depth-3');
      } else {
        nav.classList.add('Nav-depth-2');
      }

      el.nextSibling.classList.add('isActive');
    } else {
      console.log('not back button & no subs');
    }
  }

  handleBackClick (nav, e) {
    e.preventDefault();

    if (nav.classList.contains('Nav-depth-3')) {
      nav.classList.remove('Nav-depth-3');
    } else {
      nav.classList.remove('Nav-depth-2');
    }
  }
}
