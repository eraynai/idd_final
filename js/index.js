
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


 const courses = [
{
    name:  '4D Testing',
    code: 'INTR2322',
    instr: 'Ryan Bailey',
    start: 'Fall 2019',
    numWks: 15,
    incBrks: 'Yes',
    duration: '3hr, 40min'

}, {
    name:  'Usability Testing',
    code: 'INTR2222',
    instr: 'Nastran Dadashi',
    start: 'Fall 2019',
    numWks: 15,
    incBrks: 'Yes',
    duration: '2hr, 40min'

}, {
    name:  'Interface Development',
    code: 'INTR2223',
    instr: 'Rocco Dion',
    start: 'Fall 2019',
    numWks: 15,
    incBrks: 'Yes',
    duration: '3hr, 00min'

}
]

function getCourseAsHMTLString(course){
    return '<article class="course">
            <h3>${course.name}</h3>
            </article>';
}


//Executable - execute functions that will access data
// document.getElementById('courses').innerHTML += getCourseAsHMTLString(courses[0]);
 //document.getElementById('courses').innerHTML += getCourseAsHMTLString(courses[1]);


function renderCourses(arrToRender) {
    const arrOfHtmlCourses = courses.map(getCourseAsHMTLString);
    const strOfHtmlCourses = arrOfHtmlCourses.join('\n');
    document.getElementById('courses').innerHTML = strOfHtmlCourses;
}

function toggleCourseLayout() {
    document.getElementById('courses').classList.toggle('grid-view');

}


renderCourses(courses);

document.getElementById('toggleView').addEventListener('click', toggleCourseLayout);

