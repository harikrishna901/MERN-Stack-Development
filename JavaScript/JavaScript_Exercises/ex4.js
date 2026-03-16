class parent{
    static childs=0;
    constructor(pname,page){
        this.pname=pname;
        this.page=page;
    }
    display(){
        console.log(`parent name is ${this.pname} and age is ${this.page}`);
    }
    set pname(newpname){
        if(typeof newpname ==="string" && newpname.length>0){
            this._pname=newpname;
        }
        else{
            console.error("pname is string datatype");
        }

    }
    set page(newpage){
        if(typeof newpage === "number" && newpage>0){
            this._page = newpage;
        }
        else{
            console.error("page is number datatype");
        }
    }
    get pname(){
        return this._pname;
    }
    get page(){
        return this._page;
    }

}
const p1 = new parent(9,-29299);
console.log(p1.pname);
console.log(p1.page);
p1.display();