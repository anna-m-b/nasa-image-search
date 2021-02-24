import ResultThumb from '../components/ResultThumb';
import { render } from '@testing-library/react';

describe('ResultThumb', () => {
  const validProps = {
    thumb: 'https://via.placeholder.com/200',
    description: 'test title',
    id: 'P12345',
    mediaType: 'image'
  };
  test('it renders correctly', () => {
    const { asFragment } = render(<ResultThumb {...validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('it renders props correctly', () => {
    beforeEach(() => {
      render(<ResultThumb {...validProps} />);
    });
    test('image src is set to thumb prop', () => {
      const image = document.querySelector('img');
      expect(image.src).toEqual(validProps.thumb);
    });
    test('image alt text is set to description prop', () => {
      const image = document.querySelector('img');
      expect(image.alt).toEqual(validProps.description);
    });
    test('anchor tag href contains id prop', () => {
      const anchor = document.querySelector('a');
      expect(anchor.href).toEqual(
        `http://images-assets.nasa.gov/image/${validProps.id}/${validProps.id}~orig.jpg`
      );
    });
  });
});
