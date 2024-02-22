/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:"Clayton Zulu",
    photo :{
        src:'images/tonie.jpg',
        alt: `Profile Image ${this.name}`,
    },
    favoriteFood:[  
                    'Sadza',
                    'Fufu',
                    'light soup',
                    'Kokonte and ground nut soup',
                    'Umutuo and light soup',
                    'Chiken and Rice'
                                         
    ],
    hobbies: ['Reading','Playing Video Games'],
    placesLived: [],

};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Gweru',
        length:'21 Years',
    }
);

myProfile.placesLived.push(
    {
        place: 'Benoni',
        length: '8 years',
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src',myProfile.photo.src);
document.querySelector('#photo').setAttribute('alt',myProfile.photo.alt);


/* Favorite Foods List*/
myProfile.favoriteFood.forEach((food)=>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);

});


/* Hobbies List */
myProfile.hobbies.forEach((hobby)=>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').append(li);
});



/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived)=>{
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');

    dt.textContent = placeLived.place;
    dd.textContent = placeLived.length;

    document.querySelector('#places-lived').append(dt);
    document.querySelector('#places-lived').append(dd);
    

})