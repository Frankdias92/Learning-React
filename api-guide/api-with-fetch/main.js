// url API
const url = "http://localhost:5500/api"

const newUser = {
  id: 1,
  avatarUrl: "https://avatars.githubusercontent.com/u/101531465?v=4",
  city: "CITY",
  name: "POST"
}

let dataPosts = [
  {
    id: 1,
    userId: 'First Title',
    content: 'Content of comment'
  }
]

// set request POST
function requestPost(method, user) {
  return {
  method: `${method}`,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user)
  }
}

// get Fetch
fetch(url)
.then((res) => res.json())
.then((data) => {
  renderContent.textContent = JSON.stringify(data);
  console.log(data)
})
.catch((error) => {
  console.log(`ops, something wrong here: ${error}`)
})


// getNewUser
function getNewUser() {
  fetch(url, requestPost('POST'))
  .then((res) => {
    if(!res.ok) {
      throw new Error(`Error request: ${res.status} - ${res.statusText}`)
    }
    return res.json()
  })
  .then((newUser) => {
    console.log('Salved user: ', newUser)
  })
  .catch((error) => {
    console.log(`Error: ${error}`)
  })
}
// getNewUser()


// set NEW USER
const userUpdate = {
  name: "USER UPDATE",
  avatarUrl: "https://picsum.photos/200/300",
  city: "CITY NEW"
}
function updateUserFetch(userId, userUpdate) {
  const userUrl = `${url}/${userId}`
  fetch(userUrl, requestPost("PUT", userUpdate))
  .then((res) => {
    if(!res.ok) {
      throw new Error(`User update failed: ${res.status} - ${res.statusText}`)
    }
    return res.json()
  })
  .then((data) => {
    console.log(`User update: ${data}`)
  })
  .catch((error) => {
    console.log(`error: ${error}`)
  })
}
// updateUserFetch(5, userUpdate)



function addPost(title, body) {
  let userId = title
  let content = body
  
  fetch(url, requestPost('POST', {userId: userId, content: content}))
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.status)
    }
    return res.json()
  })
  .then((data) => {
    console.log('New post saved: ', data)
  })
  
  .catch((error) => console.log(error))
}
addPost('new post', 'content')