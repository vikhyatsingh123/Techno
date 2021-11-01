const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/nodedynamic",{
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then( () => {
    console.log("db connected");
}).catch( (err) => {
 console.log(err);
});
