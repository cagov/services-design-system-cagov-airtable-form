// const CreateAirtableRecord = require("./create-airtable-record.js");

// module.exports = async function (context, req) {
//   context.log(
//     "JavaScript airtable-form HTTP trigger function processed a request."
//   );

//   const body = req.body;

//   const airtablePost = CreateAirtableRecord.init(body);

//   const responseMessage = {
//     method: "POST",
//     message: "Submitted to airtable",
//     data: airtablePost
//   };

//   context.res = {
//     // status: 200, /* Defaults to 200 */
//     body: responseMessage
//   };
// };



module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

