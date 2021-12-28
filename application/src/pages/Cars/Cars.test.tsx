import { Cars } from './Cars';
import { render } from '../../utils/test-utils/test-utils';
import i18n from '../../utils/i18next';

describe('Cars component', () => {
  i18n.init();
  test('render', () => {
    render(<Cars />);
  });
});
