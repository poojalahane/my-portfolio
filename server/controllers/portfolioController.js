const { response } = require("express");

const sendEmailController = (request, response) => {

try {
  return response.status(200).send({
    success:true,
    message:'Your Message Send Successfully...'
  })
  
} catch (error) {
  console.log(error);
  return response.status(500).send({
    success:false,
    message: 'Send Email API Error',
    error
  })
}

};

module.exports = { sendEmailController };
