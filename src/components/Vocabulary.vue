<template id="vocabulary">
  <div class="row">
    <v-ons-progress-bar :value="getProgressBar"></v-ons-progress-bar>
    <div class="col-xs-12 col-sm-8 col-md-12">
      <v-ons-button modifier="quiet" style="margin: 6px 0" @click="goTopics">Go Topics</v-ons-button>
      <span>{{getStart}} / 10</span>
      <transition
        enter-active-class="animated flipInY"
        leave-active-class="animated flipOutY"
        mode="out-in">
        <component
          :is="mode"
          @answered="answered($event)"
          @confirmed="confirmed"
          @results="showResults"></component>
      </transition>
    </div>
  </div>
</template>

<script>
  import appQuestion from '../components/Questions';
  import appAnswer from '../components/Answer';
  import appWrite from '../components/Write';
  import appResults from '../components/Results';
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        mode: 'app-question'
      }
    },
    computed: mapGetters(['getType', 'getProgressBar', 'getStart']),
    components: {
      "app-multiple": appQuestion,
      "app-answer": appAnswer,
      "app-write": appWrite,
      "app-results": appResults
    },
    methods: {
      answered(answer) {
        if (answer.isCorrect) {
          this.mode = 'app-answer'
        } else {
          this.$store.commit("setErrors", answer)
          alert('Wrong, try again!')
        }
      },
      confirmed() {
        this.mode = this.getType
      },
      goTopics() {
        this.$emit('mode', 'topics')
      },
      showResults() {
        this.mode = 'app-results'
      }
    },
    created() {
        this.mode = this.getType
        this.$store.commit("clearErrors")
    }
  }
</script>