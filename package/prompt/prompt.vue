<template>
  <div class="er-prompt" v-show="visible">
    <div class="mask-normal" :class="{'mask-black': type !== 'prompt'}" @click="maskClear"></div>
    <template v-if="type === 'prompt'">
      <div class="box-prompt"><p><span>{{message}}</span></p></div>
    </template>
    <template v-else-if="type === 'confirm'">
      <div class="mask-confirm confirm-yes">
        <p><span>{{message}}</span></p>
        <div class="sure" @click="sure">{{confirmText}}</div>
      </div>
    </template>
    <template v-else>
      <div class="mask-confirm">
        <p><span>{{message}}</span></p>
        <div class="btns">
          <div class="btn left" @click="cancel">{{cancelText}}</div>
          <div class="btn right" @click="sure">{{confirmText}}</div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'ErPrompt',
    data() {
      return {
        visible: false,
        type: 'prompt',
        message: '',
        confirmText: '确定',
        cancelText: '取消',
        clearOnClick: false,
      }
    },
    methods: {
      maskClear() {
        if (this.type !== 'prompt' && this.clearOnClick) {
          this.visible = false
        }
      },
      sure() {
        this.visible = false
        if (typeof this.callback === 'function') {
          this.callback()
        }
      },
      cancel() {
        this.visible = false
        if (typeof this.cancelFunc === 'function') {
          this.cancelFunc()
        }
      },
    },
  }
</script>
