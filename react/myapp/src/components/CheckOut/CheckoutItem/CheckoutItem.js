/*
 * @Author: Harry
 * @Date: 2022-06-29 15:45:05
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-06-29 16:09:38
 * @FilePath: \myapp\src\components\CheckOut\CheckoutItem\CheckoutItem.js
 */
import React from 'react'
import { Count } from '../../UI/Count/Count'
import classes from './CheckoutItem.module.css'
export const CheckoutItem = (props) => {
    return (
        <div className={classes.CheckoutItem}>
            <div className={classes.img_}>
                <img src="/img/meals/1.png" alt="" />
            </div>
            <div className={classes.rwrap}>
                <h2>{props.meal.title}</h2>
                <div className={classes.couterW}>
                    <div>
                        <Count meal={props.meal} />
                    </div>
                    <div className={classes.price}>{props.meal.price}</div>
                </div>
            </div>
        </div>
    )
}
