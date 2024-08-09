import HelloWorld from '@/components/HelloWorld.vue'
import { mount, shallowMount } from "@vue/test-utils";

describe('Group test', () => {
  test("HelloWorld Component renders the correct text with props", () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Teste'
      }
    });
    expect(wrapper.props().msg).toBe("Teste");
  });

  test("HelloWorld Component getText", () => {
    const wrapper = shallowMount(HelloWorld);

    const input = 'Hello, World!';
    const expectedOutput = 'This text is: Hello, World!';

    const result = wrapper.vm.getText(input)

    expect(result).toBe(expectedOutput)
  });


  test("HelloWorld Component setText", () => {
    const wrapper = shallowMount(HelloWorld);

    const input = 'Hello, World!';
    const expectedOutput = 'Hello, World!';

    wrapper.vm.setText(input)

    const textData = wrapper.vm.text

    expect(textData).toBe(expectedOutput)
  });
})

