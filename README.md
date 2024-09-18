# TypeScript Learning Project

This project is a simple TypeScript file where I am learning and practicing various TypeScript concepts and functionalities.

## File: [`02-functions.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fandrewkoval%2FDesktop%2Fdist-systems%2Ftypescriptlab%2Fsrc%2F02-functions.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2285f3dff9-be5a-4678-9a28-30d1e05bf7e8%22%5D "/Users/andrewkoval/Desktop/dist-systems/typescriptlab/src/02-functions.ts")

### Overview

This file contains functions and examples demonstrating how to work with arrays, objects, and TypeScript features such as interfaces and type annotations.

### Functions

1. **[`addColleague`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fandrewkoval%2FDesktop%2Fdist-systems%2Ftypescriptlab%2Fsrc%2F02-functions.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A47%2C%22character%22%3A2%7D%7D%5D%2C%2285f3dff9-be5a-4678-9a28-30d1e05bf7e8%22%5D "Go to definition")**
   - Adds a new colleague to the [`colleagues.current`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fandrewkoval%2FDesktop%2Fdist-systems%2Ftypescriptlab%2Fsrc%2F02-functions.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A47%2C%22character%22%3A15%7D%7D%5D%2C%2285f3dff9-be5a-4678-9a28-30d1e05bf7e8%22%5D "Go to definition") array.
   - Example usage:
     ```typescript
     addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
     ```

2. **[`sortColleagues`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fandrewkoval%2FDesktop%2Fdist-systems%2Ftypescriptlab%2Fsrc%2F02-functions.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A50%2C%22character%22%3A11%7D%7D%5D%2C%2285f3dff9-be5a-4678-9a28-30d1e05bf7e8%22%5D "Go to definition")**
   - Sorts an array of colleagues based on a provided sorting function and returns an array of email contacts.
   - Parameters:
     - [`colleagues`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fandrewkoval%2FDesktop%2Fdist-systems%2Ftypescriptlab%2Fsrc%2F02-functions.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A47%2C%22character%22%3A15%7D%7D%5D%2C%2285f3dff9-be5a-4678-9a28-30d1e05bf7e8%22%5D "Go to definition"): Array of [`Colleague`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fandrewkoval%2FDesktop%2Fdist-systems%2Ftypescriptlab%2Fsrc%2F02-functions.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A50%2C%22character%22%3A40%7D%7D%5D%2C%2285f3dff9-be5a-4678-9a28-30d1e05bf7e8%22%5D "Go to definition") objects.
     - [`sorter`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fandrewkoval%2FDesktop%2Fdist-systems%2Ftypescriptlab%2Fsrc%2F02-functions.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A50%2C%22character%22%3A53%7D%7D%5D%2C%2285f3dff9-be5a-4678-9a28-30d1e05bf7e8%22%5D "Go to definition"): A callback function to determine the sort order.
     - [`max`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fandrewkoval%2FDesktop%2Fdist-systems%2Ftypescriptlab%2Fsrc%2F02-functions.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A50%2C%22character%22%3A103%7D%7D%5D%2C%2285f3dff9-be5a-4678-9a28-30d1e05bf7e8%22%5D "Go to definition") (optional): Maximum number of results to return.
   - Example usage:
     ```typescript
     console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension, 3));
     console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length, 1));
     console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));
     ```

### Upcoming Function

- **`findFriends`**
  - This function will search an array of friends for those that satisfy a criterion specified as a callback.
  - Example usage (to be implemented):
    ```typescript
    // findFriends(friends, friend => friend.age > 30);
    // findFriends(friends, friend => friend.name.startsWith('A'));
    ```

### Learning Goals

- Understand and implement TypeScript interfaces.
- Practice array manipulation using TypeScript array methods.
- Learn to write and use callback functions for sorting and filtering arrays.

### Notes

- The file includes commented-out code and instructions for further learning and practice.
- The examples provided demonstrate how to use the functions and the expected output.

### Running the Code

To run the code, use the TypeScript compiler and Node.js:
```sh
tsc 02-functions.ts
node 02-functions.js
```

This project is a work in progress as I continue to learn and explore TypeScript.