import {
    ColleagueV2,
    Friend,
    Buddy,
    BuddyList,
    Administrator,
  } from "./myTypes";
  import { friends } from "./01-basics";


  const colleague1: ColleagueV2 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: ColleagueV2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: ColleagueV2 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };


  function makeBuddyList(
    name: string,
    buddies: Buddy[],
    admin?: Administrator
  ): BuddyList {
    return {
      name,
      members: buddies,
      administrator: admin,
    } as BuddyList
  }


  const myFootballBuddies = makeBuddyList(
    "Football Team",
    [colleague1, friends[0], colleague2],
    colleague1
  )

  const myBandBuddies = makeBuddyList(
    "Band Name",
    [colleague1, friends[1]]
  )


  console.log(myFootballBuddies)
  console.log(myBandBuddies)


  function findBuddyContact(list: BuddyList, name: string): string | undefined {
    for (const buddy of list.members) {
      if (buddy.name === name) {
        if ("phone" in buddy) {
          return buddy.phone;
        }
        else {
          return buddy.contact.email;
        }
      }
      return undefined;
    }
  }

  console.log("contact buddy at:", findBuddyContact(myFootballBuddies, "Ralph Graham"))
  //
  //
  //
  function getBuddyListFriends(list: BuddyList): Friend[]{
      const result = []
      for (const buddy of list.members) {
          if ('age' in buddy) {
            result.push(buddy)
          }
      }
      return result
  }


  console.log("The friends in the buddy list: ", myFootballBuddies, " are: ", getBuddyListFriends(myFootballBuddies))

  // [Hint: Use the array reduce method in the solution, where the objective is to reduce
  //  an array of Buddy objects to an array of Friend objects, i.e. only some of the entries in the Buddy array are Friends.]
