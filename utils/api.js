import AsyncStorage from '@react-native-community/async-storage'
const FLASHCARDS_STORAGE_KEY = 'flashcards: decks'


const initialData = {
    Home: {
        title: 'Home objects',
        questions:[
            {
                question: 'okno',
                answer: 'window'
            }, 
            {
                question: 'drzwi',
                answer: 'door'
            }
        ]
    },

    word_for_today: {
        title: 'Word for today',
        questions: [
            {
                question: 'The cocoon of blankets and pillows you gather aroud yourself whilist spending large amounts of tome on the internet',
                answer: 'Internest'
            }, 
            {
                question: 'clogded',
                answer: 'zablokowany, unieruchomiony, zapchany'
            }
        ]
    }
}


export const getData = () => {
    return initialData
}


export function clear() {
    AsyncStorage.clear()
}


export function getDecks(deck) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results =>{
        if(results == null){
            AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData))
            return initialData
        }else {
            console.log('this point')
            console.log(JSON.parse(results))
            return JSON.parse(results)
            
        }
    })
}





export const saveDeckTitle = async (title) => {
    try {
      await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title, 
            questions: []
        }
    }))
    } catch (e) {
         console.log(e)
      alert('Failed to save the data to the storage')
    }
  }