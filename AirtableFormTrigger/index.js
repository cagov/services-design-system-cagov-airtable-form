const CreateAirtableRecord = require("./create-airtable-record.js");

// Default script (WORKS)
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // const name = (req.query.name || (req.body && req.body.name));

    const postRequest = CreateAirtableRecord.init(req.body);

    const responseMessage = "Success";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

