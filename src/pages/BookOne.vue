<template id="BookOne">
  <v-ons-page>
    <custom-toolbar title="Book One" :action="toggleMenu"></custom-toolbar>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-12">
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
  import customToolbar from '../components/commons/Toolbar'
  import Vocabulary from '../components/Vocabulary';
  import Topics from '../components/Topics';
  import Grammar from '../components/Grammar';

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