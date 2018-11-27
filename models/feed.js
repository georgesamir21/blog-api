const posts = [
  {title: 'post title 1'},
  {title: 'post title 2'}
];

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

exports.putPost = (postId, postData) => {
  // hit db and update the post...
  return `should update post with id = ${postId}`;
};

exports.deletePost = (postId) => {
  // hit db and delete the post...
  return `should delete post with id = ${postId}`;
};