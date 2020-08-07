const person = {name: "Prime", age:19, phone:"01720133903", hobby:['programming', 'reading', 'music', 'travelling', 'cricket'], university: "CU", department: "Marketing", id: 20304001};

// const {hobby} = person;

// const [h1, h2, ...h3] = hobby;

// console.log(h1, h2, h3);


// const favmusicians = ['Oyshi', 'Haimanti','Nandita', 'Liza', 'Jhilik','Anisha'];

// const [fav1, fav2, ...favothers] = favmusicians;

// console.log(fav1, fav2, favothers);

let complexObject = {
    name: 'abc',
    info: {
        address: "Talshahar",
        hobby: ['cricket', 'drawing', 'singing', {department: "marketing", uni: "cu"}],
        relations: {
            fg: "person1",
            sg: "person2",
            tg: "person3"
        }
    }
}

console.log(complexObject.info.hobby[3].uni);