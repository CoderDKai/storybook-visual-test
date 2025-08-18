# Button Component

A comprehensive Button component built for Storybook visual testing research. This component demonstrates best practices for creating testable, accessible, and visually consistent UI components.

## Features

- **Multiple Variants**: Primary, Secondary, Outline, Ghost, and Danger styles
- **Flexible Sizing**: 5 different sizes (xs, sm, md, lg, xl)
- **Loading States**: Built-in loading spinner with accessibility support
- **Icon Support**: Icons can be positioned on left or right side
- **Full Width Option**: Can expand to fill container width
- **TypeScript**: Full type safety with comprehensive prop types
- **Accessibility**: WCAG compliant with proper focus management
- **Visual Testing**: Comprehensive Storybook stories for visual regression testing

## Usage

```vue
<template>
  <Button 
    label="Click me" 
    variant="primary" 
    size="md"
    @click="handleClick" 
  />
</template>

<script setup>
import { Button } from '@/components/Button'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Button text content (required) |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Visual style variant |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Button size |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `loading` | `boolean` | `false` | Whether button shows loading state |
| `icon` | `Component` | - | Icon component to display |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position relative to text |
| `fullWidth` | `boolean` | `false` | Whether button takes full width |
| `customClass` | `string` | `''` | Additional CSS classes |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `MouseEvent` | Emitted when button is clicked |

## Visual Testing

This component includes comprehensive visual testing stories:

### Regular Stories (`Button.stories.ts`)
- Basic variants and sizes
- Different states (disabled, loading)
- Icon variations
- Full width examples

### Visual Test Stories (`Button.visual.stories.ts`)
- Matrix of all variants and states
- Responsive behavior testing
- Dark mode compatibility
- Focus state testing
- Edge cases (long text, special characters)

### Running Visual Tests

1. **Start Storybook**:
   ```bash
   pnpm storybook
   ```

2. **Run Unit Tests**:
   ```bash
   pnpm test
   ```

3. **Visual Regression Testing with Chromatic**:
   ```bash
   # Install Chromatic CLI
   pnpm add -D chromatic
   
   # Run visual tests
   npx chromatic --project-token=<your-token>
   ```

## Testing Strategy

### Unit Tests (`Button.test.ts`)
- Props validation
- Event emission
- Class application
- State management

### Visual Tests
- **Variant Testing**: All visual variants in different states
- **Size Testing**: All size variations
- **Responsive Testing**: Different viewport sizes
- **Accessibility Testing**: Focus states and keyboard navigation
- **Edge Case Testing**: Long text, special characters, etc.

### Accessibility Testing
- Keyboard navigation (Tab, Enter, Space)
- Screen reader compatibility
- Focus management
- Color contrast compliance

## Development

### Adding New Variants
1. Add the variant to the `ButtonProps` interface
2. Add corresponding Tailwind classes to `variantClasses`
3. Create stories for the new variant
4. Add visual tests
5. Update documentation

### Adding New Sizes
1. Add the size to the `ButtonProps` interface
2. Add corresponding classes to `sizeClasses`
3. Update stories and visual tests
4. Update documentation

## Best Practices

### For Visual Testing
- Use consistent naming for stories
- Include all states in visual test matrices
- Test responsive behavior at multiple breakpoints
- Include edge cases and error states
- Use Chromatic parameters for better control

### For Accessibility
- Always provide meaningful labels
- Use proper semantic HTML
- Ensure sufficient color contrast
- Test with keyboard navigation
- Test with screen readers

### For Maintainability
- Keep props interface simple and focused
- Use TypeScript for type safety
- Follow consistent naming conventions
- Document all props and events
- Write comprehensive tests

## Related Files

- `Button.vue` - Main component implementation
- `Button.stories.ts` - Regular Storybook stories
- `Button.visual.stories.ts` - Visual testing stories
- `Button.test.ts` - Unit tests
- `Button.mdx` - Comprehensive documentation
- `index.ts` - Component exports
