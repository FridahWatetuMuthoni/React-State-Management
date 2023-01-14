import { useState } from "react"

const Forms = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        description: '',
        completed: false,
        employment: '',
        color:''
    })
    
    const handleChange = (e) => {
        e.preventDefault()
        const{name,value,type,checked}=e.target
        setFormData((prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked :value
            }
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="first_name">Enter First Name:</label>
            <input type="text" name="firstname" id="firstname" value={formData.firstname} onChange={handleChange} />
            <br />
            <label htmlFor="last_name">Enter Last Name:</label>
            <input type="text" name="lastname" id="lastname" value={formData.lastname} onChange={handleChange} />
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} />
            <br />
            <textarea name="description" id="description" value={formData.description} onChange={handleChange} />
            <br />
            <input type="checkbox" name="completed" id="completed" checked={formData.completed} onChange={handleChange} />
            <label htmlFor="completed">Are you Friendly?</label>
            <br />
            <fieldset className="margin">
                <legend>Current Employment Status</legend>
                <input type="radio" name="employment" id="unemployed" value='unemployed' onChange={handleChange} checked={ formData.employment ==="unemployed"} />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input type="radio" name="employment" id="parttime" value='parttime' onChange={handleChange} checked={ formData.employment ==="partime"}/>
                <label htmlFor="parttime">Part Time</label>
                <br />
                <input type="radio" name="employment" id="fulltime" value='fulltime' onChange={handleChange} checked={ formData.employment ==="fulltime"} />
                <label htmlFor="fulltime">Fulltime</label>
                <br />
            </fieldset>
            <br />
            <label htmlFor="favColor"> What is your Favorite Color? </label>
            <select name="color" id="favColor" value={formData.color} onChange={handleChange}>
                <option value="">--choose color--</option>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Forms