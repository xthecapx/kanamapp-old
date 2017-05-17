<template>
  <div class="write">
    <div class="thumbnail">
      <img :src="word.img" alt="" />
    </div>
    <div class="panel panel-default">
        <tooltip-heading :title="word.question" :tooltip="word.en"></tooltip-heading>
        <div class="panel-body">
          <div class="col-xs-12 col-sm-6 text-center">
            <form
              class="form-horizontal"
              @submit.prevent="validate">
              <div class="form-group">
                <label class="control-label col-sm-2" for="word">Write in Hiragana/Katakana/Kanji:</label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="word"
                    placeholder="Hiragana/Katakana/Kanji"
                    v-model="input" />
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default">Verify</button>
                </div>
              </div>
            </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import tooltipHeading from './utils/TooltipHeading'

  export default{
      data() {
          return {
              input: "",
              word: {}
          };
      },
      computed: mapGetters(['getStart', 'getVocabulary', 'getUnit']),
      methods: {
          generateQuestion() {
            if (this.getStart > 10) {
              this.word.question = "No more questions!!!"
              return
            }

            this.word = this.getVocabulary[this.getUnit].questions[this.getStart]
            this.$store.commit("setStart", this.getStart + 1)
          },
          validate() {
            if (this.input == this.word.answer　|| this.input == this.word.question) {
              this.$emit('answered', true);
            } else {
              this.$emit('answered', false);
            }
          }
      },
      components: { tooltipHeading },
      created() {
        this.generateQuestion()
      }
  }
</script>
