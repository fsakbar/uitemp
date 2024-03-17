import { User } from "lucide-react";
import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
    slug: "users",
    // auth for access admin
    auth: {
        verify: {
            generateEmailHTML: ({token}) => {
                return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Verify Account</a>`
            },
        },
    },
    access: {
        read: () => true,
        create: () => true
    },
    fields: [
        {
            name: 'role',
            defaultValue: 'user',
            type: 'select',
            options: [
                {label: 'Admin', value: 'admin'},
                {label: 'User', value: 'user'}
            ]
        }
    ]
}

export default Users 