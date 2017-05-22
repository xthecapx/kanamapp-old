<template>
  <v-ons-list>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-12">
        <h1 class="text-center">Kanamapp's index</h1>
      </div>
    </div>
    <template v-for="(topic, key) in topics">
      <v-ons-list-header>{{topic.header}}</v-ons-list-header>
      <div class="content">
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
    </template>
  </v-ons-list>
</template>

<script>
  export default {
    data() {
      return {
        topics: [
          {
            id: "unitOne",
            header: "Unit 1",
            grammar: "Grammar",
            units: [
              {
                vocabulary: "General Vocabulary"
              },
              {
                vocabulary: "Countries Exercise"
              },
              {
                vocabulary: "Kanji Exercise"
              },
              {
                vocabulary: "Writing Exercise",
                write: true
              }
            ]
          },
          {
            id: "unitTwo",
            header: "Unit 2",
            grammar: "Grammar",
            units: [
              {
                vocabulary: "General Vocabulary"
              },
              {
                vocabulary: "Kanji Exercise",
              },
              {
                vocabulary: "Writing Exercise",
                write: true
              }
            ]
          },
          {
            id: "unitThree",
            header: "Unit 3",
            grammar: "Grammar",
            units: [
              {
                vocabulary: "General Vocabulary"
              },
              {
                vocabulary: "Kanji Exercise",
              },
              {
                vocabulary: "Writing Exercise",
                write: true
              }
            ]
          },
          {
            id: "unitFour",
            header: "Unit 4",
            grammar: "Grammar",
            units: [
              {
                vocabulary: "General Vocabulary"
              },
              {
                vocabulary: "Kanji Exercise",
              },
              {
                vocabulary: "Writing Exercise",
                write: true
              }
            ]
          },
          {
            id: "unitFive",
            header: "Unit 5",
            grammar: "Grammar",
            units: [
              {
                vocabulary: "General Vocabulary"
              },
              {
                vocabulary: "Months Exercise"
              },
              {
                vocabulary: "Kanji Exercise"
              },
              {
                vocabulary: "Find Kanji Exercise"
              }
            ]
          }
        ]
      }
    },
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