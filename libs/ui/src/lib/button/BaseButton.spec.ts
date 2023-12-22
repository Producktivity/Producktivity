import { mount } from "@vue/test-utils";
import { describe, it, expect } from "@jest/globals";
import BaseButton from "./BaseButton.vue";

describe("BaseButton", () => {
  it("Should renders properly", () => {
    const wrapper = mount(BaseButton, { props: { label: "Hello World" } });
    expect(wrapper.text()).toContain("Hello World");
    expect(wrapper.text()).not.toContain("Hello World!");
  });
});
