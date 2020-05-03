process.env.PORT = process.env.PORT || '3000';

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

process.env.TIME_TOKEN = 30;

let urlDataBase;

if (process.env.NODE_ENV === 'dev') {
  urlDataBase = 'mongodb://localhost:27017/employment-verification';
} else {
    // connect to mongo atlas
  urlDataBase = 'mongodb://localhost:27017/employment-verification';
}

process.env.UrlDataBase = urlDataBase;
