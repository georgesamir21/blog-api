exports.createUser = (userData) => {
  return new Promise((resolve, reject) => {
    if(userData) {
      setTimeout(() => {
        resolve(userData);
      }, 3000);
    } else {
      reject('failed to add user!');
    }
  });
};

exports.getUsers = () => {
  // Add Code here...
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Get All Users');
    }, 1500);
  });
};

exports.getUserById = (userId) => {
  // Add Code here...
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Get user with id = ${userId}`);
    }, 1500);
  });
};

exports.putUser = (userId, userData) => {
  // Add Code here...
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Update user with id = ${userId} with data = ${userData}`);
    }, 1500);
  });
};

exports.deleteUser = (userId) => {
  // Add Code here...
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Delete user with id = ${userId}`);
    }, 1500);
  });
};