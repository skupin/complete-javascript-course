var hernando = {
    firstName: 'Hernando',
    lastName: 'Fierro',
    birthYear: 1973,
    family: ['Fanny', 'Luis Felipe', 'Nicole', 'Gisella'],
    job: 'Ventas',
    isMarried: true,
    calcAge: function() {
        return 2019 - this.birthYear;
    }
};

console.log(hernando.calcAge());