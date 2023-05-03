import React from 'react'
import logo from '../assets/bell.svg';
import arrow from '../assets/arrow.svg';
const Navbar = () => {
  return (
    <div className='text-left'>
       <div class="row flex-nowrap px-2"> 
      
<div class="col">
    <div class='row flex-nowrap'>
        <div class='col rounded'>
<nav class="navbar navbar-dark bg-white rounded">
  <div class="container-fluid">
    <form class="d-flex input-group search-bar">
      <input
        type="search"
        class="search-bar form-control border-0"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </form>
    
  </div>
  
</nav>
</div>
<div className='col-md-4'>

</div>
<div class='col-md-2 float-right'>
<img src={logo} className="App-logo" alt="logo"  width="20" height="20" />

<a href="/Home" class="navbar-brand rounded-circle">
  
  <img src="https://picsum.photos/200/300?random=1" class="rounded-circle"
                    alt="login_person_image" width="30" 
                    height="30"
                    ></img>
                </a>
<span>Avinash</span>
<img src={arrow} className="App-logo" alt="arrow" width="15" height="15" />

</div>
</div>
</div>
</div>
    </div>
  )
}

export default Navbar