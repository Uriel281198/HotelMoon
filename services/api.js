import axios from "axios";

export const api = axios.create({      
  baseURL: 'https://backend.b4a.io/',
  headers: {
      "X-Parse-Application-Id": "jUJgBaVDTNz4TNs9ei1x5Tl2lnn6SVbZL9ego7Cv",      
      'X-Parse-Master-Key': "KlAig7iDj22bwC0bYYjYKasyvR8BoTCtmFk0Vejm",
      'X-Parse-REST-API-Key': "LNYbXM5pBXKj1c85wGSBBLDDkrZo9aoSNLRAYW5F",
  }
});


