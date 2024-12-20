<script setup>
import { MpButton, MpFlex, css } from "@mekari/pixel3";
import { RouterLink, RouterView } from "vue-router";

import BaseLayout from "./views/BaseLayout.vue";
</script>

<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <BaseLayout>
    <aside
      data-pixel-component="PixelSidebarChild"
      data-slot="root"
      :class="
        css({
          pt: '55px',
          position: 'relative',
          flex: 'none',
          background: 'background.surface',
          transitionProperty: 'width, background, margin',
          transitionDuration: '600ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: '99',
          borderLeftWidth: '1px',
          borderColor: 'border.default',
          display: {
            base: 'none',
            md: 'block'
          },
          width: isSidebarChildCollapsed ? '16px' : '12.75rem',
          marginRight: isSidebarChildCollapsed ? '16px' : '1px',
          cursor: isSidebarChildCollapsed ? 'pointer' : 'default'
        })
      "
    >
      <div>
        <RouterView />
      </div>
    </aside>
  </BaseLayout>
</template>

<style scoped></style>
