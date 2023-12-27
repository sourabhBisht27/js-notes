new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('Async task');
        // resolve()
    }, 1000)
}).then(() => {
    // console.log('Promise resolved/fulfilled/consumed');
})

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

// consuming a promise
promiseOne.then((user) => {
    // console.log(user);
})

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "sourabh", password: "123"})
        } else {
            reject('ERROR: something went wrong!')
        }
    }, 1000)
})

// consuming a promise
promiseTwo
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    // console.log(error);
})
// .finally(() => console.log(`The promise is either resolved or rejected`))

// another way to handle promises : async/await
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: js went wrong!')
        }
    }, 1000)
});

async function consumePromise() {
    try {
        const response = await promiseThree
        console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

consumePromise()

// ================= fetch =================
async function getAllUsers() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        // this operation takes time to complete that's why we have to use await 
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

// getAllUsers()

// self
new Promise((resolve, reject) => {
    resolve(fetch(`https://jsonplaceholder.typicode.com/users`))
})
.then((res) => {
    // console.log("SUCCESS");
    // console.log(res);
})
.catch((err) => {
    console.log(err);
})

// tutorial
// fetch returns a promise
// callbacks are attached to the returned promise object, instead of 
// being passed into a function.

fetch(`https://jsonplaceholder.typicode.com/users`)
.then((res) => {
    return res
})
.then((data) => {
    console.log('This is data ' , data)
})
.catch((err) => {
    console.log(err)
})