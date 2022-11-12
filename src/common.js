const fs = require('fs')

function syncReadFile(filename) {
    const contents = fs.readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    console.log(arr);

    return arr;
}

const course_list = syncReadFile('courses.txt')
export const course_options = course_list.map(course => { return { value: course, label: course } })

const interests = syncReadFile('interests.txt')
export const interests_options = interests.map(interest => { return { value: interest, label: interest } })

const terms = syncReadFile('terms.txt')
export const terms_options = terms.map(term => { return { value: term, label: term } })