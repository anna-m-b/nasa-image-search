import ResultImage from '../components/ResultImage';
import { render } from '@testing-library/react';

describe('ResultImage', () => {
  const validProps = {
    url: 'https://via.placeholder.com/200',
    description: 'test title',
    linkToOriginal: 'https://via.placeholder.com/500',
  };
  test('it renders correctly', () => {
    const { asFragment } = render(<ResultImage {...validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('it renders props correctly', () => {
    beforeEach(() => {
      render(<ResultImage {...validProps} />);
    });
    test('image src is set to url prop', () => {
      const image = document.querySelector('img');
      expect(image.src).toEqual(validProps.url);
    });
    test('image alt text is set to description prop', () => {
      const image = document.querySelector('img');
      expect(image.alt).toEqual(validProps.description);
    });
    test('anchor tag has its href set to linkToOriginal prop', () => {
      const anchor = document.querySelector('a');
      expect(anchor.href).toEqual(validProps.linkToOriginal);
    });

  });
});
