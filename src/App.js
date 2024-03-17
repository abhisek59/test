import "./App.css";
import Card from "./Card";
// import Avisekk from './Component/Avisekk';
import Clock from "./Component/Clock";
import Conditional from "./Component/Conditional";
import Counter from "./Component/Counter";
import Dark from "./Component/DarkLight/Dark";
import Login from "./Component/Login/Login";
// import Card from './Component/Card';
// import Carousel from './Component/Carousel';
// import Laptop from './Component/Laptop';
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Youtube from "./Youtube";
import { Apple, Avatar, Icons, Mac, Prayasi } from "./assets";
import Index from "./Component/Forms/Index";
import Form from "./Component/Forms/Form";
import SignUp from "./Signup/SignUp";
import State from "./Component/Forms/state-up/State";
import Product from "./Component/product/Product";
import Song from "./Component/Youtube/Song";
import { ThemeContext, themeContext } from "./Component/Context/themeContext";
import { useContext, useState, useReducer } from "react";
import Coun from "./Component/counter/Counter";
import Input from "./Component/useRef/Input";
import Formdata from "./Component/Api/Formdata";
import Post from "./Component/Posts/Post";

// const Car =[
//   {
//     id:1,
//     Name:'BMW',
//     invention:2002,
//     Nepali:false

//   },
//   {
//     id:2,
//     Name:'Abc',
//     invention:2002,
//     Nepali:false

//   },
//   {
//     id:4,
//     Name:'Xyz',
//     invention:2003,
//     Nepali:false

//   },
//   {
//     id:3,
//     Name:'pqr',
//     invention:2004,
//     Nepali:false

//   },
//   {
//     id:5,
//     Name:'jds',
//     invention:2002,
//     Nepali:false

//   },

// ]
const Lists = [
  // {
  //   id:1,
  //   imageUrl: Mac,
  //   avatar: Avatar,
  //   icon:Icons,
  //   heading:'ANIMAL:Pehle Bhi Main(Full Video) | Ranbir Kapoor,Tripti Dimri |Sandeep V |Vishal M,Raj S |Bhushan K',
  //   channelName:'Abc',
  //   uploaded:35,
  // },
  {
    id: 4,
    imageUrl: Prayasi,
    avatar: Avatar,
    heading: "Aayush Koju - Priyasi [Official Lyrical Video]",
    channelName: "Aayush koju",
    uploaded: 3,
    icon: Icons,
    views: "1M",
  },
  {
    id: 5,
    imageUrl: Prayasi,
    avatar: Avatar,
    heading: "Aayush Koju - Priyasi [Official Lyrical Video]",
    channelName: "Aayush koju",
    uploaded: 3,
    icon: Icons,
    views: "1M",
  },
  {
    id: 5,
    imageUrl: Prayasi,
    avatar: Avatar,
    heading: "Aayush Koju - Priyasi [Official Lyrical Video]",
    channelName: "Aayush koju",
    uploaded: 3,
    icon: Icons,
    views: "1M",
  },
  {
    id: 6,
    imageUrl: Prayasi,
    avatar: Avatar,
    heading: "Aayush Koju - Priyasi [Official Lyrical Video]",
    channelName: "Aayush koju",
    uploaded: 3,
    icon: Icons,
    views: "1M",
  },
  {
    id: 7,
    imageUrl: Prayasi,
    avatar: Avatar,
    heading: "Aayush Koju - Priyasi [Official Lyrical Video]",
    channelName: "Aayush koju",
    uploaded: 3,
    icon: Icons,
    views: "1M",
  },
  // {
  //   id:1,
  //   imageUrl: ,
  //   heading:'7 Sign You are A Good Footballer',
  //   channelName:'Abc',
  //   uploaded:2,
  // }
];
function App() {
  //  const theme= useContext(ThemeContext)
  // const[mode,setMode]=useState(theme)

  // const Mode =()=>{
  //   setMode({

  //   })

  // }

  return (
    <>
      {/* <State/> */}
      {/* <Login/> */}
      <SignUp name="Sign-Up" phone_number={123} />
      {/* <Form/> */}
      {/* <Navbar/> */}
      {/* <Index/> */}
      {/* {
    Car.map((car)=>{
      return(
        <Card card={car} key={car.id}/>
      )
    })
  } */}
      {/* <div style={{display:'flex'}}>
  {
   Lists.map((list)=>{
    return(
      <Youtube data={list} key={list.id}/>
      )
    })
  } */}
      {/* </div> */}
      {/* <BrowserRouter>
 
    <Routes>
      <Route path='/' element={<Counter/>} />
      <Route path='/clock' element={<Clock/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    
    </BrowserRouter>
    <Dark/> */}
      {/* <div className="flex space-x-2">
{
  Lists.map((list) =>{
    return(
      <Youtube data={list} key ={list.id}/>
    )
  })
}
</div> */}
      {/* <div className=" flex flex-wrap  max-w-[1320px]">
        {Lists.map((list) => {
          return <Song data={list} key={list.id} />;
        })}
      </div>
      <Coun />
      <Input />

      <Formdata /> */}
      <h3>Hey</h3>
      <Post />
    </>
  );
}
export default App;
