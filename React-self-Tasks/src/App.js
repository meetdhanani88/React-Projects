
// //    Custom Hook     // 

// import React from 'react'
// import useFetch from './CustomHook/useFetch'

// function App() {
//     const data = useFetch("https://jsonplaceholder.typicode.com/todos")
//     return (
//         <>
//             {data &&
//                 data.map((item) => {
//                     return <p key={item.id}>{item.title}</p>;
//                 })}
//         </>
//     );
// }

// export default App;



//    Formik   Form         // 

import React from 'react';
import { useForm } from 'react-hook-form';
import "./App.css"
const emailvalidpattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    const onSubmit = data => console.log(data);


    return (
        /*  <form onSubmit={handleSubmit(onSubmit)}>
              <select {...register("Title", { required: true })}>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
              </select>
              <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
              <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
              <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: emailvalidpattern })} />
              {errors.Email && <span>This field is required</span>}
              <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
              <input type="submit" />
          </form> */

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your account!</div>
            <div className="input-container ic1">
                <input id="firstname" className="input" type="text" placeholder="" {...register("Firstname", { required: true, maxLength: 80 })} />
                <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">First name</label>
                {errors.Firstname && <span style={{ color: "white" }}>This field is required</span>}
            </div>
            <div className="input-container ic2">
                <input id="lastname" className="input" type="text" placeholder="" {...register("Lastname", { required: true, maxLength: 100 })} />
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">Last name</label>
                {errors.Lastname && <span style={{ color: "white" }}>This field is required</span>}
            </div>
            <div className="input-container ic2">
                <input id="email" className="input" type="text" placeholder="" {...register("Email", { required: true, pattern: emailvalidpattern })} />
                <div className="cut cut-short"></div>
                <label htmlFor="email" className="placeholder">Email</label>
                {errors.Email && <span style={{ color: "white" }}>This field {errors.Email.type} Wrong</span>}
            </div>

            <span className='std'>Std</span>
            <select id="std" className="input-container ic2 select" {...register("Title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>
            <button type="text" className="submit">submit</button>
        </form>
    );
}

// import React from 'react';

// function App() {
//     return (
//         <div>App</div>
//     )
// }

// export default App;