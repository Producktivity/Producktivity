import { mount } from "@vue/test-utils";
import { describe, it, expect } from "@jest/globals";
import Button from "./Button.vue";

describe("Button", () => {
  it("Should renders properly", () => {
    const wrapper = mount(Button, { props: { label: "Hello World" } });
    expect(wrapper.text()).toContain("Hello World");
    expect(wrapper.text()).not.toContain("Hello World!");
  });
});
