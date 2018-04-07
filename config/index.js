var configValues = require("./config");

module.exports = {

    getDbConnectionString: function(){
        return "mongodb://" + configValues.uname 
        + ":" + configValues.pwd 
        + "@ds237409.mlab.com:37409/tradingdashboarddb";
    }//closes DbConnString function
    //set up the string to connect to db, now set up what
    //data looks like with a model
    

}