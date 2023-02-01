import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import About from '@/views/About.vue'

describe('About.vue', () => {
  it('ensures the About page is rendered containing key sections', () => {
    const wrapper = shallowMount(About)

    expect(wrapper.find('.about').exists()).to.equal(true)
    //expect(wrapper.findAll('.member-item')).to.have.lengthOf(4)
    expect(wrapper.find('.band-pic').exists()).to.equal(true)
    expect(wrapper.find('.biography').exists()).to.equal(true)
  })
})
