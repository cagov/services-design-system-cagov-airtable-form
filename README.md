


curl  -d "Name=CurlNamePOSTRequest&Email=test@example.com&Request=Request1"  -X POST https://fa-go-design-system-cagov-airtable-form.azurewebsites.net/api/AirtableFormTrigger?code=Zu6Ck/103KrMh2mp/7CANtN3dMrtHMpjdhayZm82OnGava5/A1urvQ==

curl  -d "Name=CurlNamePOSTRequest&Email=test@example.com&Request=Request1"  -X POST http://localhost:7071/airtable-post

curl -X POST https://fa-go-design-system-cagov-airtable-form.azurewebsites.net/api/AirtableFormTrigger?code=Zu6Ck/103KrMh2mp/7CANtN3dMrtHMpjdhayZm82OnGava5/A1urvQ==
   -H "Content-Type: application/json"
   -d '{"fields": {"Name": "chach", "Email": "email@example.com", "Request": "Request1"}, "options": {"database": "app4B5KqaCTSHAdCS", "table": "01 - Design System Launch"
}}'  