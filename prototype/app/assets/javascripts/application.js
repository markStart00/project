//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
	// Add JavaScript here

	// government api data --------------------------------------------------------------------
	const url = "https://www.gov.uk/api/world-locations";

	async function load() {
		let obj = null;
		try {
			obj = await ( await fetch(url) ).json();
		} catch(e) {
			console.log('error getting JSON from: ' + url);
		}

		// console.log(obj.results);

		let table = '<table class="govuk-table">' +
			'<caption class="govuk-table__caption govuk-table__caption--l"> Whitehall API data </caption>' +
			'<caption class="govuk-table__caption"> page 1 of 12 <a href="https://www.gov.uk/api/world-locations" target="_blank" > https://www.gov.uk/api/world-locations </a></caption>' +

			'<thead class="govuk-table__head">' +
			'<tr class="govuk-table__row">' +
			'<th scope="col" class="govuk-table__header"> </th>' +
			'<th scope="col" class="govuk-table__header"> Updated At</th>' +
			'</tr>' +
			'</thead>' +
			'<tbody class="govuk-table__body">';

		for (let i=0; i<obj.results.length; i++) {

			let title = obj.results[i].title;
			let webUrl = obj.results[i].web_url;
			let updatedAt = obj.results[i].updated_at;

			table += '<tr class="govuk-table__row">' +
				'<th scope="row" class="govuk-table__header"> <a href="' + webUrl + '" target="_blank" >' + title + '</a></th>' +
				'<td class="govuk-table__cell">' + updatedAt + '</td>' +
				'</tr>';

		}

		table += '</tbody>' +
			'</table>';

		window.document.getElementById('apiTable').innerHTML = table;

	}

	load();
	// ------------------------------------------------------------------------------------------

	// comment 



	// government api data 2 --------------------------------------------------------------------
	const url2 = "https://www.gov.uk/api/governments";

	async function load2() {
		let obj = null;
		try {
			obj = await ( await fetch(url2) ).json();
		} catch(e) {
			console.log('error getting JSON from: ' + url2);
		}

		console.log(obj.results);

		let table2 = '<table class="govuk-table">' +
			'<caption class="govuk-table__caption govuk-table__caption--l"> Whitehall API data 2 </caption>' +
			'<caption class="govuk-table__caption"> page 1 of 3 from <a href="https://www.gov.uk/api/world-locations" target="_blank" > https://www.gov.uk/api/governments  </a></caption>' +

			'<thead class="govuk-table__head">' +
			'<tr class="govuk-table__row">' +
			'<th scope="col" class="govuk-table__header"> </th>' +
			'<th scope="col" class="govuk-table__header"> Start Date</th>' +
			'<th scope="col" class="govuk-table__header"> End Date</th>' +
			'</tr>' +
			'</thead>' +
			'<tbody class="govuk-table__body">';

		for (let i=0; i<obj.results.length; i++) {

			let title = obj.results[i].title;
			let startDate = obj.results[i].details.start_date;
			let endDate = obj.results[i].details.end_date;

			if ( endDate == null ) endDate = "";

			table2 += '<tr class="govuk-table__row">' +
				'<th scope="row" class="govuk-table__header">' + title + '</a></th>' +
				'<td class="govuk-table__cell">' + startDate + '</td>' +
				'<td class="govuk-table__cell">' + endDate + '</td>' +
				'</tr>';

		}

		table2 += '</tbody>' +
			'</table>';

		window.document.getElementById('apiTable2').innerHTML = table2;

	}

	load2();

	// ----------------------------------------------------------------------------------------


	window.document.getElementById('apiTable2').innerHTML = "<p>hello</p>";


















})



















