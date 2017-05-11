<template>
  <v-ons-list>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">Kanamapp's index</h1>
      </div>
    </div>
    <template v-for="(topic, key) in topics">
      <v-ons-list-header v-if="topic.header">{{topic.header}}</v-ons-list-header>
      <v-ons-list-item
        v-if="topic.grammar"
        modifier="chevron"
        tappable
        @click="goGrammar(key, topic.header)"
        :key="key">{{topic.grammar}}</v-ons-list-item>
      <v-ons-list-item
        v-if="topic.vocabulary"
        modifier="chevron"
        tappable
        @click="goVocabulary(key, topic.write)"
        :key="key">{{topic.vocabulary}}</v-ons-list-item>
    </template>
  </v-ons-list>
</template>

<script>
  export default {
    data() {
      return {
        topics: [
          {
            header: "Unit 1",
            vocabulary: "Vocabulary",
            grammar: "Grammar"
          },
          {
            vocabulary: "Countries Exercise",
          },
          {
            vocabulary: "Kanji Exercise",
          },
          {
            vocabulary: "Writing Exercise",
            write: true
          },
          {
            header: "Unit 2",
            vocabulary: "Vocabulary",
            grammar: "Grammar"
          },
          {
            vocabulary: "Kanji Exercise",
          },
          {
            vocabulary: "Writing Exercise",
            write: true
          },
          {
            header: "Unit 3",
            vocabulary: "Vocabulary",
            grammar: "Grammar"
          },
          {
            vocabulary: "Kanji Exercise",
          },
          {
            vocabulary: "Writing Exercise",
            write: true
          },
          {
            header: "Unit 4",
            vocabulary: "Vocabulary",
            grammar: "Grammar"
          },
          {
            vocabulary: "Kanji Exercise",
          },
          {
            vocabulary: "Writing Exercise",
            write: true
          }
        ]
      }
    },
    methods: {
      goVocabulary(key, isWrite) {
        this.$store.commit("setStart", 0)
        this.$store.commit("shuffleQuestions", key)
        this.$store.commit("setUnit", key)
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