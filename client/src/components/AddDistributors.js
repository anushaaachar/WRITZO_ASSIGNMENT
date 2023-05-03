import React,{useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


const AddDistributors = () => {

    const history = useNavigate();

    const [inpval,setINP]=useState({
        DistributorName:"",
        ContactPerson:"",
        ContactEmail:"",
        ContactNumber:"",
        AddressLine1:"",
        AddressLine2:"",
        DistributorGSTN:"",
        City:"",
        State:"",
        Country:"",
        Pincode:"",
        Status:""

    })
    const setdata=(e)=>{
        console.log(e.target.value);
        const {DistributorName,value} = e.target;
        setINP((preval)=>{
            return{
            ...preval,
                [DistributorName]:value
            }

        })
    }
   
    const addinpdata = async (e)=>{
        e.preventDefault();
        const {DistributorName,ContactPerson,ContactEmail,ContactNumber,AddressLine1,AddressLine2,DistributorGSTN,City,State,Country,Pincode,Status}= inpval;
        const res = await fetch("http://localhost:5000/create",{
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify({
                DistributorName,ContactPerson,ContactEmail,ContactNumber,AddressLine1,AddressLine2,DistributorGSTN,City,State,Country,Pincode,Status
            })
           
        });
         console.log(res);
        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            // alert("error");
    }
    else {
        history.push("/")
        alert("data added")
        console.log("data added");

    }
}
  return (
   
       
    
    <div className='row bg-light'>
        
        <div class='col-md-3'>
    <Sidebar/>
        </div>
    <div className='col-md-9'>
    <div className='row bg-white'>
            <Navbar/>
            </div>
    <pre>ManageDistributors &gt; Add Distributors</pre>
    <div class="card">
      <div class="card-body">
       <form className="mt-4">
                <div className="row">
                     <div className="col-md-9 col-lg-9 col-12">
                    <div className='row'>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">DISTRIBUTOR NAME</label>
                        <input type="text" value={inpval.DistributorName} onChange={setdata} name="DistributorName" placeholder='DISTRIBUTOR NAME' className="form-control" id="exampleInputtext1" aria-describedby="emailHelp" />
                    </div>
                    
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">ContactPerson</label>
                        <input type="text" value={inpval.ContactPerson} onChange={setdata} name="ContactPerson" placeholder='CONTACT PERSON' class="form-control" id="exampleInputtext" />
                    </div>
                    </div>
                    <div className='row'>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">ContactEmail</label>
                        <input type="email" value={inpval.ContactEmail} onChange={setdata} placeholder='CONTACT EMAIL' name="ContactEmail" class="form-control" id="exampleInputtext" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">ContactNumber</label>
                        <input type="text" value={inpval.ContactNumber} onChange={setdata} placeholder='CONTACT NUMBER' name="ContactNumber" className="form-control" id="exampleInputtext" />
                    </div>
                    </div>
                    <div className='row'>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">AddressLine1</label>
                        <input type="text" value={inpval.AddressLine1} onChange={setdata} placeholder='ADDRESSLINE1'name="AddressLine1" class="form-control" id="exampleInputtext" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">AddressLine2</label>
                        <input type="text" value={inpval.AddressLine2} onChange={setdata} placeholder='ADDRESSLINE2' name="AddressLine2" class="form-control" id="exampleInputtext" />
                    </div>
                    </div>
                   </div>

                    <div className="col-md-3 col-lg-3 col-12">
                        <div className='form-outline mt-4'>
                        <textarea type="text" rows="9" col="3" value={inpval.AddressLine2} onChange={setdata} name="AddressLine2" class="form-control" id="exampleInputtext" ></textarea>
                    </div>
                  
                 
                   </div>
                   </div>
                     
                    <div className='row'>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">DistributorGSTN</label>
                        <input type="text" name="DistributorGSTN" value={inpval.DistributorGSTN} onChange={setdata}  placeholder='DISTRIBUTOR GSTN' className="form-control" id=""></input>

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">CITY</label>
                        <input type="text" name="City" value={inpval.City} onChange={setdata} placeholder='CITY' className="form-control" id=""></input>

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">STATE</label>
                        <input type="text" name="City" value={inpval.City} onChange={setdata} placeholder='STATE' className="form-control" id=""></input>

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">COUNTRY</label>
                        <input type="text" name="Country" value={inpval.Country} onChange={setdata} placeholder='COUNTRY' className="form-control" id=""></input>

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">PINCODE</label>
                        <input type="text" name="Pincode" value={inpval.Pincode} onChange={setdata} placeholder='PINCODE' className="form-control" id=""></input>

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">STATUS</label>
                        <input type="text" name="Status" value={inpval.Status} onChange={setdata} placeholder='STATUS' className="form-control" id=""></input>

                    </div>
                    </div>
                    <div class="col-md-12 bg-light">
                    <button type="submit" onClick={addinpdata} className="btn btn-primary submit-button">Add Distributor</button>
                    </div>
                    
            </form>
            </div>
            </div>

    </div>
    </div>

  )
}


export default AddDistributors
