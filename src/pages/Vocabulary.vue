<template id="vocabulary">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <v-ons-button modifier="quiet" style="margin: 6px 0" @click="goTopics">Go Topics</v-ons-button>
      <transition
        enter-active-class="animated flipInY"
        leave-active-class="animated flipOutY"
        mode="out-in">
        <component
          :is="mode"
          @answered="answered($event)"
          @confirmed="confirmed"></component>
      </transition>
    </div>
  </div>
</template>

<script>
  import appQuestion from '../components/Questions';
  import appAnswer from '../components/Answer';
  import appWrite from '../components/Write';
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        mode: 'app-question'
      }
    },
    computed: mapGetters(['getType']),
    components: {
      "app-multiple": appQuestion,
      "app-answer": appAnswer,
      "app-write": appWrite
    },
    methods: {
      answered(isCorrect) {
        if (isCorrect) {
          this.mode = 'app-answer'
        } else {
          alert('Wrong, try again!')
        }
      },
      confirmed() {
        this.mode = this.getType
      },
      goTopics() {
        this.$emit('mode', 'topics')
      }
    },
    created() {
        this.mode = this.getType
    }
  }
</script>