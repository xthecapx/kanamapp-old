import { unitOne, unitOneDictionary } from './bookOne/unitOne' //1, 2, 3, 4
import { unitTwo, unitTwoDictionary } from './bookOne/unitTwo' //5, 6, 7
import { unitThree, unitThreeDictionary } from './bookOne/unitThree' //8, 9, 10
import { unitFour, unitFourDictionary } from './bookOne/unitFour' //11, 12, 13
import { unitFive, unitFiveDictionary } from './bookOne/unitFive' //14, 15, 16, 17
import { unitSix, unitSixDictionary } from './bookOne/unitSix'

export const VOCABULARY = {
  unitOne,
  unitTwo,
  unitThree,
  unitFour,
  unitFive,
  unitSix
}

export const DICTIONARY = unitOneDictionary.concat(unitTwoDictionary, unitThreeDictionary, unitFourDictionary, unitFiveDictionary, unitSixDictionary);

