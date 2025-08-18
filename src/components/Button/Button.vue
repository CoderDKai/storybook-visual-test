<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="loading" class="animate-spin mr-2">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </span>
    
    <span v-if="icon && iconPosition === 'left'" class="mr-2">
      <component :is="icon" class="w-4 h-4" />
    </span>
    
    <span>{{ label }}</span>
    
    <span v-if="icon && iconPosition === 'right'" class="ml-2">
      <component :is="icon" class="w-4 h-4" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Component } from 'vue'

export interface ButtonProps {
  /** Button text content */
  label: string
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  /** Button size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset'
  /** Whether button is disabled */
  disabled?: boolean
  /** Whether button is in loading state */
  loading?: boolean
  /** Icon component to display */
  icon?: Component
  /** Icon position relative to text */
  iconPosition?: 'left' | 'right'
  /** Whether button should take full width */
  fullWidth?: boolean
  /** Custom CSS classes */
  customClass?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  iconPosition: 'left',
  fullWidth: false,
  customClass: ''
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 active:bg-gray-800',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100',
  ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800'
}

const sizeClasses = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg'
}

const buttonClasses = computed(() => {
  const classes = [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size]
  ]
  
  if (props.fullWidth) {
    classes.push('w-full')
  }
  
  if (props.loading) {
    classes.push('cursor-wait')
  }
  
  if (props.customClass) {
    classes.push(props.customClass)
  }
  
  return classes.join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>
