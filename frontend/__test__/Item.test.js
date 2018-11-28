import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
  id: 'ABC123',
  description: 'A fake item to test',
  image: 'fakeitem.jpg',
  largeImage: 'fakeItemLarge.jpg',
  price: 100000,
  title: 'A Fake Item',
  user: 'cdlnfosngus84ryefuhwsnkdcn',
};

describe('<Item />', () => {
  // it('renders <Item /> properly', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);

  //   // console.log(wrapper.debug());
  //   const PriceTag = wrapper.find('PriceTag');

  //   expect(PriceTag.children().text()).toBe('$1,000');
  //   expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
  // });

  // it('renders the image correctly', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);

  //   const img = wrapper.find('img');

  //   // my way
  //   expect(img.html()).toBe(`<img src="${fakeItem.image}" alt="${fakeItem.title}"/>`);
  //   expect(img.props()).toEqual({ src: fakeItem.image, alt: fakeItem.title });
  //   // Wes Way
  //   expect(img.props().src).toBe(fakeItem.image);
  //   expect(img.props().alt).toBe(fakeItem.title);
  // });

  // it('renders out the buttons properly', () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);

  //   const buttonList = wrapper.find('.buttonList');
  //   expect(buttonList.children()).toHaveLength(3);
  //   expect(buttonList.find('Link')).toHaveLength(1);
  //   expect(buttonList.find('DeleteItem').exists()).toBe(true);
  //   expect(buttonList.find('AddToCart').exists()).toBeTruthy();
  // });

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
