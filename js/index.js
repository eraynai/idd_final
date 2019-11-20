
/* set up variables */
//let itemsInCart = 0;

/* all the functions - things we need the application to do */
//function addItemsToTheCart(curr, qty) {
//    console.log('you added ${qty} item(s).  There are now: ${curr + qty}.');
//    return curr + qty;



/*execution start*/

//itemsInCart = addItemsToTheCart(0, 1);//1
//itemsInCart = addItemsToTheCart(1, 5); //6

/*const courseName = '3D Visualization';
const courseCode = 'INTR222';
const courseInstr = 'Ryan Bailey';
const courseStart = 'Fall 2019';
const courseNumWks = '15';
const courseIncBrks = 'Yes';
const courseDuration = '3hr, 0min';

document.getElementById('name').innerHTML = courseName;*/

//an object holds multiple variables together as one unit
const course0 = {
    name:  '4D Testing',
    code: 'INTR2322',
    instr: 'Nastrana Dadashi',
    start: 'Fall 2019',
    numWks: 15,
    incBrks: 'Yes',
    duration: '3hr, 40min'

};

 const course1 = {
     name:  'Usability Testing',
     code: 'INTR2222',
     instr: 'Nastran Dadashi',
     start: 'Fall 2019',
     numWks: 15,
     incBrks: 'Yes',
     duration: '2hr, 40min'

 };

function getCourseAsHMTLString(course){
    return '<article class="course">
            <h3>${course.name}</h3>
            </article>';
}



 document.getElementById('courses').innerHTML += getCourseAsHMTLString(course0);
 document.getElementById('courses').innerHTML += getCourseAsHMTLString(course1);
 document.getElementById('courses').innerHTML += getCourseAsHMTLString(course2);
 document.getElementById('courses').innerHTML += getCourseAsHMTLString(course3);