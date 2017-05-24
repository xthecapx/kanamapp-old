<template>
  <div class="panel-heading">
    <h3 class="panel-title text-center" @click="showTooltip = !showTooltip">{{ title }}</h3>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in">
      <div v-if="showTooltip" class="helper">
        {{ tooltip }}
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: ['title', 'tooltip'],
    data() {
      return {
        showTooltip: false
      }
    }
  }
</script>

<style>
  .panel-heading {
    position: relative;
    cursor: pointer;
  }

  .helper {
    background: #88b7d5;
	  border: 4px solid #c2e1f5;
    bottom: 125%;
    border-radius: 5px;
    color: white;
    padding: 5px 15px;
    position: absolute;
    left: 50%;
    -ms-transform: translate(-50%, 0); /* IE 9 */
    -webkit-transform: translate(-50%, 0); /* Safari */
    transform: translate(-50%, 0);
  }

  .helper:after, .helper:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .helper:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #88b7d5;
    border-width: 10px;
    margin-left: -10px;
  }
  .helper:before {
    border-color: rgba(194, 225, 245, 0);
    border-top-color: #c2e1f5;
    border-width: 16px;
    margin-left: -16px;
  }
</style>