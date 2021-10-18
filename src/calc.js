function Measure(repeat_cnt,principal,goal){
    for(let i = 0; i < repeat_cnt; i++){
        let age_cnt = 0;
        let inner_principal = principal;
        while(true){
            inner_principal = inner_principal * 1.05;
            age_cnt++;
            if(inner_principal >= goal){
                console.log(inner_principal);
                console.log(age_cnt);
                break;
            }
        }
    }
}

let repeat_cnt = 100;
let principal = 500000;
let goal = 45000000;
let start = performance.now();
Measure(repeat_cnt,principal,goal);
let end = performance.now() - start;

console.log((end/1000) + "[sec]");