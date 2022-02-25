let names = ["scott", "adam", "Tuan"]

let [name1,name2,name3] = names

console.log(name1)
console.log(name2)
console.log(name3)

let message = 'Who is John Galt'.split()
console.log(message)

let newMessage = message.join(' ')
console.log(newMessage)

let [firstName , lastName] = "John Galt".split(' ')
console.log(firstName)
console.log(lastName)

let [name , city , title] = ["scott","Boston","Great boss"]
console.log(name)



let user = {
    name: "Scott",
    age: 45
}

for(let[key,value] of Object.entries(user)){
    console.log('key is ${key} and value is ${value}')
}



let options = {
    title : 'menu',
    width : '100',
    height : '200'
}

let {title,width,height} = options
console.log(title,width,height)
