"use client"
import { useForm } from "@tanstack/react-form";


interface User {
        fullname :string,
        email: string,
        password: string,
        confirmField: string,
}

const defaultUser: User = {
        fullname : "",
        email: "",
        password: "",
        confirmField: ""
}
const Form = () => {

  const form = useForm ({
    defaultValues: defaultUser,
  })

  return (
    <>
     <form action="submit">Submit your details

      <form.Field 
       name="fullname"
       children={(field)=>(
         <div>
           <label htmlFor={field.name}>First Name</label>
           <input type="text" 
           name={field.name}
           value={field.state.value}
           onBlur={field.handleBlur}
           onChange={(e)=>field.handleChange(e.target.value)}
           />
         </div>
       )   
       }
      />
      <form.Field 
       name="email"
       children={(field)=>(
         <div>
           <label htmlFor={field.name}>Email</label>
           <input type="text" 
           name={field.name}
           value={field.state.value}
           onBlur={field.handleBlur}
           onChange={(e)=>field.handleChange(e.target.value)}
           />
         </div>
       )   
       }
      />
      <form.Field 
       name="password"
       children={(field)=>(
         <div>
           <label htmlFor={field.name}>Password</label>
           <input type="text" 
           name={field.name}
           value={field.state.value}
           onBlur={field.handleBlur}
           onChange={(e)=>field.handleChange(e.target.value)}
           />
         </div>
       )   
       }
      />
      <form.Field 
       name="confirmField"
       children={(field)=>(
         <div>
           <label htmlFor={field.name}>Confirm Password</label>
           <input type="text" 
           name={field.name}
           value={field.state.value}
           onBlur={field.handleBlur}
           onChange={(e)=>field.handleChange(e.target.value)}
           />
         </div>
       )   
       }
      />
      
     <button type="submit">Submit</button>
     </form>
    </>
  )

}
export default Form;