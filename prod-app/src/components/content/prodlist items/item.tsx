import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useState } from 'react'
import like from '../../../images/icons/fluent-emoji-high-contrast_heart-decorationlike.svg'
import notLike from '../../../images/icons/fluent-emoji-high-contrast_heart-decorationlike_white.svg'
import styles from './item.module.scss'

interface arrayFormApi {
    key?: number;
    id?: number;
    name: string;
    price: number;
    src: string;
}
function Item({ price, src, name }: arrayFormApi) {
    const [eraise, setEraiseIT] = useState<boolean>(false)
    function toggleLocalStoreProd() {
        setEraiseIT(!eraise)
        localStorage.getItem(name) ? localStorage.removeItem(name) : localStorage.setItem(name, JSON.stringify({ price, src }));
    }

    return (
        <Box className={styles.item}>
            <Link className={styles.blank} to="/product" state={{ name, price, src }}>
                <img src={"https://testbackend.nc-one.com" + src} alt="title" />

                <Typography ml={3} mt={-2} width={200} height={55} component="p" >
                    {name}
                </Typography>
            </Link>
            <Typography ml={3} mt={0.5} width={100} component="p" className={styles.price}>
                $  {price}
            </Typography>
            <Link to="/productslist" state={Math.random()}>
                <img className={styles['icon-med']} onClick={() => toggleLocalStoreProd()} src={localStorage.getItem(name) ? like : notLike} alt="picture of like" />
            </Link>
        </Box>


    )
}

export default Item;