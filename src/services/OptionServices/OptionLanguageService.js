import optionlanguage from "@/data/OptionLanguage";
export default class OptionLanguageService{
    constructor(){
        this.optionLanguage  = {
            options:[...optionlanguage]
        }
    }


    loadData(){
        return this.optionLanguage.options
    }
}