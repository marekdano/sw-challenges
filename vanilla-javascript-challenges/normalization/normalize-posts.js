
const KEYS = {
  posts: 'posts',
  comments: 'comments',
  users: 'users'
}

/**
 * Normalize blog posts for redux state to the defined object.
 * 
 * Example output
 * {
 *    posts: {
 *      byId: {
 *				"post1": {"id": "post1", "author": "user1", "body": "This is post 1.", "comments": [ "comment1" ]},
 *        "post2": {"id": "post2", "author": "user2", "body": "This is post 2.", "comments": []},
 *      },
 *    	allIds: [ "post1" ]
 *    },
 *    comments: {
 *  		byId: {
 *				"comment1": { "id": "comment1", "author": "user2", "comment": "I like dogs!"},
 *			},
 *			allIds: [ "comment1" ]
 *		},
 *		users: { 
 * 			byId: {
 *				"user1": {"username": "user1", "name": "User 1"},
 *				"user2": {"username": "user2", "name": "User 2"},
 *			},
 *			allIds: [ "user1", "user2" ]
 *		}
 * }
 * 
 * @param {Object[]} blogPosts 
 */
export const normalizePosts = (blogPosts) => {
	let result = {
		posts: {},
		comments: {},
		users: {},
	};

  const posts = convertPostsToObject(blogPosts);
  result = addByIdAndAllIdsToObject({result, key: KEYS.posts, obj: posts});

	const comments = convertCommentsToObject(blogPosts);
  result = addByIdAndAllIdsToObject({result, key: KEYS.comments, obj: comments});

  const users = convertUsersToObject(blogPosts);
  result = addByIdAndAllIdsToObject({result, key: KEYS.users, obj: users});

  return result;
}

const getCommentsFromBlogPosts = (blogPosts) => {
  return blogPosts.flatMap(post => post.comments);
}

const convertPostsToObject = (posts) => {
  return posts
    .map(({id, author: {username}, body, comments}) => ({id, author: username, body, comments: comments.map(c => c.id)}))
    .reduce((object, item) => ({...object, [item.id]: item}), {});
}

const convertCommentsToObject = (posts) => {
  return getCommentsFromBlogPosts(posts)
    .reduce((object, {id, comment, author: {username}}) => ({...object, [id]: {id, author: username, comment}}), {});
}

const convertUsersToObject = (posts) => {
  return [...posts.map(post => post.author), ...getCommentsFromBlogPosts(posts).map(comment => comment.author)]
    .reduce((object, {username, name}) => ({...object, [username]: {username, name}}), {});
}

const addByIdAndAllIdsToObject = ({result, key, obj}) => {
  result = addByIdToObject({result, key, obj});
  result = addAllIdsToObject({result, key, obj});

  return result;
}
const addByIdToObject = ({result, key, obj}) => {
  if (Object.keys(obj).length) result[key]['byId'] = obj; 
  return result;
}

const addAllIdsToObject = ({result, key, obj}) => {
  if (Object.keys(obj).length) result[key]['allIds'] = Object.keys(obj) 
  return result;
}
