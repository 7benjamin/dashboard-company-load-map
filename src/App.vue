<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NotificationProvider } from '@/components/Notification'
import { useDialogStore } from '@/stores/dialog'
import ActionDialog from '@/components/Dialogs/ActionDialog.vue'
import CommandPalettes from '@/components/CommandPalettes.vue'
const dialog = useDialogStore()
</script>

<template>
  <NotificationProvider>
    <ActionDialog :show-cancel-button="dialog.showCancelButton" :dismiss-on-action="dialog.dismissOnAction"
      :open="dialog.open" :title="dialog.title" :message="dialog.content" :confirm-text="dialog.confirmText"
      :cancel-text="dialog.cancelText" @on-close="dialog.open = false" @on-confirm="dialog.onConfirm"
      @on-cancel="dialog.onCancel" :type="dialog.type" />
    <CommandPalettes />
    <RouterView />
  </NotificationProvider>
</template>