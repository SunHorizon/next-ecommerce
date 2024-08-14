'use server'

import { myWixClientServer } from "./wixClientServer"

export const updateUser = async (formdata:FormData) => {

    const wixClient = await myWixClientServer()

    const username = formdata.get('username') as string
    const id = formdata.get('id') as string
    const firstname = formdata.get('firstname') as string
    const lastname = formdata.get('lastname') as string
    const phone = formdata.get('phone') as string
    const email = formdata.get('email') as string


    try{
        const response = await wixClient.members.updateMember(id, {
            contact: {
                firstName: firstname || undefined,
                lastName: lastname || undefined,
                phones: [phone] || undefined,
            },
            loginEmail: email || undefined,
            profile: {nickname:username || undefined},
        });

    }catch(err){
        console.log(err);
    }

}