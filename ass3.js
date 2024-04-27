let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  function summ(obj){
    let sumval = 0;
    for (i in obj){
        sumval += obj[i];
    }
    return sumval;
  }

console.log(summ(salaries))