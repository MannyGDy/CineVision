import axios from "axios";

export class PaymentService {

    apiUrl =  `{process.env.REACT_APP_API_GATEWAY}/api/movie/payments/`

    sendTicketDetail(ticketDetail) {
        return axios.post(this.apiUrl + "sendTicketDetail", ticketDetail);
    }
}
