
import * as yup from 'yup'

export const userSchema = yup.object().shape({
    name: yup.string().min(3).required() ,
    sujet: yup.string().required() ,
    email: yup.string().email().required(),
    message: yup.string().min(3).required() ,
})
