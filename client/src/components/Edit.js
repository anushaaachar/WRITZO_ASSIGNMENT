import React ,{useState,useEffect,useContext} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useNavigate, useParams } from 'react-router-dom'
import { updatedata } from './ContextProvider'

const Edit = () => {
    const history = useNavigate();
  const {updata, setUPdata} = useContext(updatedata)

  // const history = useHistory("");
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
        preval,
            [DistributorName]:value
        }

    })
}
const { id } = useParams("");
console.log(id);

const getdata = async(e)=>{
    // e.preventDefault();
    const {DistributorName,ContactPerson,ContactEmail,ContactNumber,AddressLine1,AddressLine2,DistributorGSTN,City,State,Country,Pincode,Status}= inpval;
    const res = await fetch(`http://localhost:5000/getuser/${id}`,{
        method:"GET",
        headers:{
            "content-Type":"application/json"
        },body:JSON.stringify({
            DistributorName,ContactPerson,ContactEmail,ContactNumber,AddressLine1,AddressLine2,DistributorGSTN,City,State,Country,Pincode,Status
        })
       
    });
     console.log(res);
    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
        console.log("error ");
        
}
else {
    alert("data added")
    console.log("data added");

}
}
useEffect(() => {
  getdata();
}, []);
const updateuser = async(e)=>{
  e.preventDefault();

  const {DistributorName,ContactPerson,ContactEmail,ContactNumber,AddressLine1,AddressLine2,DistributorGSTN,City,State,Country,Pincode,Status} = inpval;

  const res2 = await fetch(`http://localhost:5000/updateuser/${id}`,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body:JSON.stringify({
        DistributorName,ContactPerson,ContactEmail,ContactNumber,AddressLine1,AddressLine2,DistributorGSTN,City,State,Country,Pincode,Status
      })
  });

  const data2 = await res2.json();
  console.log(data2);

  if(res2.status === 422 || !data2){
      alert("fill the data");
  }else{
      history.push("/")
      setUPdata(data2);
  }

}
  return (
    <div className='row bg-light'>
        
        <div class='col-md-3'>
    <Sidebar/>
        </div>
    <div className='col-md-9'>
    <div className='bg-white'>
            <Navbar/>
            </div>
    <pre>ManageDistributors &gt; Add Distributors</pre>
    <div class="card">
      <div class="card-body">
       <form className="mt-4">
                <div className="row">
                     <div className="col">
                <div className="row">
                {/* <div className="mb-3 col-md-8 col-lg-8 col-12"> */}
                    <div class="mb-3 col-lg-4 col-md-4 col-12">
                        <label for="exampleInputEmail1" className="form-label">DISTRIBUTOR NAME</label>
                        <input type="text" value={inpval.DistributorName} onChange={setdata} name="DistributorName" className="form-control" id="exampleInputtext1" aria-describedby="emailHelp" />
                    </div>
                    
                    <div className="mb-3 col-lg-4 col-md-4 col-12">
                        <label for="exampleInputPassword1" className="form-label">ContactPerson</label>
                        <input type="text" value={inpval.ContactPerson} onChange={setdata} name="ContactPerson" class="form-control" id="exampleInputtext" />
                    </div>
                    </div>
                    <div className="row">
                    <div class="mb-3 col-lg-4 col-md-4 col-12">
                        <label for="exampleInputPassword1" className="form-label">ContactEmail</label>
                        <input type="email" value={inpval.ContactEmail} onChange={setdata} name="ContactEmail" class="form-control" id="exampleInputtext" />
                    </div>
                    <div class="mb-3 col-lg-4 col-md-4 col-12">
                        <label for="exampleInputtext" className="form-label">ContactNumber</label>
                        <input type="text" value={inpval.ContactNumber} onChange={setdata} name="ContactNumber" className="form-control" id="exampleInputtext" />
                    </div>
                    </div>
                  
                    <div className="row">
                    <div className="mb-3 col-lg-4 col-md-4 col-12">
                        <label for="exampleInputtext" className="form-label">AddressLine1</label>
                        <input type="text" value={inpval.AddressLine1} onChange={setdata} name="AddressLine1" class="form-control" id="exampleInputtext" />
                    </div>
                    <div className="mb-3 col-lg-4 col-md-4 col-12">
                        <label for="exampleInputtext" className="form-label">AddressLine2</label>
                        <input type="text" value={inpval.AddressLine2} onChange={setdata} name="AddressLine2" class="form-control" id="exampleInputtext" />
                    </div>
                    </div>
                    </div>
                   


                  
                 
                   </div>
                     
                    <div className='row'>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">DistributorGSTN</label>
                        <input type="text" name="DistributorGSTN" value={inpval.DistributorGSTN} onChange={setdata} className="form-control" id=""></input>

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">CITY</label>
                        <input type="text" name="City" value={inpval.City} onChange={setdata} className="form-control" id=""></input>

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">STATE</label>
                        <input type="text" name="City" value={inpval.City} onChange={setdata} className="form-control" id=""></input>

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">COUNTRY</label>
                        <input type="text" name="Country" value={inpval.Country} onChange={setdata} className="form-control" id=""></input>

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">PINCODE</label>
                        <input type="text" name="Pincode" value={inpval.Pincode} onChange={setdata} className="form-control" id=""></input>

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputtext" className="form-label">STATUS</label>
                        <input type="text" name="Status" value={inpval.Status} onChange={setdata} className="form-control" id=""></input>

                    </div>
                    </div>
                    <div class="col-md-12 bg-light">
                    <button type="submit" onClick={updateuser} className="btn btn-primary submit-button">Add Distributor</button>
                    </div>
                    
            </form>
            </div>
            </div>

    </div>
    </div>
  )
}

export default Edit
