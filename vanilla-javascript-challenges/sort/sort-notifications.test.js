import sort from './sort-notifications';
import data from './dataset.json';

describe('#sort', () => {
	test('should return empty object when there is no notifications', () => {
		const data = [];
		expect(sort(data)).toEqual({});
	});

	test('should return object with two most popular dates in a channel', () => {
		const data = [
			{ "name": "test1", "startDate": "2019-01-02", "channel": "Conversations" },
			{ "name": "test2", "startDate": "2019-01-02", "channel": "Conversations" },
			{ "name": "test3", "startDate": "2019-01-03", "channel": "Conversations" },
			{ "name": "test4", "startDate": "2019-01-04", "channel": "Conversations" },
			{ "name": "test5", "startDate": "2019-01-04", "channel": "Conversations" },
		];
		const result = { "Conversations": ["2019-01-02", "2019-01-04"] };

		expect(sort(data)).toEqual(result);
	});

	test('should return object with one most popular date in a channel', () => {
		const data = [
			{ "name": "test1", "startDate": "2019-01-02", "channel": "Conversations" },
			{ "name": "test2", "startDate": "2019-01-02", "channel": "Conversations" },
			{ "name": "test3", "startDate": "2019-01-03", "channel": "Conversations" },
			{ "name": "test4", "startDate": "2019-01-03", "channel": "Conversations" },
			{ "name": "test5", "startDate": "2019-01-03", "channel": "Conversations" },
			{ "name": "test6", "startDate": "2019-01-04", "channel": "Conversations" },
		];
		const result = { "Conversations": ["2019-01-03"] };

		expect(sort(data)).toEqual(result);
	});

	test('should return object of notifications with dates when default test data is provided', () => {
		const result = {
			"Conversations": ["2019-01-01"], 
			"Email": ["2019-01-02"], 
			"Geo": ["2019-01-02"], 
			"InAppMessage": ["2019-01-04"], 
			"PushNotification": ["2019-01-02", "2019-01-03"]
		};

		expect(sort(data)).toEqual(result);
	});
})
