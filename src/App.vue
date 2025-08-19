<script setup lang="ts">
import { Button } from './components/Button'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        Storybook Visual Test - Button Component
      </h1>

      <div class="space-y-8">
        <!-- Variants -->
        <section class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-4">Button Variants</h2>
          <div class="flex flex-wrap gap-4">
            <Button label="Primary" variant="primary" @click="handleClick" />
            <Button label="Secondary" variant="secondary" @click="handleClick" />
            <Button label="Outline" variant="outline" @click="handleClick" />
            <Button label="Ghost" variant="ghost" @click="handleClick" />
            <Button label="Danger" variant="danger" @click="handleClick" />
          </div>
        </section>

        <!-- Sizes -->
        <section class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-4">Button Sizes</h2>
          <div class="flex flex-wrap items-center gap-4">
            <Button label="XS" size="xs" @click="handleClick" />
            <Button label="Small" size="sm" @click="handleClick" />
            <Button label="Medium" size="md" @click="handleClick" />
            <Button label="Large" size="lg" @click="handleClick" />
            <Button label="XL" size="xl" @click="handleClick" />
          </div>
        </section>

        <!-- States -->
        <section class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-4">Button States</h2>
          <div class="flex flex-wrap gap-4">
            <Button label="Normal" @click="handleClick" />
            <Button label="Disabled" disabled @click="handleClick" />
            <Button label="Loading" loading @click="handleClick" />
          </div>
        </section>

        <!-- Full Width -->
        <section class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-4">Full Width Button</h2>
          <Button label="Full Width Button" fullWidth @click="handleClick" />
        </section>
      </div>
    </div>
  </div>
</template>