const CreateAirtableRecord = require("./create-airtable-record.js");

module.exports = async function (context, req) {
  context.log(
    "JavaScript airtable-form HTTP trigger function processed a request."
  );

  const body = req.body;

  const airtablePost = CreateAirtableRecord.init(body);

  const responseMessage = {
    method: "POST",
    message: "Submitted to airtable",
    data: airtablePost
  };

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage
  };
};

