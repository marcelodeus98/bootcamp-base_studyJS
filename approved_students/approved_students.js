let students = [ 
    {
       student:'Lucas',
       note: 5
    },

    {
        student:'Pedro',
        note: 3
     },

     {
        student:'Marcelo',
        note: 8
     },

     {
        student:'Samia',
        note: 10
     },

     {
        student:'Mharessa',
        note: 6
     },

     {
        student:'Eduarda',
        note: 10
     },

     {
        student:'Flávio',
        note: 8
     },

     {
        student:'Isaac',
        note: 5
     },
];

let approvedStudents = (array, average) => {
    let approveds = []
    for(let indice = 0; indice < array.length; indice++){
       const  { student, note} = array[indice];
        if(note >= average){
            approveds.push(student);
        }
    }
    return approveds;
};

console.log(approvedStudents(students, 6));
console.log(approvedStudents(students, 7));
