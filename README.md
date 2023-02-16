## What is it?

A lightweight, performant, accessible form wrapper that posts to Airtable through a micro-service endpoint.

Created as a light & simple way to do basic database set up for business/product-focused teams to be able to set up data collection tools more easily and make use of the information sharing features of Airtable
This similar approach could be used to integrate with other business systems. This is intended to help avoid the extra burden of passing around excel spreadsheets and extra work to load simple data into tools that are used for day-to-day business operations. The pattern is meant to be agnostic to the technology. The kind of technologies are collaborative spreadsheets - so this pattern could work with Airtable, Coda, related Microsoft products, etc.

* In use on CA design system site.
* A form wrapper that can be easily swapped out to post data to other databases.
* A flexible option for prototyping UI form on pilot websites 
* Continued usage of no-code structured databases to understand workflows and patterns a team can use to accept feedback
* Take advantage of the structured data that Airtable provides
* Inheriting performance and feedback patterns from Page Feedback
* Easy to update (add, remove fields)
* Reduce need for third-party form widget and allow simple form fields
* Includes clear security guidelines

### Component
https://github.com/cagov/design-system/tree/main/docs/src/js/airtable-form

### Endpoint
https://github.com/cagov/services-design-system-cagov-airtable-form

### Airtable Bases
Design System Feedback

## Related issues
https://github.com/cagov/design-system/issues?q=label%3A%22Component+-+cagov-airtable-form%22


## Basic architecture

* Airtable base with a table and fields - collect and socialize data with team and team’s processes.
  * Requires account with Airtable payment plan
  * Table includes the structured data fields desired for the form and any views, shares
  * Team needs to work out their management of the data and any anonymity practices
  * Not intended for any PII or HIPAA data.
  * Prototyping & Pilot scale: Max records 50K per table. 100K per base.
  * Rate limiting 5 hits per second.
* Azure FaaS/Microservice - Provides an intermediary listening service to take POST requests from form and use AIRTABLE_API_KEY to authenticate and post to the database using the AIRTABLE api.
  * Type: http trigger function
  * maxConcurrent users: 200
  * Allow origin: need to include allowed domains
  * Timeout: 5 minutes
  * Requires AIRTABLE_API_KEY and GITHUB_TOKEN 
  * Github repo: 
* HTML web component
  * Requires Airtable appID (found in URL prefixed with app example appe3I9zA7024F66q for base cagov airtable form tests
  * Requires Airtable table name. For now, this is just the plain text table name. Trying this out, it may become a management risk. If needed or table name is unstable, there is a table ID that can also be used.
  * Requires working endpoint service that can post to Airtable
  * Success message
  * Error message

## Installation

* Design form
* Add form fields to a base table in Airtable
* Create safe Airtable account and add account to base as Editor
  * Our API key base uses Airtable account as a Base collaborator with Editor privileges. This account is used to reduce risk (can remove user from Airtable base quickly)
  * Go to User > Account > Scroll to the API key section, regenerate API key if appropriate
  * Don’t need to add an API key to a password manager, it can be reset through Airtable.
* Note the: API KEY, App ID and Table name
* Keep the table name in sync in Airtable and in the HTML markup
  * limit table configuration to trusted team members if you don’t want teammate to change the table without keeping it in sync
* Add a new microservice
  * Create new git repo
  * Copy code from on 
  * Set the API key
    * The API key is set in the function trigger for the service (services-design-system-cagov-airtable-form)
    * Go to Azure FaaS for the service: FA-GO-DESIGN-SYSTEM-CAGOV-AIRTABLE-FORM
    * Go to Configuration > AIRTABLE_API_KEY and reset the API key there.
    * GITHUB_TOKEN is also required to connect the service app to the github build process. This is a token managed (by Chad?) & reused in our projects.


### Debugging API behavior tricks
curl  -d "Name=CurlNamePOSTRequest&Email=test@example.com&Request=Request1"  -X POST https://fa-go-design-system-cagov-airtable-form.azurewebsites.net/api/AirtableFormTrigger?code=Zu6Ck/103KrMh2mp/7CANtN3dMrtHMpjdhayZm82OnGava5/A1urvQ==

curl  -d "Name=CurlNamePOSTRequest&Email=test@example.com&Request=Request1"  -X POST http://localhost:7071/airtable-post

curl -X POST https://fa-go-design-system-cagov-airtable-form.azurewebsites.net/api/AirtableFormTrigger?code=Zu6Ck/103KrMh2mp/7CANtN3dMrtHMpjdhayZm82OnGava5/A1urvQ==
   -H "Content-Type: application/json"
   -d '{"fields": {"Name": "chach", "Email": "email@example.com", "Request": "Request1"}, "options": {"database": "app4B5KqaCTSHAdCS", "table": "01 - Design System Launch"
}}'  