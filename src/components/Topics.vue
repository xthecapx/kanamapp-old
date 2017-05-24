<template>
  <v-ons-list>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-12">
        <h1 class="text-center">Kanamapp's index</h1>
      </div>
    </div>
    <template v-for="(topic, key) in getTopics">
      <v-ons-list-header
        :key="key"
        :class="{'active': active == 'active' + key}"
        @click="active = 'active' + key">{{topic.header}}</v-ons-list-header>
      <transition
        enter-active-class="animated zoomInDown"
        leave-active-class="animated zoomOutUp">
        <div class="content" v-if="active == 'active' + key">
          <v-ons-list-item
            modifier="chevron"
            tappable
            @click="goGrammar(key, topic.header)"
            :key="key">{{topic.grammar}}</v-ons-list-item>
          <v-ons-list-item
            modifier="chevron"
            tappable
            @click="goVocabulary(subkey, unit.write, topic.id)"
            :key="subkey"
            v-for="(unit, subkey) in topic.units">{{unit.vocabulary}}</v-ons-list-item>
        </div>
      </transition>
    </template>
  </v-ons-list>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        active: "active0"
      }
    },
    computed: mapGetters(['getTopics']),
    methods: {
      goVocabulary(key, isWrite, id) {
        this.$store.commit("setStart", 0)
        this.$store.commit("shuffleQuestions", { key, id })
        this.$store.commit("setUnit", key)
        this.$store.commit("setId", id)
        this.verifyType(isWrite)
        this.$emit('mode', 'vocabulary')
      },
      goGrammar(key, header) {
        switch(header) {
            case "Unit 1":
                this.$store.commit("setType", 'b1u1')
                break;
            case "Unit 2":
                this.$store.commit("setType", 'b1u2')
                break;
            case "Unit 3":
                this.$store.commit("setType", 'b1u3')
                break;
            case "Unit 4":
                this.$store.commit("setType", 'b1u4')
                break;
            case "Unit 5":
                this.$store.commit("setType", 'b1u5')
                break;
            default:
                this.$store.commit("setType", 'b1u1')
        }
        this.$emit('mode', 'grammar')
      },
      verifyType(isWrite) {
        if (isWrite) {
          this.$store.commit("setType", 'app-write')
        } else {
          this.$store.commit("setType", 'app-multiple')
        }
      }
    }
  }
</script>

<style>
  .content {
    background: white;
  }

  .list-header {
    padding: 5px 15px;
  }

  .list-header.active {
    font-weight: 700;
  }
</style>