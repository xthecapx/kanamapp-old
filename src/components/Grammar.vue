<template id="grammar">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-md-6">
      <v-ons-button modifier="quiet" style="margin: 6px 0" @click="goTopics">Go Topics</v-ons-button>
      <transition
          enter-active-class="animated bounceInRight"
          leave-active-class="animated bounceOutRight"
          mode="out-in">
          <component
            :is="mode"></component>
        </transition>
    </div>
  </div>
</template>

<script>
  import b1u1 from '../components/bookOne/unitOne/Main'
  import b1u2 from '../components/bookOne/unitTwo/Main'
  import b1u3 from '../components/bookOne/unitThree/Main'
  import b1u4 from '../components/bookOne/unitFour/Main'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        mode: ""
      }
    },
    computed: mapGetters(['getType']),
    methods: {
      goTopics() {
        this.$emit('mode', 'topics')
      }
    },
    components: {
      b1u1,
      b1u2,
      b1u3,
      b1u4
    },
    created() {
        this.mode = this.getType
    }
  }
</script>

<style>
  .particle, .end, .s1, .s2, .verb, .optional {
    padding: 3px;
  }

  .particle {
    background: #FF9E80;
  }

  .end {
    background: #FFD180;
  }

  .s1, .s2 {
    background: #A7FFEB;
  }

  .verb {
    background: #FFFF8D;
  }

  .optional {
    background: #E0E0E0;
  }

  .list-item--chevron:before {
    width: 20px;
  }
</style>