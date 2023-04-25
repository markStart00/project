import axios from 'axios';

const API_BASE_URL = "";

class QandAService {

	getAllQuestions() {
		return axios.get( API_BASE_URL + "all-questions" );
	}

}

export default new QandAService() 


