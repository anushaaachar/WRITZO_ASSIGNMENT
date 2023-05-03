// import NavLink from 'cdbreact/dist/components/Navbar/NavLink';
import React, {useState,useEffect,useContext} from 'react';
import '../App.css'
import  {NavLink}  from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { adddata,deldata } from './ContextProvider';
import { updatedata } from './ContextProvider';

export const Home = () => {
    const [getuserdata, setUserdata] = useState([]);

    const { udata, setUdata } = useContext(adddata);
    const {updata, setUPdata} = useContext(updatedata);
    const {dltdata, setDLTdata} = useContext(deldata);

    const getdata = async () => {
        const res = await fetch("http://localhost:5000/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`http://localhost:5000/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }

    }


  return (
    <div className='row bg-light'>
        <div className='col-md-3'>
       <Sidebar/>
        </div>
        <div className='col-md-9'>
            <div className='bg-white'>
            <Navbar/>
            </div>
    <div className='mt-2'>
        Manage Distributors
    <div class="card">
      <div class="card-body">

        <div className='row'>
            <div className='col-md-1'>
            <button className='btn btn-primary status-button'>status</button>
            </div>
            <div className='col-md-10'>
                <div className='row'>
                    <div className='col-md-7'>

                    </div>
        
        {/* <Link to="/AddDistributors">
        <button className='btn btn-primary'>+</button>

      </Link> */}
   <div className='col-md-4'>
   <div class="form-group row text-right">
    <label for="staticEmail" className="col-sm-6 col-form-label search-label float-right">Search</label>
    <div class="col-sm-6">
      <input type="search"  placeholder="Search" className="form-control" id="staticEmail"></input>

      
    </div>
   
    </div>
    </div>
    <div className='col-md-1'>
    <div className='add_btn rounded-circle float-right'>
            <NavLink to="/AddDistributors" className='btn btn-primary'>+</NavLink>
        </div>
        </div>
        </div>
        </div>
        </div>

        <table className="table">
                        <thead>
                            <tr className="table-white">
                                <th scope="col">#</th>
                                <th scope="col">DISTRIBUTOR NAME</th>
                                <th scope="col">CONTACT PERSON</th>
                                <th scope="col">CONTACT NO</th>
                                <th scope="col">CITY</th>
                                <th scope="col">STATE</th>
                                <th scope="col">COUNTRY</th>
                                <th scope="col">STATUS</th>
                                <th scope="col">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getuserdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.DistributorName}</td>
                                                <td>{element.ContactPerson}</td>
                                                <td>{element.ContactNumber}</td>
                                                <td>{element.City}</td>
                                                <td>{element.State}</td>
                                                <td>{element.Country}</td>
                                                <td>{element.Status}
                                                </td>
                                                <td className="d-flex justify-content-between">
                                                    <NavLink to={`view/${element._id}`}> <button className="btn text-dark bg-transparent"><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`Edit/${element._id}`}>  <button className="btn text-dark bg-transparent"><CreateIcon /></button></NavLink>
                                                    <button className="btn text-dark bg-transparent" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {/* pagination */}
                        
                    <nav aria-label="Page navigation example">
  <ul class="pagination bg-light text-secondary justify-content-end pagination-sm rounded">
  <li class="page-item">
  <div class="form-group c-select  no-margin">
                      <select name="" id="" class="form-control-sm text-secondary">
                          <option value="">10</option>
                        <option value="">9</option>
                        <option value="">8</option>
                        <option value="">7</option>
                        <option value="">6</option>
                        <option value="">5</option>
                        <option value="">4</option>
                      </select>
                  </div>
                  </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&lsaquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link active" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&rsaquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home
