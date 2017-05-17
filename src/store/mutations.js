import { VOCABULARY } from './VOCABULARY'

export const states = {
  start: 0,
  unit: 0,
  type: '',
  vocabulary: VOCABULARY
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