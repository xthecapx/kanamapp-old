import { Vocabulary } from './Vocabulary'
import { Months } from './Months'
import { Days } from './Days'
import { Kanjis } from './Kanjis'
import { FindKanjis } from './FindKanjis'

export const unitFive = [Vocabulary, Months, Days, Kanjis, FindKanjis]
export const unitFiveDictionary = Vocabulary.questions.concat(Months.questions, Days.questions, Kanjis.questions)
