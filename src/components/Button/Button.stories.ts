import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import Button from './Button.vue'

// Mock icon components for stories
const MockIcon = {
  template: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12l-4-4h8l-4 4z"/></svg>'
}

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Visual style variant of the button'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the button'
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width'
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of the icon relative to text'
    }
  },
  args: {
    onClick: fn(),
    label: 'Button'
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Basic variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Button'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Button'
  }
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Danger Button'
  }
}

// Sizes
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    label: 'Extra Small'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small'
  }
}

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium'
  }
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large'
  }
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    label: 'Extra Large'
  }
}

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Button'
  }
}

export const Loading: Story = {
  args: {
    loading: true,
    label: 'Loading...'
  }
}

// With icons
export const WithLeftIcon: Story = {
  args: {
    label: 'With Icon',
    icon: MockIcon,
    iconPosition: 'left'
  }
}

export const WithRightIcon: Story = {
  args: {
    label: 'With Icon',
    icon: MockIcon,
    iconPosition: 'right'
  }
}

// Full width
export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}

// All variants showcase
export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <div class="space-x-2">
          <Button variant="primary" label="Primary" />
          <Button variant="secondary" label="Secondary" />
          <Button variant="outline" label="Outline" />
          <Button variant="ghost" label="Ghost" />
          <Button variant="danger" label="Danger" />
        </div>
        <div class="space-x-2">
          <Button variant="primary" label="Disabled" disabled />
          <Button variant="primary" label="Loading" loading />
        </div>
      </div>
    `
  }),
  parameters: {
    layout: 'padded'
  }
}

// All sizes showcase
export const AllSizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <Button size="xs" label="XS" />
          <Button size="sm" label="SM" />
          <Button size="md" label="MD" />
          <Button size="lg" label="LG" />
          <Button size="xl" label="XL" />
        </div>
      </div>
    `
  }),
  parameters: {
    layout: 'padded'
  }
}
