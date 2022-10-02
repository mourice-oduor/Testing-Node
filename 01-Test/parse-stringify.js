// takes in ?by=mourice-oduor and returns { by: 'mourice-oduor' }
const parse = (queryString) => {

	// remove the ? from the queryString
	if (queryString[0] === '?') {
		queryString = queryString.substring(1)
	}
	// split the queryString into an array of key value pairs
	let queries = queryString.split("&")
	const params = {}

	// loop through the array and create an object with the key value pairs
	queries.forEach(query => {
		const queryObject = query.split('=')
		params[queryObject[0]] = queryObject[1]
	})

	return params
}

// takes in an object and removes all the empty values
const removeEmpty = (obj) => {
	Object.keys(obj).forEach((key) => (obj[key] === null || obj[key] === undefined) && delete obj[key])

	return obj
}

// takes in { by: 'mourice-oduor' } and returns ?by=mourice-oduor
const stringify = (queryObject) => {
	// remove all the empty values from the queryObject
	queryObject = removeEmpty(queryObject)
	let queryString = ''

	// loop through the queryObject and create a queryString
	for (let element of Object.keys(queryObject)) {
		queryString = `${queryString}&${element}=${queryObject[element]}`
	}

	return queryString.substring(1)
}

module.exports = {
  stringify,
  parse
}
