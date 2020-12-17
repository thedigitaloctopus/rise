<template>
  <div class="layout">
    <BLM />
    <slot></slot>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import BLM from '~/components/BLM'

export default {
  components: { BLM },
  comments: true
}
</script>
