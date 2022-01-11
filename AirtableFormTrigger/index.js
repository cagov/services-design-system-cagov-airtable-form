const CreateAirtableRecord = require("./create-airtable-record.js");

// Default script (WORKS)
module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  // const name = (req.query.name || (req.body && req.body.name));
//   try {
//     const data = {
//       fields: req.body.fields,
//       options: req.body.options
//     };
//   } catch (error) {
//     context.log(error);
//   }
  // const postRequest = CreateAirtableRecord.init(body);

  const responseMessage = JSON.stringify(req);

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
    // error: error
  };
};
