import TestiminialList from "@/data/TestiminialList"
export default class TestiminialService{
    constructor(){
        this.testiminiallist = {
            Testiminials:[...TestiminialList],

        }
    }

    loadData(){
        return this.testiminiallist.Testiminials
    }
}