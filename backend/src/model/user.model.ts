interface IUser {
    email: string,
    password: string,

    fullname: string,
    role: string, // User, Admin

    address: string?,
    relationship: string?, // enum Single, Dating, Married
    phone_number: string?,
    hometown: string?,
    avatar: string?,
    birthdate: number?, // unix time in seconds

    friends: Array<Types.ObjectId>, // reference User
    groups: Array<Types.ObjectId>, // reference Group
    blocks: Array<Types.ObjectId>, // reference User

    is_banned: boolean,

    warnings: number, // default 0

    last_online: number?, // unix time in seconds
    created_date: number?,
}
