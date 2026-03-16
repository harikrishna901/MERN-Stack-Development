class parent{
     static  childs=0;
    constructor(pname,page){
        this.pname=pname;
        this.page=page;
        parent.childs++;
      
    }
    display(){
        console.log(`parent name is : ${this.pname} and age is ${this.page}`);

    }

}
class child extends parent{
    constructor(cname,cage,pname,page){
        super(pname,page);
        this.cname=cname;
        this.cage=cage;
        
    }
    display(){
        console.log(`child name is : ${this.cname} and age is ${this.cage}`);
        super.display();
    }

}
const c1 = new child('harikrishna',19,'nagamani','43');
const c2 = new child('harikrishna',19,'nagamani','43');
const c3 = new child('harikrishna',19,'nagamani','43');
const c4 = new child('harikrishna',19,'nagamani','43');

c1.display();
console.log(parent.childs);
