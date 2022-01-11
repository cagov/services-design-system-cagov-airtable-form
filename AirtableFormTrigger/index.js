const CreateAirtableRecord = require("./create-airtable-record.js");

// Default script (WORKS)
module.exports = async function (context, req) {
//   context.log("JavaScript HTTP trigger function processed a request.");

  try {
    const postRequest = CreateAirtableRecord.init(req.body);

    const responseMessage = JSON.stringify(postRequest);

    context.res = {
      status: 200,
      body: JSON.stringify(responseMessage),
    };

  } catch (error) {
    context.res = {
      status: 500,
      body: `Error ${JSON.stringify(error)}`
    };
  }
};
