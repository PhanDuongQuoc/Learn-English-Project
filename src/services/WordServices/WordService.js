import wordlist from "@/data/WordList";
export default class WordService{
    
    constructor(){
         this.listWord ={
            words:[...wordlist]
         }
    }

    LoadData(){
        return this.listWord.words;
    }

    speakword(currentword){
         const speakWord = currentword
            if(!speakWord){
                return 
            }
            const speak = new SpeechSynthesisUtterance(speakWord)
            speak.lang = "en-US"
            speechSynthesis.speak(speak)
    }
}