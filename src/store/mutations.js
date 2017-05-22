import { VOCABULARY } from './VOCABULARY'

export const states = {
  start: 0,
  unit: 0,
  id: 0,
  type: '',
  vocabulary: VOCABULARY,
  progressBar: 0,
  errors: []
}

export const getters = {
  getStart(state) {
    return state.start
  },
  getErrors(state) {
    return state.errors
  },
  getProgressBar(state) {
    return state.progressBar
  },
  getId(state) {
    return state.id
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
  setProgressBar(state, progressBar) {
    state.progressBar = progressBar
  },
  setErrors(state, error) {
    state.errors.push(error)
  },
  clearErrors(state) {
    state.errors = []
  },
  setStart(state, start) {
    state.start = start
  },
  setUnit(state, unit) {
    state.unit = unit
  },
  setId(state, id) {
    state.id = id
  },
  setType(state, type) {
    state.type = type
  },
  shuffleQuestions(state, options) {
    let questions = state.vocabulary[options.id][options.key].questions,
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