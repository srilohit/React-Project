import React,{useEffect, useState} from "react";
import axios from "axios";
import Cart from "../cartProject/Cart";

function Products(){
    var [product,setProduct] = useState([]);
    var [cart,setCart] = useState([]);

    useEffect(()=>{ 
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setProduct(res.data);
        });
    },[]);

    var addToCart =(pro)=>{
        setCart([...cart,{...pro,count:1}]);
    };

    var isProductInCart =(pro)=>{
        var x = cart.find((cp)=>{
            if(cp.title===pro.title){
                return true;
            }
            else{
                return false;
            };
        });
        return x;
    }

    var GetCartProductCount =(pro)=>{ 
        var x = cart.find((cp)=>{
            if(cp.title===pro.title){
                return true;
            }
            else{
                return false;
            };
        });
        return x?x.count:0;
    }
    
    var incre =(pro)=>{
        var temp = cart.map((cp)=>{
            if(cp.title===pro.title){
                cp.count = cp.count+1;
            }
            return cp;
        });
        setCart([...temp]);
    }

    var decre =(pro)=>{
        var temp = cart.map((cp)=>{
            if(cp.title===pro.title){
                cp.count = cp.count-1;
            }
            return cp;
        }).filter((s)=>{
           return s.count!==0;

        });
        setCart([...temp]);
    }
    return (
        <div>
            <h1 className="text-success ms-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                </svg>&nbsp;
                <b>Shopping Mart</b>
            </h1>
            <div  className='d-flex flex-wrap border border-5 border-info p-2 w-100 rounded'>
                <div className="w-50">
                    {product.length>0 && ( 
                        product.map((p)=>{
                            return (
                                <li className="d-flex">
                                    <img src={p.image} width={'100px'} alt="" />
                                    <div className="p-3">
                                        <h5 className="text-primary">{p.title}</h5>
                                        <h4>&#8377;{p.price}</h4>
                                        {
                                            isProductInCart(p) && (
                                                <>
                                                    <button onClick={()=>{decre(p)}} className="btn btn-outline-warning">-</button>
                                                    &nbsp;&nbsp;<b>{GetCartProductCount(p)}</b>&nbsp;&nbsp;
                                                    <button onClick={()=>{incre(p)}} className="btn btn-outline-warning">+</button>
                                                </>
                                            )
                                        }
                                        {
                                            !isProductInCart(p) && (<button onClick={()=>{addToCart(p)}} className="btn btn-outline-warning">Add To Cart</button>)
                                        }
                                    </div>
                                </li>
                            )
                        })
                    )}
                </div>
                <div className="w-50">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    )
};
 
export default Products;