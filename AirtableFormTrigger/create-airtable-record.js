const Airtable = require("airtable");

const config = {
  AIRTABLE_API_KEY: process.env["AIRTABLE_API_KEY"]
};

const CreateAirtableRecord = {
  init: (data) => {
    const { fields, options } = data;

    const base = new Airtable({ apiKey: config.AIRTABLE_API_KEY }).base(
      options.database
    );

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

    return {
      data: "Success"
    };
  }
};
module.exports = CreateAirtableRecord;
