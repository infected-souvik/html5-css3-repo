class Student {
  constructor(firstname,lastname){
      this.firstname = firstname
      this.lastname = lastname

  }  

   hello() {
      console.log('This is hello method')
  }

 getFullname = () => {
     return '${this.firstname} ${this.lastname}' 
 }

 getmessage = function(){
    return 'here is the message for you'
 }

}
let student1 = new Student()
console.log(student1)
