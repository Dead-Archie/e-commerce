import { CustomerRepository } from '../database/index.js';
import { APIError } from '../utlis/app-error.js';

class CustomerService {
    constructor() {
        this.repository = new CustomerRepository();
    }

    async Signup(UserInput) {
        const { email, password, phone } = UserInput;

        try {
            const existingCustomer = await this.repository.CreateCustomer({ email, password, phone });
            
            return existingCustomer;
        } catch (err) {
            throw new APIError('Data Not found - Customer service', err)
        }
    }
}

export default CustomerService;