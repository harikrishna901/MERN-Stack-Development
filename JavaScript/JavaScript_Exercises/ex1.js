//password generator
function passgenerator(lower,upper,special,num,length){
    let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let specialsymbols=['@','$','%','^','&','*'];
    let numbers=['1','2','3','4','5','6','7','8','9','0'];
    let password=[];
    let all=[];
    lower?all.push(...lowercase):"";
    upper?all.push(...uppercase):"";
    special?all.push(...specialsymbols):"";
    num?all.push(...numbers):"";
    for(let i=0;i<length;i++){
        let random = Math.floor(Math.random()*all.length);
        password.push(all[random]);
    }
    return password.join('');


}
const length = 10;
const lowercase=true;
const uppercase=true;
const specialsymbols=true;
const numbers = true;
let password = passgenerator(lowercase,uppercase,specialsymbols,numbers,length);
console.log(password);
