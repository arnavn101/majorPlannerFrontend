const fs = require('fs')

function syncReadFile(filename) {
    const contents = fs.readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    console.log(arr);

    return arr;
}

const course_list = syncReadFile('courses.txt')
const course_options = course_list.map(course => { return { value: course, label: course } })

const interests = syncReadFile('interests.txt')
const interests_options = interests.map(interest => { return { value: interest, label: interest } })
console.log(interests_options)