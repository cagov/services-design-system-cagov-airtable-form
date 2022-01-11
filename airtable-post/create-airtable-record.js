const Airtable = require("airtable");

const config = {
  AIRTABLE_API_KEY: process.env["AIRTABLE_API_KEY"]
};

const CreateAirtableRecord = {
  init: data => {
    const { fields } = data;
    const { options } = data;
    console.log("AIRTABLE_API_KEY", AIRTABLE_API_KEY);
    // console.log("fields", fields);
    // console.log("options", options);

    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
      options.database
    );

    // console.log("base", options.table);

    base(options.table).create(
      [
        {
          fields
        }
      ],
      (err, records) => {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(record => {
          console.log(record.getId());
        });
      }
    );
  }
};
module.exports = CreateAirtableRecord;
