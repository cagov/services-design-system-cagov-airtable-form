const CreateAirtableRecord = require("./create-airtable-record.js");

// https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node?tabs=v2#node-version
// myTrigger, myInput, myOtherInput
const postData = (context, request) => {
  // let body = "";
  // request.on("data", async data => {
  //   body = body + data;
  console.log(request.body);
    const airtablePost = await CreateAirtableRecord.init(request.body);
  //   const jsonSuccess = {
  //     method: "POST",
  //     message: "Submitted to airtable",
  //     data
  //   };
  //   console.log("SUCCESS", jsonSuccess, airtablePost);

  //   context.res = {
  //     status: 200,
  //     "Content-Type": "text/json"
  //   };
  // });
};

module.exports = async function (context, request) {
  try {
    // REFS
    // const appName = context.executionContext.functionName;
    postData(request, context.response);
  } catch (e) {
    context.response = {
      status: 500,
      body: `Error - ${e.message}`
    };
  }
};
