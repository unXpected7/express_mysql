const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize({
    database: 'merncruds_new',
    host: '127.0.0.1',
    username: 'root',
    password: 'root',
    dialect: 'mysql'
});

(async () =>{
    try{
        await sequelize.authenticate()
        console.log('Connection has been established succesfully')
    }
    catch (error){
        console.error('Unable to connect to the database:', error)
    }
})();

module.exports = sequelize