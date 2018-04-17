document.body.onload = function() {
  console.log('page down')
}
document.getElementById('button').onclick = function() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  console.log(username)
  console.log(password)
  const xhr = new XMLHttpRequest()
  xhr.open('POST', '/login', true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.response)
      // console.log(data)
    }
  }
  xhr.send({username,password})
}
