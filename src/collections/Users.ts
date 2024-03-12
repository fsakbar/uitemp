import { User } from "lucide-react";
import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
    slug: "users",
    fields: [
        {
            name: 'role',
            type: 'select',
            options: [
                {label: 'admin', value: 'admin'},
                {label: 'user', value: 'user'}
            ]
        }
    ]
}

export default Users 