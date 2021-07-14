const mongoose = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');
mongoose.plugin(toJson);

const MONGO_URL = process.env['MONGO_URL'];

const initializeDBConnection = async () => {
   try {
      const connectionStatus = await mongoose.connect(MONGO_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
      });

      if (connectionStatus) {
         console.log('DB connection Established');
      }
   } catch (error) {
      console.log('DB connection Failed', error);
   }
};

module.exports = { initializeDBConnection };
