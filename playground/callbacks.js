var getUser = (id, callback) => {
    const user = {
        id: id,
        name: 'John'
    };
    setTimeout(() => callback(user), 3000);
};

getUser(31, (user) => {console.log(user)})