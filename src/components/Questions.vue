<template>
  <div class="question">
    <div class="thumbnail">
      <img :src="image" alt="" />
    </div>
    <div class="panel panel-default">
        <tooltip-heading :title="question" :tooltip="translate"></tooltip-heading>
        <div class="panel-body">
            <div class="col-xs-12 col-sm-6 text-center">
                <button class="btn btn-primary btn-lg" style="margin: 10px" @click="onAnswer(btnData[0].correct)">{{ btnData[0].answer }}</button>
            </div>
            <div class="col-xs-12 col-sm-6 text-center">
                <button class="btn btn-primary btn-lg" style="margin: 10px" @click="onAnswer(btnData[1].correct)">{{ btnData[1].answer }}</button>
            </div>
            <div class="col-xs-12 col-sm-6 text-center">
                <button class="btn btn-primary btn-lg" style="margin: 10px" @click="onAnswer(btnData[2].correct)">{{ btnData[2].answer }}</button>
            </div>
            <div class="col-xs-12 col-sm-6 text-center">
                <button class="btn btn-primary btn-lg" style="margin: 10px" @click="onAnswer(btnData[3].correct)">{{ btnData[3].answer }}</button>
            </div>
        </div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  import { mapGetters } from 'vuex'
  import tooltipHeading from './utils/TooltipHeading'

  export default{
      data() {
          return {
              question: "No more words!!!",
              answer: "",
              translate: "",
              image: "",
              btnData: [
                  {correct: true, answer: 0},
                  {correct: false, answer: 0},
                  {correct: false, answer: 0},
                  {correct: false, answer: 0}
              ]
          };
      },
      computed: mapGetters(['getStart', 'getVocabulary', 'getUnit', 'getId']),
      methods: {
          generateQuestion() {
            let words = this.getVocabulary[this.getId][this.getUnit].questions
            this.updateProgress(words)

            if (this.getStart > words.length - 1) {
              this.$emit('results');
              return
            }

            let word = words[this.getStart]
            let answers = this.shuffle(word.answers)
            this.$store.commit("setStart", this.getStart + 1)

            for (let i = 0, l = answers.length; i < l; i++ ) {
              this.btnData[i].answer = answers[i]
              if (answers[i] == word.answer) {
                this.btnData[i].correct = true
              } else {
                this.btnData[i].correct = false
              }
            }

            this.question = word.question
            this.answer = word.answer
            this.translate = word.en
            this.image = word.img
          },
          generateRandomNumber(min, max, except) {
              const rndNumber = Math.round(Math.random() * (max - min)) + min;

              if (rndNumber == except) {
                  return this.generateRandomNumber(min, max, except);
              }

              return rndNumber;
          },
          shuffle(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {

              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }

            return array;
          },
          onAnswer(isCorrect) {
            let answered = {
              isCorrect: isCorrect,
              question: this.question,
              answer: this.answer
            }

            this.$emit('answered', answered);
          },
          updateProgress(words) {
            this.$store.commit("setProgressBar", this.getStart*100 / words.length)
          }
      },
      components: { tooltipHeading },
      created() {
        this.generateQuestion()
      }
  }
</script>