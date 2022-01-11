const CreateAirtableRecord = require("./create-airtable-record.js");

const postData = (context, request) => {
  if (request.method === "POST") {
    let body = "";
    request.on("data", async (data) => {
      body = body + data;
      const airtablePost = await CreateAirtableRecord.init(JSON.parse(body));
      const jsonSuccess = {
        method: "POST",
        message: "Submitted to airtable",
        data,
      };
      console.log("SUCCESS", jsonSuccess, airtablePost);

      context.res = {
        status: 200,
        "Content-Type": "text/json",
      };
    });
    request.on("end", async (data) => {
    });
  } else {
    context.res = {
      status: 500,
      body: `Error - Get requests are not supported.`,
      payload: json,
    };
  }
};

module.exports = async function (context, request) {
  try {
    // REFS
    // const appName = context.executionContext.functionName;
    // req.query["Trigger"] || req.body["trigger"] || "(Trigger)";
    // const postAgent = req.headers["user-agent"];
    postData(request, context.res);
  } catch (e) {
    context.res = {
      status: 500,
      body: `Error - ${e.message}`,
    };
  }
};
