import { shallow } from "enzyme";

import App from "../../components/App";
import Home from "../../components/Home";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  describe("Home Route", () => {
    let Route;
    beforeEach(() => {
      Route = wrapper.find("Route").first();
    });

    it("renders", () => {
      expect(Route.exists()).toBeTruthy();
    });

    it("path is `/`", () => {
      expect(Route.prop("path")).toBe("/");
    });

    it("component is Home", () => {
      expect(Route.prop("component")).toBe(Home);
    });
  });
});
