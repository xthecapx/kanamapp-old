<template id="BookOne">
  <v-ons-page>
    <custom-toolbar title="Book One" :action="toggleMenu"></custom-toolbar>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <transition
          enter-active-class="animated bounceInRight"
          leave-active-class="animated bounceOutRight"
          mode="out-in">
          <component
            :is="mode"
            @mode="updatePageStack"></component>
        </transition>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import customToolbar from '../commons/Toolbar'
  import Vocabulary from './Vocabulary.vue';
  import Topics from './Topics.vue';
  import Grammar from './Grammar.vue';

  export default {
    data() {
      return {
        mode: 'topics'
      }
    },
    props: ['toggleMenu'],
    components: {
      customToolbar: customToolbar,
      "topics": Topics,
      "vocabulary": Vocabulary,
      "grammar": Grammar
    },
    methods: {
      updatePageStack(page) {
        this.mode = page
      }
    }
  }
</script>