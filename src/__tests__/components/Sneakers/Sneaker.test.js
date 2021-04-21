import { shallow } from "enzyme";

import Sneaker from "../../../components/Sneakers/Sneaker";

describe("Sneaker", () => {
  let wrapper;
  let attributes = {
    name: "Air Jordan 1",
    price: 99
  };
  let images = [
    {
      title: "full landscape",
      url: "fake-url.com"
    }
  ];
  beforeEach(() => {
    wrapper = shallow(<Sneaker attributes={attributes} images={images} />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders an image with `fake-url.com` as its src", () => {
    expect(wrapper.find("img").prop("src")).toBe("fake-url.com");
  });

  it("has text of `Air Jordan 1`", () => {
    expect(wrapper.find("#name").text()).toBe(attributes.name);
  });

  it("has a price of `99.00 USD`", () => {
    expect(wrapper.find("#price").text()).toBe("99.00 USD");
  });
});
