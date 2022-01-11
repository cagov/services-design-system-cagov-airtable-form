


curl  -d "Name=CurlNamePOSTRequest&Email=test@example.com&Request=Request1"  -X POST https://fa-go-design-system-cagov-airtable-form.azurewebsites.net/api/AirtableFormTrigger?code=Zu6Ck/103KrMh2mp/7CANtN3dMrtHMpjdhayZm82OnGava5/A1urvQ==

curl  -d "Name=CurlNamePOSTRequest&Email=test@example.com&Request=Request1"  -X POST http://localhost:7071/airtable-post

az functionapp config set --linux-fx-version "node|14" 