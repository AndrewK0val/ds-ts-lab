import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'


function findMatch<T>(data : T[], criteria: (d: T) => boolean) : T | undefined {
    return data.find((criteria))
}

// function findMatch<T>( data : T[],  (d: T) => boolean ) : T | undefined {
//     return data.find((criteria))
// }

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane') ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance' ))

// You are required to write a generic function
//  that returns a sorted copy of an array of any type,
//  where the second parameter is the sorting criterion.
//  Use the following log statements to test your implementation

function sort<T>(data: T[], criteria: (d1: T, d2: T) => number): T[] {
   return data.sort((criteria)) 
}

console.log(sort<Friend>(friends, (a,b) => a.age - b.age))

console.log(sort<Colleague>(
  colleagues.current,
    (a,b) => a.contact.extension - b.contact.extension
  )
);

