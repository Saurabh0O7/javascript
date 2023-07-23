// Given lists of users
const List1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const List2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

// Task a: Get a unique set of users from List1 which are not in List2
const uniqueUsersInList1 = List1.filter((user) => !List2.includes(user));
console.log("Users in List1 but not in List2:", uniqueUsersInList1);

// Task b: Get a unique set of users from List2 which are not in List1
const uniqueUsersInList2 = List2.filter((user) => !List1.includes(user));
console.log("Users in List2 but not in List1:", uniqueUsersInList2);

// Task c: Get a set of users who are present in List1 and List2 both (intersection of List1 & List2)
const commonUsers = List1.filter((user) => List2.includes(user));
console.log("Common users in both lists:", commonUsers);
