
/**
 * Function takes an array of channel notifications and returns the most popular dates for each channel.
 * 
 * @param {{_id: string, name: string, description: string, startDate: string, channel: string}[]} list 
 * @return {Object}
 * 
 * Example output
 *	{
 * 		"PushNotification": [ "2019-01-03" ],
 * 		"Conversations": [ "2019-01-02", "2019-01-03" ]
 * 	}
 */
const sort = (list) => {
	const result = {};

	for (const notification of list) {
		result[notification.channel] = [...result[notification.channel] || [], notification.startDate];
	}

	for (const property in result) {
		result[property] = findTheMostFrequentItems(result[property]).sort();
	}

	return result;
}

/**
 * Function which returns an array of most frequent strings in the array.
 * 
 * @param { string[]} items 
 * @return { string[] }
 * 
 * Example: 
 * 	input: [ "2019-01-02", "2019-01-02", "2019-01-03", "2019-01-04", "2019-01-04", "2019-01-04" ]
 * 	output: [ "2019-01-04" ]
 * or
 * 	input: [ "2019-01-02", "2019-01-02", "2019-01-03", "2019-01-04", "2019-01-04" ]
 * 	output: [ "2019-01-02", "2019-01-04" ] 
 */
const findTheMostFrequentItems = (items) => {
	let map = new Map()
	let result = [];
	for (let item of items) {
		map.set(item, (map.get(item) || 0) + 1);
	}

	const maxCount = Math.max(...Array.from(map.values()));

	for (let [item, count] of map.entries()) {
		if (count === maxCount) {
			result = [...result, item];
		}
	}

	return result;
}

export default sort;