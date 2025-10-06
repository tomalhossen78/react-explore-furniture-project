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
       alert("This item is Already Existing")
    }
    else{
        storedData.push(id);
        const data = JSON.stringify(storedData);
        localStorage.setItem('cart', data);
    }
}

export const removieDataLs = (id) => {
    const storedData = getDataLs();
    const updateData = storedData.filter(data => data !== id);
    const data = JSON.stringify(updateData);
    localStorage.setItem('cart',data)
}