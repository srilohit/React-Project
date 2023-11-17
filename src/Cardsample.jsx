import React from "react";

const Cardsample =()=>{

    return (
        <div className="m-3">
            <div className="card" style={{width:'20rem'}}>
                <div className="card-body">
                    <div className="row">
                        <div  className="col">
                            <div className="position-relative">
                                <span className="position-absolute top-50 end-0 translate-middle p-2 bg-success border border-light rounded-circle"></span>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUikxsUxi1Ut_ofT7_GOsNou9OH3eZgwp8Q&usqp=CAU" width={'115px'} height={'110px'} style={{borderRadius:'50%', border:'3px solid grey'}} alt="" />
                            </div>
                            <div>
                                <strong><small>DATE OF BIRTH </small></strong> <br />
                                <small>12-May-1988</small>
                            </div>
                            <div>
                                <strong><small>MOBILE NO</small></strong> <br />
                                <small>1234567890</small>
                            </div>
                        </div>
                        <div className="col w-50">
                        <div>
                                <strong><small>MS SHREYA SHAH</small></strong> <br />
                                <small><i class="bi bi-file-person"></i> 0001</small><br />
                                <small><i class="bi bi-person-fill"></i> CEO</small><br />
                                <small><i class="bi bi-buildings"></i> Management</small><br />
                                <small><i class="bi bi-geo-alt"></i> Mumbai</small>
                            </div>
                            <div>
                                <strong><small>DATE OF JOINING</small></strong> <br />
                                <small>06-Feb-2008</small>
                            </div>
                            <div>
                                <strong><small>EMAIL</small></strong> <br />
                                <small>shreyashah@factohr.com</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cardsample;