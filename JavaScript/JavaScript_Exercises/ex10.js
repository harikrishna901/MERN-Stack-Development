/////callback hell /////////////////
function task1(callback){
    setTimeout(()=>{
        console.log("Task1 is completed.");
        callback();
    },3000);

}
function task2(callback){
    setTimeout(()=>{
        console.log("Task2 is completed.");
        callback();
    },1000);
}
function task3(callback){
    setTimeout(()=>{
        console.log("Task3 is completed.");
        callback();
    },2000);

}
function task4(callback){
    setTimeout(()=>{
        console.log("Task4 is completed.");
        callback();
    },500);

}
function task5(callback){
    setTimeout(()=>{
        console.log("Task5 is completed.");
        callback();
    },4000);

}
/*task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                 console.log("all tasks are completed.");
                })
            })
        })
    })
});
*/
///////////////promise//////////////

function task1(){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let t = true;
            t?resolve("Task1 is completed."):reject("Task1 didn't complete.");
    },3000);
    });

}
function task2(){
   return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let t = false;
        t?resolve("Task2 is completed."):reject("Task2 didn't complete.");
    },1000);
    });
}
function task3(){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let t = true;
        t?resolve("Task3 is completed."):reject("Task3 didn't complete.");
    },2000);
    });

}
function task4(){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let t = true;
        t?resolve("Task4 is completed."):reject("Task4 didn't complete.");
    },500);
    });

}
function task5(){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
       let t = true;
       t?resolve("Task5 is completed."):reject("Task5 didn't complete.");
    },4000);
    });

}
/*task1().then(value =>{console.log(value); return task2();})
       .then(value =>{console.log(value);return task3();})
       .then(value =>{console.log(value); return task4();})
       .then(value =>{console.log(value); return task5();})
       .then((value)=>{console.log(value);console.log("all tasks are completed.")})
       .catch(error=>{console.error(error);});
*/

///////// using await and async functions for promises/////

async function doalltasks(){
    try{
    const t1 = await task1();
    console.log(t1);
    const t2 = await task2();
    console.log(t2);
    const t3 = await task3();
    console.log(t3);
    const t4 = await task4();
    console.log(t4);
    const t5 = await task5();
    console.log(t5);
    }
    catch(error){
        console.error(error);
    }
}
doalltasks();


