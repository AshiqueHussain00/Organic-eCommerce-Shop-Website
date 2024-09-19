
export const calcDiscountPerc = ( originalPrice , discountPrice) => {
            
    if(originalPrice && discountPrice){
           
        let discountPerc = (discountPrice / originalPrice) * 100;

        let offPerc = 100 - discountPerc;
        
        const discountOff = Math.round(offPerc);


        return discountOff;


    }
}