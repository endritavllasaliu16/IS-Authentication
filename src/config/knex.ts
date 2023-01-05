export const DATABASE_HOSTNAME = process.env.DB_HOSTNAME;
export const DATABASE_PORT = process.env.DB_PORT;
export const DATABASE_USERNAME = process.env.DB_USERNAME;
export const DATABASE_PASSWORD = process.env.DB_PASSWORD;
export const DATABASE_NAME = process.env.DB_NAME;
export const DATABASE_DIALECT = process.env.DB_DIALECT;

const connectionString = `${DATABASE_DIALECT}://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOSTNAME}:${DATABASE_PORT}/${DATABASE_NAME}`;

export const knexConfig = {
    client: 'pg',
    connection: encodeURI(connectionString),
    pool: {
        min: 0,
        max: 95,
    },
};
