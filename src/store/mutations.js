import { VOCABULARY, DICTIONARY } from './VOCABULARY'
import { TOPICS } from './TOPICS'

export const states = {
  start: 0,
  unit: 0,
  id: 0,
  type: '',
  vocabulary: VOCABULARY,
  dictionary: DICTIONARY,
  topics: TOPICS,
  progressBar: 0,
  errors: [],
  active: 'active0'
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
  getDictionary(state) {
    return state.dictionary
  },
  getType(state) {
    return state.type
  },
  getTopics(state) {
    return state.topics
  },
  getActive(state) {
    return state.active
  }
}

export const mutations = {
  setVocabulary(state, info) {
    state.vocabulary[info.key] = info.vocabulary
  },
  setActive(state, active) {
    state.active = active
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