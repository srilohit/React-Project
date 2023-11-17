function Cart(props){

    var getTotal =()=>{
        let sum = props.cart.reduce((t,p)=>{
            return (t+(p.count*p.price))
        },0); 
        return sum.toFixed(2);
    };
    
return(
    <div className='border border-4 border-secondary p-2'>
        <h2 className="text-danger"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            Cart
        </h2>
        <hr />
        <ul>
            {
                props.cart.map((p)=>{
                    return(
                        <li className="d-flex flex-wrap justify-content-between">
                            <div className="w-50">{p.title}</div>
                            <div className="w-25 text-end">{p.count}</div>
                            <div className="w-25 text-end">{parseFloat(p.count*p.price).toFixed(2)}</div>
                        </li>
                    )
                })
            }
        </ul>
        <hr />
        <h4 className="text-end">Total:{getTotal()}</h4>
    </div>
)
};

export default Cart;