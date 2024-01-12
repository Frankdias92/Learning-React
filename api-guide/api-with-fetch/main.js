// url API
const url = "http://localhost:5500/api"

const newUser = {
  avatarUrl: "https://avatars.githubusercontent.com/u/101531465?v=4",
  city: "CITY",
  id: 1,
  name: "POST"
}


// get Fetch
fetch(url)
.then((res) => res.json())
.then((data) => {
  renderContent.textContent = JSON.stringify(data);
  console.log(data)
})
.catch((error) => {
  console.log(`Ocorreu algum erro ao conectar com o servidor: ${error}`)
})

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

// getNewUser
function getNewUser() {
  fetch(url, requestPost('POST'))
  .then((res) => {
    if(!res.ok) {
      throw new Error(`Error request: ${res.status} - ${res.statusText}`)
    }
    return res.json()
  })
  .then((requestPost) => {
    console.log(`Salved user`)
  })
  .catch((error) => {
    console.log(`${error}`)
  })
}
// getNewUser()


// set NEW USER
function setNewUser(userId) {
  return `${url}/${userId}`
}
const userUpdate = {
  name: "USER UPDATE",
  avatarUrl: "https://picsum.photos/200/300",
  city: "CITY NEW"
}
function updateUserFetch(userId, userUpdate) {
  const userUrl = setNewUser(userId)
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
updateUserFetch(18, userUpdate)