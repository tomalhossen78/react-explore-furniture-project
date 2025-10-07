import { Bounce, Slide, toast } from "react-toastify";

export const getDataLs = () => {
    const storedData = JSON.parse(localStorage.getItem('cart'));
    if(storedData){
        return storedData;
    }
    else{
       return [];
    }
    
}
export const setDataLs = (id) => {
    const storedData =getDataLs();
    if(storedData.includes(id)){
       toast.warning(("This item is already in your cart!"),
        {
position: "top-right",
autoClose: 1500,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Slide,
});
    }
    else{
        storedData.push(id);
        const data = JSON.stringify(storedData);
        localStorage.setItem('cart', data);
         toast.success("Add to Cart Successfully!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
    }
}

export const removieDataLs = (id) => {
    const storedData = getDataLs();
    const updateData = storedData.filter(data => data !== id);
    const data = JSON.stringify(updateData);
    localStorage.setItem('cart',data)
}