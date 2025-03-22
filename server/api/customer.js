import CustomerService from '../services/customer-service.js';

const Customer = (app) =>{

    const service  = new CustomerService();

    app.post("/customer/signup", async (req, res, next) => {
        try {
          const { email, password, phone } = req.body;
          const { data } = await service.Signup({ email, password, phone });
          return res.json(data);
        } catch (err) {
          next(err);
        }
      });

} 

export default Customer;


