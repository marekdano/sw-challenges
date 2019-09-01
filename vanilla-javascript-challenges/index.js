import { blogPostEntries } from './normalization/normalization';
import { normalizePosts } from './normalization/normalize-posts';
import sort from './sort/sort-notifications';
import data from './sort/dataset.json';

console.log("Result from normalization challenge: ");
const normalizedPosts = normalizePosts(blogPostEntries);
console.log(JSON.stringify(normalizedPosts, null, '\t'));

console.log("\nResult from sort challenge: ");
const sortNotifications = sort(data);
console.log(JSON.stringify(sortNotifications, null, '\t'));
