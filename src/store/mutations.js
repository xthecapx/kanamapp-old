import { b1u1 } from './B1Unit1'
import { b1u1Countries } from './B1Unit1Countries'
import { b1u1Kanji } from './B1Unit1Kanji'
import { b1u1Write } from './B1Unit1Write'
import { b1u2 } from './B1Unit2'
import { b1u2Kanji } from './B1Unit2Kanji'
import { b1u2Write } from './B1Unit2Write'
import { b1u3 } from './B1Unit3'
import { b1u3Kanji } from './B1Unit3Kanji'

export const states = {
  start: 0,
  unit: 0,
  type: '',
  vocabulary: [
    b1u1,
    b1u1Countries,
    b1u1Kanji,
    b1u1Write,
    b1u2,
    b1u2Kanji,
    b1u2Write,
    b1u3,
    b1u3Kanji
  ]
}

export const getters = {
  getStart(state) {
    return state.start
  },
  getUnit(state) {
    return state.unit
  },
  getVocabulary(state) {
    return state.vocabulary
  },
  getType(state) {
    return state.type
  }
}

export const mutations = {
  setVocabulary(state, info) {
    state.vocabulary[info.key] = info.vocabulary
  },
  setStart(state, start) {
    state.start = start
  },
  setUnit(state, unit) {
    state.unit = unit
  },
  setType(state, type) {
    state.type = type
  },
  shuffleQuestions(state, key) {
    let questions = state.vocabulary[key].questions,
        currentIndex = questions.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = questions[currentIndex];
      questions[currentIndex] = questions[randomIndex];
      questions[randomIndex] = temporaryValue;
    }
  }
}