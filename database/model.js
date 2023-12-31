import { Model,DataTypes } from 'sequelize';
import connectToDB from './db.js';
import util from 'util'

export const db = await connectToDB('postgresql:///savedUserData');

export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}
export class Saved extends Model {
    [util.inspect.custom] () {
        return this.toJSON();
    }
}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        passw: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        modelName: 'user',
        sequelize: db,
    },
  );

Saved.init(
    {
        savedId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        savedData: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        modelName: 'saved',
        sequelize: db
    }
  )

User.hasMany(Saved, { foreignKey: 'userId' })
Saved.belongsTo(User, {foreignKey: 'userId' })