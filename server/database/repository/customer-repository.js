import { CustomerModel } from '../models/index.js';
import { APIError, STATUS_CODES} from '../../utlis/app-error.js'

class CustomerRepository {
  async CreateCustomer({ email, password, phone }) {
    try {
      const customer = new CustomerModel({
        email,
        password,
        phone,
        address: [],
      });
      const customerResult = await customer.save();
      return customerResult;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Create Customer"
      );
    }
  }
}

export default CustomerRepository;