import React, {useState}from 'react'

function Product(props) {
  //   const[state, setAge]=useState(30);
  
  //   const handleChange=()=>{
    //     setAge(40)
    //  }
    const[myStyle, setStyle]=useState({
     backgroundColor:'white',
     color:'black'
    })
    const [btName, setBtName]=useState('Enable Dark Mode')

    const[name, setname]=useState({
        firstName:'abhisek',
        lastName:'dahal',
        isNepali:true,
        contact:9841173662

    })
  
     const handleManage=()=>{
      setname({
        firstName:'avi',
        lastName:'dfs',
        isNepali:false,
        contact:98411
      })
     }
     const darkMode=()=>{
      if(myStyle.backgroundColor==='black')
      {
        setStyle({
          backgroundColor:'white',
          color:'black'
        })
      }

      else{
        setStyle({
          backgroundColor:'black',
          color:'white'
        })
        setBtName("Enable Light Mode")
      }
     }
     const [controlled,setControlled]=useState(
      {
        email:''

      }
     )
     const handleChange=(e)=>{
      
      const name= e.target.name
      setControlled({
        [name]: e.target.value
     })
     }
  return (
    <div>
        {/* <input type="text" name="/" id="/"  />
        <p>
            <input type="checkbox" name="/" id="/" /> <label htmlFor="/">HYe</label>
        </p> */}
        {/* {state} */}
        <br />
        <button onClick={handleChange}> {props.button}</button>
        <p>
          {name.firstName}
          {name.lastName}
          {name.isNepali}
          {name.contact}
        </p>
        <button onClick={handleManage}>HHY</button>
        <p style={myStyle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex praesentium quae, accusamus hic sapiente nulla similique quam, molestias facilis voluptate ab mollitia et tempore vel vitae obcaecati a, inventore officia? Tempora itaque doloremque praesentium nam nemo exercitationem deleniti, libero dicta possimus quos doloribus commodi at quasi alias tempore adipisci soluta qui quaerat culpa, obcaecati voluptatum. Ullam libero exercitationem dolores nesciunt sequi earum nihil nisi iure dolorem inventore, ipsum enim maxime laudantium nulla sapiente! Voluptate facilis sit fugiat dolor blanditiis. Natus, neque! Totam ea tempora deserunt odio eius atque enim facere, vel, alias, fuga id. Ea iusto dicta eveniet iure sed! <br />
        <button onClick={darkMode} className='border-8 rounded'>
  change theme
</button>
<label>Email:</label>
<input type="text" name='email' value={controlled.email} onChange={handleChange} />

        </p>


    </div>
  )
}

export default Product