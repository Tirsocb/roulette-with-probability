import React, { useState } from 'react'


export const probability = (parameter)=>{
     /* 90% */
    let pctDiscount;
    let pctPrize;
    /* 0 es premio, 1 descuento, 2 cupón*/
    let newPrizeNumber = 0; /* set winner */
    /* participant location */

    if(parameter === 'transmetro'){
        pctPrize = 90;
        pctDiscount = 95; /* 5% */ /* coupon 5% */
    }else if (parameter === 'plaza'){
        pctPrize = 50; /* 50% */
        pctDiscount = 60; /* 10% */ /* coupon 40% */

    }else if(parameter === 'mercado'){
        pctPrize = 30; /* 30% */
        pctDiscount = 70; /* 40% */ /*  coupon 30% */
    }

    const rand = Math.random() * 100

    if(rand < pctPrize){
        return newPrizeNumber = 0
    }else if(rand < pctDiscount){
        return newPrizeNumber = 1
    }else{
        return newPrizeNumber = 2
    }
}
