//1 . Flattening the object
// const myObj = {
//     'A' : 12,
//     'B' : 24,
//     'p' : {
//         'Q': 45,
//         'L': {
//             'Y': {
//                 'o': 345,
//                 'G': 89
//             },
//             'U': {
//                 'P' : [9, 6]
//             }
//         }
//     },
//     'b': [65, 54]
// }

// const ans = {}
// function flattenObject(obj, parent ) {
//     for(const key in obj) {
//         const newParent = parent + key
//         const value = obj[key]
//         if(typeof value === 'object') {
//             flattenObject(value, newParent + '.')
//         } else {
//             ans[newParent] = value
//         }
//     }
// }
//  flattenObject(myObj, '')


/////////////////////////////////////////////////////////////=======================================================

// deepClone Polyfill
// function deepClone(value, seen = new WeakMap()) {
//   // Handle null or primitive values
//   if (value === null || typeof value !== 'object') {
//     return value;
//   }

//   // Handle circular references
//   if (seen.has(value)) {
//     return seen.get(value);
//   }

//   // Handle Date
//   if (value instanceof Date) {
//     return new Date(value);
//   }

//   // Handle RegExp
//   if (value instanceof RegExp) {
//     return new RegExp(value);
//   }

//   // Handle Array
//   if (Array.isArray(value)) {
//     const arrCopy = [];
//     seen.set(value, arrCopy);
//     for (const item of value) {
//       arrCopy.push(deepClone(item, seen));
//     }
//     return arrCopy;
//   }

//   // Handle plain objects
//   const objCopy = {};
//   seen.set(value, objCopy);
//   for (const key in value) {
//     if (value.hasOwnProperty(key)) {
//       objCopy[key] = deepClone(value[key], seen);
//     }
//   }

//   return objCopy;
// }



/////////////////////////////////////////////////////////////=======================================================



// 4. Find value by path
//    get(obj, 'a.b.c') // should return the value
// function get(obj, path) {
//   if (!obj || typeof path !== 'string') return undefined;

//   return path.split('.').reduce((acc, key) => {
//     return acc && acc[key] !== undefined ? acc[key] : undefined;
//   }, obj);
// }

/////////////////////////////////////////////////////////////=======================================================


// [You type URL & press Enter]
//         |
//         v
// +----------------------------+
// |  Browser parses the URL    |
// |  (scheme, host, port, path)|
// +----------------------------+
//         |
//         v
// +----------------------------+
// | Browser/OS checks cache    |
// | (DNS + HTTP cache)         |
// +----------------------------+
//         |
//         v
// +----------------------------+
// | DNS Resolution             |
// | example.com → 93.184.216.34|
// +----------------------------+
//         |
//         v
// +----------------------------+
// | TCP Handshake              |
// | SYN → SYN/ACK → ACK        |
// +----------------------------+
//         |
//         v
// +----------------------------+
// | TLS Handshake (HTTPS)      |
// | Exchange keys, verify cert |
// +----------------------------+
//         |
//         v
// +----------------------------+
// | HTTP Request Sent          |
// | GET /page HTTP/1.1         |
// +----------------------------+
//         |
//         v
// +----------------------------+
// | Server Receives Request    |
// | Routes to app/database/etc |
// +----------------------------+
//         |
//         v
// +----------------------------+
// | HTTP Response Sent         |
// | 200 OK + HTML              |
// +----------------------------+
//         |
//         v
// +----------------------------+
// | Browser Parses HTML        |
// | Builds DOM, CSSOM, JS exec |
// +----------------------------+
//         |
//         v
// +----------------------------+
// | Browser Requests Assets    |
// | (CSS, JS, images, fonts)   |
// +----------------------------+
//         |
//         v
// +----------------------------+
// | Final Render               |
// | Pixels drawn on screen     |
// +----------------------------+

/////////////////////////////////////////////////////////////=======================================================


