export class Event {
    public name: string;
    public description: string;
    public imagePath: string;
    public routerlink: String;
    constructor(name: string, desc: string, imgPath: string, routerlink: String){
        this.name=name;
        this.description=desc;
        this.imagePath=imgPath;
        this.routerlink=routerlink;
    }
}