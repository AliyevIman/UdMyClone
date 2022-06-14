import { Container, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, ClearAll, RemoveCart } from "../Redux/Action/CartAction";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Shop = () => {
  const { cartitems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handlerAddToCart =(id,symbol)=>{
    const findItem  = cartitems.length>0 ? cartitems.find(ct=>ct.id===id):null;
    const quantity  = findItem?findItem.quantity +symbol:1;
    if(quantity===0){
      dispatch(RemoveCart(id))
    }
    else{
      {dispatch(AddToCart(id,quantity))}

    }
  } 
  // const handlerRemoveFromCart =(id)=>{
  //   const findItem  = cartitems.length>0 ? cartitems.find(ct=>ct.id===id):null;
  //   const quantity  = findItem?findItem.quantity -1 :1;
  //   {dispatch(AddToCart(id,quantity))}
  // }
  
  return (
    <Container>
      {cartitems.length > 0 ? (
        <Grid mt={5} container spacing={2}>
          <Grid item xs={8}>
            <table className="table table-bordered text-center ">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Sub Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartitems?.map((cart) => (
                  <tr key={cart.id}>
                    <td>
                      <img className="img-fluid" src={cart.photoUrl} alt="" />
                    </td>
                    <td>{cart.name}</td>
                    <td className="d-flex justify-content-center">
                      <button onClick={()=>dispatch(handlerAddToCart(cart.id,-1))} className="btn btn-lg ">-</button>
                      <input style={{width:"40%"}}  className="form-control" type="number"value={cart.quantity} />
                      <button  onClick={()=>dispatch(handlerAddToCart(cart.id,1))} className="btn btn-lg ">+</button>

                    </td>

                    <td>
                      {cart.discount ? (
                        <>
                          <del>{cart.price}$</del>
                          <span>{cart.discount}$</span>
                        </>
                      ) : (
                        <span>{cart.price}$</span>
                      )}
                    </td>
                    <td>
                      {(
                        (cart.discount > 0 ? cart.discount : cart.price) *
                        cart.quantity
                      ).toFixed(2)}
                    </td>
                    <td>
                      <DeleteOutlineIcon
                        sx={{ color: "red", fontSize: "2em",cursor:"pointer" }}
                        onClick={() => dispatch(RemoveCart(cart.id))}
                      ></DeleteOutlineIcon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Grid>
          <Grid item xs={4}>
            <div className="text-center card p-4">
              <p>
              Total : 
                {cartitems.reduce(
                  (total, b) =>
                   total +
                    (b.discount > 0 ? b.discount : b.price) * b.quantity,
                  0
                )}

                ${" "}
              </p>
              <button  className="btn btn-outline-success w-100 my-3 d-block">
                Purchase
              </button>
              <button onClick={()=>dispatch(ClearAll())} className="btn btn-outline-danger">Remove All</button>
            </div>
          </Grid>
        </Grid>
      ) : (
        <p className="alert alert-danger">Cart Is Empty</p>
      )}
    </Container>

    // {cart.cartitems.map((e) => (
    // <div className="col-md-6 col-lg-4 col-xl-3 " key={e.id}>
    //   <div className="course-item">
    //     <span>{e.quantity}</span>
    //     <Link to={"/course-details/"+e.id}>
    //     <img className="img-fluid" src={e.photoUrl} alt="course-preview" />
    //     </Link>
    //     <div className="cbox-4-txt">
    //       {/* <p className="course-tags">
    //  <span>Languages</span>
    //  <span>English</span>
    //   </p> */}
    //       <h5 className="h5-xs">{e.name}</h5>
    //       <div className="course-rating clearfix">
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star"></i>
    //         <i className="fas fa-star-half-alt"></i>
    //       </div>
    //       <span className="course-price">
    //         <span className="old-price">
    //           {e.discount > 0 ? (
    //             <>
    //               <del>{e.price} $</del> <span>{e.discount} $</span>
    //               <p>x {e.quantity} - {e.discount*e.quantity} $</p>
    //             </>
    //           ) : (
    //             <>
    //               <span>{e.price} $</span>
    //                <p>x {e.quantity} - {e.price*e.quantity} $</p>
    //             </>
    //           )}
    //         </span>
    //       </span>
    //        <button onClick={()=>dispatch(RemoveCart(e.id))}>Remove</button>
    //     </div>
    //   </div>
    // </div>
    // ))}
    // <button className="btn btn-outline-success"> Sebeti onayla</button>
    // <p>Total :{cart.cartitems.reduce((total,b)=> total+b.price*b.quantity,0)}$ </p>
  );
};

export default Shop;
