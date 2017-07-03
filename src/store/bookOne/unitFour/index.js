import { Vocabulary } from './Vocabulary' //11
import { Kanjis } from './Kanjis' //12
import { Weekdays } from './Weekdays' //13
import { Writing } from './Writing' //14

export const unitFour = [Vocabulary, Weekdays, Kanjis, Writing]
export const unitFourDictionary = Vocabulary.questions.concat(Weekdays.questions, Kanjis.questions)
