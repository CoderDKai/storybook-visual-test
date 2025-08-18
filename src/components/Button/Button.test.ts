import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button Component', () => {
  it('renders with default props', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test Button'
      }
    })
    
    expect(wrapper.text()).toBe('Test Button')
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('applies correct variant classes', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test',
        variant: 'primary'
      }
    })
    
    expect(wrapper.find('button').classes()).toContain('bg-blue-600')
  })

  it('applies correct size classes', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test',
        size: 'lg'
      }
    })
    
    expect(wrapper.find('button').classes()).toContain('px-6')
    expect(wrapper.find('button').classes()).toContain('py-3')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test'
      }
    })
    
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test',
        disabled: true
      }
    })
    
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test',
        loading: true
      }
    })
    
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('shows loading spinner when loading', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test',
        loading: true
      }
    })
    
    expect(wrapper.find('.animate-spin').exists()).toBe(true)
  })

  it('applies full width class when fullWidth is true', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test',
        fullWidth: true
      }
    })
    
    expect(wrapper.find('button').classes()).toContain('w-full')
  })

  it('applies custom classes', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test',
        customClass: 'custom-class'
      }
    })
    
    expect(wrapper.find('button').classes()).toContain('custom-class')
  })

  it('sets correct button type', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test',
        type: 'submit'
      }
    })
    
    expect(wrapper.find('button').attributes('type')).toBe('submit')
  })

  it('sets disabled attribute when disabled', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test',
        disabled: true
      }
    })
    
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })
})
