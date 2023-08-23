const dataBase =[
  {
    userName : "frog" ,
    password :"123456789"
  },
  {
    userName: "la frog",
    password: "987654321"
  },
  {
    userName: "la frog ephraim",
    password: "987654321!"
  }
]

const thread = [
  {
    friend: "gary",
    bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \b Dolore vel dolorum nesciunt sequi aut eum minus odit numquam, vero provident quaerat quae \b debitis sapiente facilis molestias iusto impedit recusandae harum!"
  },
  {
    friend: "sandy",
    bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \b Dolore vel dolorum nesciunt sequi aut eum minus odit numquam, vero provident quaerat quae \b debitis sapiente facilis molestias iusto impedit recusandae harum!"
  },
  {
    friend: "mr crabs",
    bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \b Dolore vel dolorum nesciunt sequi aut eum minus odit numquam, vero provident quaerat quae \b debitis sapiente facilis molestias iusto impedit recusandae harum!"
  },
  {
    friend: "phlankton",
    bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \b Dolore vel dolorum nesciunt sequi aut eum minus odit numquam, vero provident quaerat quae \b debitis sapiente facilis molestias iusto impedit recusandae harum!"
  }
]

const tweet = [
    {
      friend: "saul",
      bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \b Dolore vel dolorum nesciunt sequi aut eum minus odit numquam, vero provident quaerat quae \b debitis sapiente facilis molestias iusto impedit recusandae harum!"
    },
    {
      friend: "pato",
      bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \b Dolore vel dolorum nesciunt sequi aut eum minus odit numquam, vero provident quaerat quae \b debitis sapiente facilis molestias iusto impedit recusandae harum!"
    },
    {
      friend: "spongebob",
      bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \b Dolore vel dolorum nesciunt sequi aut eum minus odit numquam, vero provident quaerat quae \b debitis sapiente facilis molestias iusto impedit recusandae harum!"
    }
  
]

const shitPosting = [
  {
    friend: "micky",
    bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \b Dolore vel dolorum nesciunt sequi aut eum minus odit numquam, vero provident quaerat quae \b debitis sapiente facilis molestias iusto impedit recusandae harum!"
  },
  {
    friend: "leo",
    bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \b Dolore vel dolorum nesciunt sequi aut eum minus odit numquam, vero provident quaerat quae \b debitis sapiente facilis molestias iusto impedit recusandae harum!"
  },
  {
    friend: "raph",
    bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \b Dolore vel dolorum nesciunt sequi aut eum minus odit numquam, vero provident quaerat quae \b debitis sapiente facilis molestias iusto impedit recusandae harum!"
  }

]

let userNamePrompt = prompt ("input username")
let passwordPrompt = prompt ("enter password")

function signin (user,password){
  if(user === dataBase[0].userName && password=== dataBase[0] .password){
    alert(`welcome ${dataBase[0].userName}`)

    console.log(thread);
  }else if (user===dataBase[1].userName && password=== dataBase[1] .password){

  alert(`welcome ${dataBase[1].userName}`)

  console.log(tweet)
}else if (user===dataBase[2].userName && password=== dataBase[2] .password){

  alert(`welcome ${dataBase[2].userName}`)

  console.log(shitPosting)
}else  {
  alert("i know you are saul ...clean your glasses and try again !!!");
}
}

signin(userNamePrompt,passwordPrompt)
