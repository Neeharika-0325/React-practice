import { useState } from "react"

 
export default function Form(){
    // const [firstName, setFirstName]=useState('')
    // const [lastName, setLastName]=useState('')
    // const [email, setEmail]=useState('')
    const [data ,setData]=useState({
        firstName: '',
        lastName: '',
        email:'',
        gender: 'f',
        foodPreferance: {
            veg: true,
            nonveg: true
        },
        maritalStatus: 'single'
    })
    return <>
        <form action='#' method="POST" onSubmit={e=>{
            e.preventDefault()
            console.log(data)
        }}>
            <div>
                <label>First Name</label>
                <input 
                    type="text" 
                    placeholder="John"
                    onChange={e=> setData(data=>({
                        ...data,
                        firstName: e.target.value
                    }))}
                    value={data.firstName}
                />
            </div>
            <div>
                <label>Last Name</label>
                <input 
                    type="text" 
                    placeholder="Doe"
                    onChange={e=> setData(data=>({
                        ...data,
                        lastName: e.target.value
                    }))}
                    value={data.lastName}
                />
            </div>
            <div>
                <label>E-mail</label>
                <input 
                    type="email" 
                    placeholder="John.doe@gmail.com"
                    onChange={e=> setData(data=>({
                        ...data,
                        email: e.target.value
                    }))}
                    value={data.email}
                />
            </div>
            <div>
                <label>Gender</label>
                <select
                    onChange={e=> setData(data=>({
                        ...data,
                        gender: e.target.value
                    }))}
                    // value={data.gender}
                >
                    <option value='f'>Female</option>
                    <option value='m'>Male</option>
                </select>
            </div>
            <div>
                <h4>Food Preference </h4>
                <div>
                    <input type="checkbox" id="veg" 
                        checked={data.foodPreferance.veg}
                        onChange={e=>{
                            // console.log(e.target.checked)
                            setData(data=>({
                                ...data,
                                // foodPreferance: e.target.checked
                                //     ? [...data.foodPreferance, 'veg']
                                //     : [data.foodPreferance.filter(e=> e!== 'veg')]
                                // foodPreferance: e.target.checked 
                                //     ?data.foodPreferance.push('veg')
                                //     :data.foodPreferance.splice(data.foodPreferance.indexOf('veg'))

                                foodPreferance:{
                                    ...data.foodPreferance,
                                    veg: e.target.checked
                                }
                            }))
                        }}
                        name="itempreferance"/>
                    <label htmlFor="veg">Vegetarian</label>
                </div>
                <div>
                    <input type="checkbox" id="non-veg" 
                        checked={data.foodPreferance.nonveg}
                        onChange={e=>{setData(data=>({
                            ...data,
                            foodPreferance: {
                                ...data.foodPreferance,
                                nonveg: e.target.checked
                            }
                        }))}}
                        name="itempreferance"/>
                    <label htmlFor="non-veg">Non Vegetarian</label>
                </div>
            </div>
            <div>
                <h4>Marital Status</h4>
                <div>
                    <input id="married" type="radio" name="marg-status"
                        checked={data.maritalStatus === 'married'} 
                        onChange={e=> {
                            console.log(e.target.checked)
                            setData(data=>({
                            ...data,
                            maritalStatus: e.target.checked ? 'married' :data.maritalStatus
                        }))}}/>
                    <label htmlFor="married">married</label>
                </div>
                <div>
                    <input id="single" type="radio" name="marg-status"
                        checked={data.maritalStatus === 'single'} 
                        onChange={e=>{
                            console.log(e.target.checked)
                            setData(data=>({
                            
                            ...data,
                            maritalStatus: e.target.checked ? 'single' :data.maritalStatus
                        }))}}/>
                    <label htmlFor="single">Single</label>
                </div>
            </div>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    </>
}