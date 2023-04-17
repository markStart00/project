//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a decision is submitted to check 
router.post('/check', function (req, res) {

	// Check decisionTextLength within range.
	var decisionTextLength = req.session.data['decision'].length

	// console.log(decisionTextLength);

	if ( decisionTextLength > 0 && decisionTextLength <= 255 ) {
		res.redirect('/confirm');
	}
	else {
		res.redirect('/check');
	}


})




