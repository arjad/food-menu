import React, { createContext, useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import "./admin.css";
import axios from "axios";
import AOS from "aos";
import Nav from "../common/nav/nav";
import Foot from "../common/footer/footer";
import Foot2 from "../common/footer2/footer2";
import Fries from "../../assets/fries.png";
import 'animate.css';
import save from "../../assets/save.png";
import Burger from "../../assets/food.jpg";
import Burger2 from "../../assets/burger.png";
import Drink from "../../assets/drink.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Del from "../../assets/del.png";
import Loading from '../common/loading/loading';

function Admin() 
{

  useEffect(()=>{
    AOS.init({duration:3000});
  },[])

  const history = useHistory();
  const [product, setProduct] = useState({
    productname:"", productprice:"",productcat:"", bestoffer:"",productimg:""
  })

  const [allproducts , setallproducts] = useState([]); 
  const [load, setload] = useState();

  //updated values
  const[updated_food_name, setupdated_food_name] = useState('');
  const[updated_food_price,setupdated_food_price] = useState('');



  //use signle state hooks to handle all input values
  let att_name, att_value;
  const handleinput = (e) =>{
    att_name = e.target.name;
    att_value= e.target.value;
    setProduct({...product, [att_name]:att_value })
    console.log("state = " , product);
  }
  
  ///select file
  const [singleFile, setSingleFile] = useState('');
  const [singleFiles, setSingleFiles] = useState([]);

  const getSingleFileslist = async () => {
    try {
        const fileslist = await getSingleFiles();
        setSingleFiles(fileslist);
    } 
    catch (error) 
    {
      console.log(error);
    }
  }

  useEffect(() => {
    getSingleFileslist();
  }, []);


  //upload image or file
  const uploadSingleFile = async () => {
    console.log("uploading file ");

    const formData = new FormData();
    formData.append('file', singleFile);

    try {
      await axios.post('http://localhost:5000/img/send', formData);
    } 
    catch (error) 
    {
      console.log("error in post image= ", error);
      throw error;
    }
    console.log("sent file = ", singleFile);

}

  //show pic from db
  const getSingleFiles = async () => {
    console.log("show img on screen");
    try {
        const {data} = await axios.get('http://localhost:5000/img/read');
        console.log("img data =", data);
        return data;
    } 
    catch (error) 
    {
        throw error;
    }
  }


getSingleFiles();


  //////////
  ///show data 
  const gettdataback = async (e)=>{  

    setload(true)

    //getting response from api (or mongo db as both have same data)
    fetch("http://localhost:5000/food/read")
    .then((response) => {

      if (response.ok) 
      {
        return response.json();
      } 
      else 
      {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      setload(false)
      console.log("READ-   All DB = ", data);
      setallproducts([...data])

    })
    .catch((error) => console.error("FETCH ERROR:", error));
  }



  /////////
  /// create data 
  const PostData = async (e)=>{
    e.preventDefault();

    //upload file also
    uploadSingleFile();

    //object destructring
    const {productname, productprice, productcat, bestoffer, productimg} = product;

    //post to server address
    const res = await fetch("http://localhost:5000/food/insert",{
      method:"POST",
      mode: 'cors',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({productname, productprice, productcat, bestoffer, productimg})
    })
  
    const data = await res.json();
     if(data.status === 422 || !data)
     {
       window.alert("POST- invalid reg");
     }
     else{
      console.log("POST- valid reg ");
     }
     gettdataback();
  }




  ////////
  /// edit update (front end to backend)
  let updatehandle = async (food_id) =>{
    // console.log("id = ", food_id);

    const data = await axios.put("http://localhost:5000/food/update",{
    id :food_id,
    updated_food_name:updated_food_name,
    updated_food_price:updated_food_price
    });

    if(data.status === 422 || !data)
    {
      window.alert("PUT- invalid reg");
    }
    else{
     console.log("PUT- valid reg ");
    }
    
    gettdataback(); 
  }



  ///////////////
  /// delete  
  let deletehandle = async (id) =>{
    console.log("DELETE");
      // console.log("id = ", food_id);

      const data = await axios.delete(`http://localhost:5000/food/delete/${id}`);
    
        if(data.status === 422 || !data)
        {
          window.alert("DELETE- invalid reg");
        }
        else{
         console.log("DELETE- valid reg ");
        }
        
        gettdataback();
   
  }

  return(
    <div>
      <Nav/>
        <div className="login-root">
          <div className="box-root ">
            <div className='row border'> 
              <div className='col-lg-6 col-sm-12 border right-ani bg-transparent'>
                <div className='lineimg'>                </div>
                <div className='imgs-ani'> 
                  <img data-aos="zoom-in" data-aos-duration="300" data-aos-delay="2500" className='fries-img animate__backInUp' src={Fries}/>
                  <img data-aos="zoom-in" data-aos-duration="300" data-aos-delay="2100" className='drink-img animate__backInUp' src={Drink}/>
                  <img data-aos="zoom-in" data-aos-duration="300" data-aos-delay="3000" className='burger-img animate__backInUp' src={Burger2}/>
                </div>
              </div>         
            
                <div className="col-lg-6 col-sm-12 bg-transparent p-5">
                    <h3>Add New Project</h3>                   
                      <form method='POST' id="stripe-login">
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Enter Product Name</label>
                        <input value={product.productname} onChange={handleinput} type="text" name="productname" required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Enter Product Price</label>
                        <input value={product.productprice} onChange={handleinput} type="text" name="productprice" required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Enter Product Catagory</label>
                        <select name="productcat" value={product.productcat} onChange={handleinput}>
                          <option value="Breakfast">Breakfast</option>
                          <option value="Sandwitches">Sandwitches</option>
                          <option value="Burger & Wraps">Burger & Wraps</option>
                          <option value="Freash Deserts">Freash Deserts</option>
                          <option value="Rice Bowls">Rice Bowls</option>
                          <option value="Noodle Bowls">Noodle Bowls</option>
                          <option value="Pasta & Streaks">Pasta & Streaks</option>
                          <option value="Platters">Platters</option>
                          <option value="Biryani & Trails">Biryani & Trails</option>
                          <option value="Fitt N Fabs">Fitt N Fabs</option>
                          <option value="Kito Special">Kito Special</option>
                        </select>
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Enter Best Offer</label>
                        <input value={product.bestoffer} onChange={handleinput} type="text" name="bestoffer" placeholder='true or false' required/>
                      </div>
                      <div className="field padding-bottom--24">
                        <div className="grid--50-50">
                          <label htmlFor="password">Enter Product Image</label>
                        </div>
                        <input value={product.productimg} onChange={handleinput} type="text" name="productimg" required />
                        <input type="file" name="productimg" onChange={(e) => { setSingleFile(e.target.files[0]) }}/>
                      
                      </div>


                      <div className="submit-btn">                       
                        <button  type="submit" onClick={PostData} name="submit" class="noselect save-btn">
                          <span class='text'>Save</span>
                          <img className='save-btn-img' src={save}/>
                        </button>
                      </div>
                    </form>
                    
                </div>
            </div>

            {/* /////////////// */}
            {/* show all db data */}
            <h2 className='my-3 text-center'>All Food Items
              <button class="btn-green" onClick={gettdataback}>
			          <img class="icon" src="https://htmlacademy.ru/assets/icons/reload-6x-white.png"/> Reload
		          </button>
              </h2>

            <div className='all-pro-div container d-flex justify-content-center flex-wrap '>
              
              {load ? <Loading/> : allproducts.map((x,index)=>{
                    
                return(
                     <div className='card m-3 '>
                        <div className='red_tag'>
                           {x.bestoffer}
                        </div>
                       
                        <span>
                            <i class="far fa-check-square mr-1"></i>
                            <pre>
                              {x.productcat}
                            </pre>
                        </span>
                        <div className='card-img-div'>
                            <img src={Burger}/>
                            <img src="ads" alt="no image"/>
                        <button onClick={()=> deletehandle(x._id)} className='del-btn'><img src={Del}/></button>

                        </div>
                      
                        <p className='dish_name'>{x.productname}
                          <input onChange={(e)=>{setupdated_food_name(e.target.value)}} className='dish_update' placeholder='Update Name'/>
                        </p>
                        <p className='price'>₹{x.productprice}
                          <input onChange={(e)=>{setupdated_food_price(e.target.value)}} className='price_update' placeholder='Update Price'/>
                        </p>
                        <button onClick={()=> updatehandle(x._id)} className='update-btn'>Update</button>

                      </div>)
                })
              }


          {singleFiles.map((file, index) => 
            <div className="card m-2 border-0 p-0">
              <p>{index} - {file.fileName}</p>
              <img src={`http://localhost:8080/${file.filePath}`} className="card-img-top" alt="img"/>
            </div>
          )}
              </div>
                       
          <Foot/>
        <Foot2/>
                
              </div>
        </div>
      </div>
  )};

export default Admin;
