const endPoint = 'http://localhost:8080/api/users'
const updateEmail = 'http://localhost:8080/api/users/email'
const updatePassword = 'http://localhost:8080/api/users/password'
const signIn = 'http://localhost:8080/api/users/login'

class UsersModel {
  static all = () => {
    return fetch(endPoint)
            .then(res => res.json())
            .catch(err => console.log('Could not get all users using fetch', err))
  }

  static getOne = (id) => {
    return fetch(`${endPoint}/${id}`)
              .then(res => res.json())
              .catch(err => console.log('Could not get single User', err))
  }

  static create = (user) => {
    return fetch(endPoint, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
            })
             .then(res => res.json())
             .catch(err => console.log('Could not insert User', err))
  }

  static login = (user) => {
    return fetch(signIn, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
            })
             .then(res => res.json())
             .catch(err => console.log('Could not login User', err))
  }

  static delete = (id) => {
    return fetch(`${endPoint}/${id}`, {
          method: "DELETE"
    })
              .then(res => res.json())
              .catch(err => console.log('Could not delete User', err))
  }

  static update = (users) => {
    return fetch(`${endPoint}/${users.id}`, {
          method: 'PUT',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(users)
    })
          .then(res => {
                  console.log("MODEL")
                  return res.json()
          })
          .catch(err => console.log('Could not update user', err))
  }

  static update = (users) => {
    return fetch(`${updateEmail}/${users.id}`, {
          method: 'PUT',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(users)
    })
          .then(res => {
                  console.log("MODEL")
                  return res.json()
          })
          .catch(err => console.log('Could not update user', err))
  }

  static update = (users) => {
    return fetch(`${updatePassword}/${users.id}`, {
          method: 'PUT',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(users)
    })
          .then(res => {
                  console.log("MODEL")
                  return res.json()
          })
          .catch(err => console.log('Could not update user', err))
  }

}
export default UsersModel
