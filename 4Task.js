let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let cnt = 0;
for(let number in student)
{
    cnt++;
}
console.log(cnt);