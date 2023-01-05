import { Model } from "objection";

export default class UserModel extends Model {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;

    // Table name is the only required property.
    static tableName = "users";

    // Optional JSON schema. This is not the database schema! Nothing is generated
    // based on this. This is only used for validation. Whenever a model instance
    // is created it is checked against this schema. http://json-schema.org/.
    static jsonSchema = {
        type: "object",
        required: ["name", "email", "password"],

        properties: {
            id: { type: "integer" },
            name: { type: "string" },
            email: { type: "string" },
            password: { type: "string" },
        },
    };

    // This object defines the relations to other models. The relationMappings
    // property can be a thunk to prevent circular dependencies.
    static relationMappings = () => ({});
}
