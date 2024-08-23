const { z } = require("zod");

const loginSchema = z.object({

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .min(3,{message:"Email must be at least of 3 charaters"})
    .max(260,{message:"Email must not be more than 260 charaters"}),

    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(6,{message:"Password must be at least 6 charaters"})
    .max(1024,{message:"Password must not be more than 1024 charaters"}),

})


const signupSchema = loginSchema.extend({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least of 3 charaters"})
    .max(260,{message:"Name must not be more than 260 charaters"}),
  
   

    phone: z
    .string({required_error:"Phone number is required"})
    .trim()
    .min(10,{message:"Phone must be at least of 10  charaters"})
    .max(20,{message:"Phone  must not be more than 20 charaters"}),

    
});

module.exports = {signupSchema, loginSchema};