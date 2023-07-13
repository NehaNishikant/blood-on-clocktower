const { Multimap } = require('./multimap.js')


const map = new Multimap(["name"])

const x = 4
// test set
map.set(new Map([["name", "neha"]]), x)
map.set(new Map([["name", "shaan"]]), x)
console.log(map)
// test delete
map.delete("name", "neha")
console.log(map)
// test has
console.log(map.has("name", "neha"))
console.log(map.has("name", "shaan"))
// test get
console.log(map.get("name", "shaan"))
// test add_key_name
map.add_key_name("name", "age", new Map([["shaan", "23"]]))
console.log(map)
map.add_key_name("age", "phone", new Map([["23", "6"]]))
console.log(map)

const test_keys = []
test_keys.push(["name", "shaan"])
test_keys.push(["age", "23"])
test_keys.push(["phone", "6"])
for (let i=0; i<3; i++){
    const key_name = test_keys[i][0]
    const key = test_keys[i][1]
    console.log(key_name, key, map.data.get(key_name).get(key))
}

// test set (2)
map.set(new Map([["name", "neha"], ["age", "22"], ["phone", "3"]]), 7)
// test get (2)
console.log(map.get("name", "shaan"))
console.log(map.get("age", "23"))
console.log(map.get("phone", "3"))
// test remove key name
map.remove_key_name("phone")
console.log(map)
// test get 3
console.log(map.get("name", "krati"))