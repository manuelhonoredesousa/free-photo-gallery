# free-photo-gallery
This is a free photo gallery, this site is only aimed at being able to download your images for free and without ads and with a few clicks...

To test or access without installing anything on your machine, access the link -> https://free-photo-gallery.onrender.com

To test or start using it, follow the steps below:

To create or get data from environment variables "cseId" and "apiKey", follow the explanation copied below or see where the whole explanation was taken from <a href="https://www.npmjs.com/package/image-search-google" target="_blank">click here.</a>

#Set up Google Custom Search Engine

Please see Google's <a href="https://developers.google.com/custom-search/json-api/v1/reference/cse/list#parameters" target="_blank" style="color:red">API documentation</a> for details on the option and response properties and their possible values. Note that the option names used here may differ slightly (e.g. no img prefix).

Google deprecated their public Google Images API, so to search for images you need to sign up for Google Custom Search Engine. Here are the steps you need to do: 


1. Create a Google Custom Search Engine You can do this here: https://cse.google.com/cse.

    Do not specify any sites to search but instead use the "Restrict Pages using Schema.org Types" under the "Advanced options". For the most inclusive set, use the Schema: Thing. Make a note of the CSE ID.

2. Enable Image Search
In your search engine settings, enable "Image search".

3. Set up a Google Custom Search Engine API
Register a new app and enable Google Custom Search Engine API here: <a href="https://console.developers.google.com/" target="_blank" style="color:red">Google Developers Console</a>. Make a note of the API key.

#API

<strong>Client(cseId, apiKey)</strong>

<strong>cseId</strong>
Type: string

The <a href="https://developers.google.com/custom-search/json-api/v1/overview#prerequisites" target="_blank" style="color:red">identifier</a> for a Custom Search Engine to use.

<strong>apiKey</strong>
Type: string

The <a href="https://support.google.com/googleapi/answer/6158857?hl=en" target="_blank" style="color:red">credentials</a> for accessing Google's API.

#Next Step

After getting the data, fill in the data in the ".env" file, and then open the terminal and type

> npm install or you can also use: npm i