import { shallowMount } from "@vue/test-utils";
import Home from "../index.vue";


const factory = () => {
    return shallowMount(Home, {
    });
};

describe("Home", () => {
    test("mounts properly", () => {
        const wrapper = factory();
        expect(wrapper.vm).toBeTruthy();
    });

    test("renders properly", () => {
        const wrapper = factory();
        expect(wrapper.html()).toMatchSnapshot();
    });

    test("title", () => {
        const wrapper = factory();
        const title = wrapper.find(".title")
        expect(title.text()).toBe("nuxt-jest");
    });
});
