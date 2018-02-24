module.exports = function(sequelize, DataTypes) {
    var burgers =sequelize.define("burgers", {
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1]}
        },
        pin: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { len:[1, 5]}
        },
        topping: {
            type: DataTypes.STRING
        },
        isComplete: {
            type: DataTypes.BOOLEAN
        }
    });
    return burgers;
};
