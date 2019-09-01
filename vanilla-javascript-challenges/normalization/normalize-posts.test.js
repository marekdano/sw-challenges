import { normalizePosts } from './normalize-posts';
import { blogPostEntries } from './normalization';

describe('#normalizePosts', () => {
	test('should return object of empty posts, users and comments objects when there is no posts', () => {
		const data = [];
		const result = {
			posts: {}, 
			comments: {}, 
			users: {}
		};
		expect(normalizePosts(data)).toEqual(result);
	});

	test('should return object of posts, users and comments objects when only one post with a comment is defined', () => {
		const data = [
			{
				id: "post1",
				author: { username: "user1", name: "User 1" },
				body: "The quick, brown fox jumps over a lazy dog.",
				comments: [
					{
						id: "comment1",
						author: { username: "user2", name: "User 2" },
						comment: "I like dogs!"
					}
				]
			}
		];
		const result = {
			posts: {
				byId: {
					post1: {
						id: "post1",
						author: "user1",
						body: "The quick, brown fox jumps over a lazy dog.",
						comments: ["comment1"]
					},
				},
				allIds: ["post1"]
			},
			comments: {
				byId: {
					comment1: {
						id: "comment1",
						author: "user2",
						comment: "I like dogs!"
					},
				},
				allIds: ["comment1"]
			},
			users: {
				byId: {
					user1: {
						username: "user1",
						name: "User 1"
					},
					user2: {
						username: "user2",
						name: "User 2"
					},
				},
				allIds: ["user1", "user2"]
			}
		};

		expect(normalizePosts(data)).toEqual(result);
	});

	test('should return object of posts, users and comments objects when only posts without comments are defined', () => {
		const data = [
			{
				id: "post1",
				author: { username: "user1", name: "User 1" },
				body: "The quick, brown fox jumps over a lazy dog.",
				comments: []
			},
			{
				id: "post2",
				author: { username: "user2", name: "User 2" },
				body: "It was the best of times, it was the blurst of times...",
				comments: []
			},
		];
		const result = {
			posts: {
				byId: {
					post1: {
						id: "post1",
						author: "user1",
						body: "The quick, brown fox jumps over a lazy dog.",
						comments: []
					},
					post2: {
						id: "post2",
						author: "user2",
						body: "It was the best of times, it was the blurst of times...",
						comments: []
					},
				},
				allIds: ["post1", "post2"]
			},
			comments: {},
			users: {
				byId: {
					user1: {
						username: "user1",
						name: "User 1"
					},
					user2: {
						username: "user2",
						name: "User 2"
					},
				},
				allIds: ["user1", "user2"]
			}
		};

		expect(normalizePosts(data)).toEqual(result);
	});

	test('should return object of posts, users and comments objects when default test data is provided', () => {
		const result = {
			posts: {
				byId: {
					post1: {
						id: "post1",
						author: "user1",
						body: "The quick, brown fox jumps over a lazy dog.",
						comments: ["comment1"]
					},
					post2: {
						id: "post2",
						author: "user2",
						body: "It was the best of times, it was the blurst of times...",
						comments: ["comment2", "comment3", "comment4"]
					},
					post3: {
						id: "post3",
						author: "user2",
						body: "Please comment on this post!",
						comments: []
					},
					post4: {
						id: "post4",
						author: "user5",
						body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
						comments: ["comment5", "comment6", "comment7", "comment8"]
					},
					post5: {
						id: "post5",
						author: "user4",
						body: "What is your favourite genre of music?",
						comments: ["comment9", "comment10", "comment11", "comment12", "comment13"]
					}
				},
				allIds: ["post1", "post2", "post3", "post4", "post5"]
			},
			comments: {
				byId: {
					comment1: {
						id: "comment1",
						author: "user2",
						comment: "I like dogs!"
					},
					comment2: {
						id: "comment2",
						author: "user3",
						comment: "Did Charles Dickens write this?"
					},
					comment3: {
						id: "comment3",
						author: "user4",
						comment: "No, it was someone else I think."
					},
					comment4: {
						id: "comment4",
						author: "user3",
						comment: "It's from a Tale of Two Cities"
					},
					comment5: {
						id: "comment5",
						author: "user4",
						comment: "Wow, I didn't know you spoke Italian!"
					},
					comment6: {
						id: "comment6",
						author: "user5",
						comment: "It isn't Italian."
					},
					comment7: {
						id: "comment7",
						author: "user4",
						comment: "Oh, is it Greek?"
					},
					comment8: {
						id: "comment8",
						author: "user4",
						comment: "Oh, hang on, it's Latin!"
					},
					comment9: {
						id: "comment9",
						author: "user2",
						comment: "Mine is rock!"
					},
					comment10: {
						id: "comment10",
						author: "user3",
						comment: "Rock is a terrible genre. The best genre is country."
					},
					comment11: {
						id: "comment11",
						author: "user4",
						comment: "I think country can be nice, but I prefer blues overall."
					},
					comment12: {
						id: "comment12",
						author: "user6",
						comment: "Jazz is objectively the best genre."
					},
					comment13: {
						id: "comment13",
						author: "user5",
						comment: "I like all genres of music!"
					}
				},
				allIds: ["comment1","comment2",	"comment3","comment4","comment5","comment6","comment7","comment8","comment9","comment10","comment11","comment12","comment13"]
			},
			users: {
				byId: {
					user1: {
						username: "user1",
						name: "User 1"
					},
					user2: {
						username: "user2",
						name: "User 2"
					},
					user5: {
						username: "user5",
						name: "User 5"
					},
					user4: {
						username: "user4",
						name: "User 4"
					},
					user3: {
						username: "user3",
						name: "User 3"
					},
					user6: {
						username: "user6",
						name: "User 6"
					}
				},
				allIds: ["user1", "user2", "user5", "user4", "user3", "user6"]
			}
		}

		expect(normalizePosts(blogPostEntries)).toEqual(result);
	});
});
