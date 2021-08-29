//--------------------[BMI計算機]--------------------//
function bmi() {
    //----[身長体重受け取り]----//
    const weight = document.getElementById("weight"); //体重
    const height = document.getElementById("height"); //身長

    //----[身長と体重中身表示]----//
    const weightVal = weight.value; //体重
    const heightVal = height.value / 100; //身長(m変換)

    //----[BMI計算]----//
    let bmi = weightVal / heightVal / heightVal; //bmi計算
    bmi = Math.floor(bmi * 10) / 10; //小数点第一まで

    //----[適正体重]----//
    let Standard = (heightVal ** 2) * 22;
    Standard = Math.floor(Standard * 10) / 10; //小数点第一まで

    //----[判定]----//
    let massg = '';
    if (bmi < 18.5) {
        massg = 'ガリガリ';
    } else if (bmi >= 18.5 && bmi < 25) {
        massg = '普通体重です';
    } else if (bmi >= 25 && bmi < 30) {
        massg = '肥満レベル1';
    } else if (bmi >= 30 && bmi < 35) {
        massg = '肥満レベル2';
    } else if (bmi >= 35 && bmi < 40) {
        massg = '肥満レベル3';
    } else {
        massg = '肥満レベル4';
    }

    let array = [bmi, Standard, massg];
    console.log(array);
}