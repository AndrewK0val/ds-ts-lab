import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, EmailContact } from "./myTypes";

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

// console.log(allOlder(friends))


function allOlder(f: Friend[]) : string {
    let results: string[] = []
    for (const friend of f) {
        friend.age += 1
        results.push(`${friend.name} is now ${friend.age}`);
    }
    return results.length > 0 ? results.join('\n') : "you have no friends :(";
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]){
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  // console.log(highestExtension(colleagues.current));

//   You are required to write a function called ‘addColleague’ that
//   adds a colleague to an array, and setting their extensions number
//   to the highest extension, plus 1. To test your implementation,
//   add the following code to end of the script
  function addColleague(cs: Colleague[], name: string, department: string, email: string) : void  {
    const newExtension = (cs.reduce((max, colleague) => Math.max(max, colleague.contact.extension), 0)) + 1 ;
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: newExtension
        }
    }  
    cs.push(newColleague)
  }


  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  // console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

  function sortColleagues ( colleagues: Colleague[], sorter: (c1: Colleague, c2: Colleague) => number, max? : number ) : EmailContact[] {
      let end = colleagues.length 
      if (max !== undefined) {
        end = max < 2 ? 1 : max 
      }
      const sorted = colleagues.sort(sorter);
      const fullResult: EmailContact[] = sorted.map((ce) => ({name: ce.name, email: ce.contact.email}))
      return fullResult.slice(0,end)
  }
  console.log(sortColleagues(colleagues.current, ((a, b) => a.contact.extension - b.contact.extension), 3))
  console.log(sortColleagues(colleagues.current, ((a, b) => a.name.length - b.name.length), 1) )
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length)))



  // You are required to write a function called ‘findFriends’
  // that searches an array of friends for those that satisfy a criterion.
  //  The criterion is specified as a callback. For example,
  //  consider these two invocations of the function:

// console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
// console.log(findFriends(friends, (friend) => friend.age < 35));

function findFriends (friends: Friend[], finder: (f: Friend) => any) : Friend[] {
  const found = friends.filter(finder);
  const result: Friend[] = found.map((friend) => ({name: friend.name, phone: friend.phone, age: friend.age}))
  return result
}

