<template>
  <div class="write">
    <div class="thumbnail">
      <img :src="word.img" alt="" />
    </div>
    <div class="panel panel-default">
        <div class="panel-heading" @click="helpMe = !helpMe" style="position:relative">
          <h3 class="panel-title text-center">{{ word.question }}</h3>
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in">
            <div v-if="helpMe" class="helper">
              {{ word.en }}
            </div>
          </transition>
        </div>
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

  export default{
      data() {
          return {
              input: "",
              word: {},
              helpMe: false
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
      created() {
        this.generateQuestion()
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