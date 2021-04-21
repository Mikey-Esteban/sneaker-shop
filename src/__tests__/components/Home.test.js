import { shallow } from "enzyme";

import Home from "../../components/Home";

describe("Home", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders check console CTA", () => {
    expect(
      wrapper
        .find("#checkConsoleCTA")
        .text()
        .includes("Open console to check api call")
    ).toBeTruthy();
  });
});
