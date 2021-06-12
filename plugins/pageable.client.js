import Pageable from 'pageable';

export default ({ app }, inject) => {
  inject('pageable', (querySelector) => new Pageable(querySelector));
};
