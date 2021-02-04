const students=[
{id=21, Name: 'sakib'},
{id:31,Name: 'kaiser'},
{id:33, Name: 'rakib'},
{id:71, Name: 'deepJol'}

];

const names= students.map( s=>s.name);
const ids= students.map(s=>s.id);
console.log(ids);
const bigger=students.filter( s=>s.id>40);
const biggerOne=students.find( s=>s.id>40);
console.log(biggerOne);
