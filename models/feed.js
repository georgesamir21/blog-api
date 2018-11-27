const posts = [
  {title: 'post title 1'},
  {title: 'post title 2'}
];
const feedsModel = {};

exports.getPosts = () => {
  // hit db and get the posts...
  return new Promise((resolve, reject) => {
    if(posts.length) {
      setTimeout(() => {
        resolve(posts);
      }, 3000);
    } else {
      reject('no posts');
    }
  });
};

exports.createPost = (postData) => {
  console.log('I am here')
  // hit db and add the post...
  return new Promise((resolve, reject) => {
    if(postData) {
      setTimeout(() => {
        resolve(postData);
      }, 3000);
    } else {
      reject('failed to add post!');
    }
  });
};