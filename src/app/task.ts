export class Task {
    showDescription: boolean 
    votes: number
    constructor(public id: number, public name: string, public description: string){
        this.showDescription = false;
        this.votes=0
    }
}
