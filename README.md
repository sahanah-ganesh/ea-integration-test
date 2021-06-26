# Problem

Your team is tasked with creating a HTTP API application that lists out music festival data in a particular manner.

The data is provided to you via an API by another team; they assure you all the data is available and have provided you with the Swagger documentation needed to get started.

The return pay load should be: at the top level, it should show the band record label, below that it should list out all bands under their management, and below that it should display which festivals they've attended, if any. All entries should be sorted alphabetically.

For example:
   [
       {
           "label": "Record Label 1",
           "bands": [
               {
                   "name": "Band X"
                   "festivals": [
                       {
                           "name": "Omega Festival"
                       }
                   ]
               }
           ]
       },
       {
           "label": "Record Label 2",
           "bands": [
               {
                   "name": "Band A"
                   "festivals": [
                       {
                           "name": "Alpha Festival"
                       },
                       {
                           "name": "Beta Festival"
                       }
                   ]
               }
           ]
       }
   ]
   
Elements for you to consider:
How could we dockerize this application?
Logging is important. Does your solution includes structured information?
How do we configure the app to run on multiple environments?
Building and running the application should be easy. Have you provided instructions?
A good solution should include documentation.
Write code which you would be proud to commit at work or to an open-source project.

