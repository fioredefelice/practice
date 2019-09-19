var alumnos = [
    {
        name:'Andrea',
        lastname:'Puertas',
        age:30,
        email:'andypuertas@gmail.com',
        isMale: false,
        hobbies: ['correr', 'andar en bici'],
        family: [
            {
                name:'Maria',
                rol:'madre'
            },
            {
                name:'Jose',
                rol:'padre'
            }
        ]
    },
    {
        name:'Melisa',
        lastname:'Rodriguez',
        age:26,
        email:'melisarod@gmail.com',
        isMale: false,
        hobbies:['crossfit', 'levantar pesas'],
        family:[
            {
                name:'Tatiana',
                rol:'madre'
            },
            {
                name:'Roberto',
                rol:'padre'
            }
        ]
    },
    {
        name:'Hugo',
        lastname:'Bravo',
        age:45,
        email:'huguitobravo@hotmail.com',
        isMale: true,
        hobbies:['trotar', 'caminar'],
        family:[
            {
                name:'Florencia',
                rol:'hija'
            },
            {
                name:'Rosita',
                rol:'novia'
            }
        ]
    },
    {
        name:'Martin',
        lastname:'Barros',
        age:32,
        email:'martinchob@hotmail.com',
        isMale: true,
        hobbies:['andar en moto', 'jugar a la pelota'],
        family:[
            {
                name:'Teresa',
                rol:'madre'
            },
            {
                name:'Francisco',
                rol:'padre'
            }

        ]
    },
    {
        name:'Giovanni',
        lastname:'Manconi',
        age:23,
        email:'giomanconi@gmail.com',
        isMale: true,
        hobbies:['trabajar','andar en bici'],
        family:[
            {
                name:'Sandra',
                rol:'madre'
            },
            {
                name:'Carlos',
                rol:'padre'
            }
        ]
    },
    {
        name:'Fiorella',
        lastname:'De Felice',
        age:21,
        email:'fiorelladefelice39@gmail.com',
        isMale: false,
        hobbies:['dormir','correr'],
        family:[
            {
                name:'Lorenita',
                rol:'madre'
            },
            {
                name:'Matias',
                rol:'padre'
            }
        ]
    },
];

for(var i = 0; i <alumnos.length; i++) {
    var gender = 'she';
    if(alumnos[i].isMale) {
        gender = 'he';
    }
    console.log(gender + ' is ' + alumnos[i].name);
    for(var j = 0; j <alumnos[i].family.length; j++){
       // console.log(alumnos[i].family[j].rol);
    } 
}