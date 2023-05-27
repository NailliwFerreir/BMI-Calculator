export type Level = {
    title: string,
    color: string,
    icon: 'down'|'up',
    bmi: number[],
    yourBmi?: number;
}
export const levels: Level[] = [
    { title: 'Magreza', color : '#adb5bd', icon:'down', bmi:[0,18.5] },
    { title: 'Normal', color : '#198754', icon:'up', bmi:[18.6,24.9] },
    { title: 'Sobrepeso', color : '#efc109', icon:'down', bmi:[25,30] },
    { title: 'Obesidade', color : '#dc3545', icon:'down', bmi:[30.1,99] },
];

export const calculateBMI = (height:number, weight:number) => {
    const bmi = weight/ (height*height);  
    for(let indexBmi in levels){
        if(bmi >= levels[indexBmi].bmi[0] && bmi <= levels[indexBmi].bmi[1]){
            let levelCopy: Level = {...levels[indexBmi]};
            levelCopy.yourBmi = bmi;
            return levelCopy;
        }
    }
    return null
};