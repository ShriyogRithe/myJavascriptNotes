function myMap(fn) {
   let newArr = []
   for(let i=0;i<this.length;i++) {
     newArr.push(fn)
   }
   return newArr
}
function mapPolyfill() {
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const result = arr.map((ele) => {
        return ele * 2
    })
    console.log('result......', result)
}


mapPolyfill()
