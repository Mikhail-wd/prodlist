import { Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import likeImg from '../../../images/icons/fluent-emoji-high-contrast_heart-decorationlike.svg'
import styles from './item.module.scss'
import { useState, FC } from 'react'
import { useGlobalState } from '../../../store/store'

interface arrayFromLocalStore {
    ListChildComponentProps: any;
    key?: number;
    id?: string;
    render?(): string | void;
    name?: string | null | number;
    price?: string | null;
    src?: string | null;
}

function Item({ index, style: itemStyle }: any) {
    const [eraise, setEraiseIT] = useState<boolean>(false)
    const name = window.localStorage.key(index);
    const data = window.localStorage.getItem(`${name}`);
    const dataParsed = JSON.parse(`${data}`)
    function toggleLocalStoreProd() {
        setEraiseIT(!eraise);
        window.localStorage.removeItem(`${name}`);
    }
    return (
        <>
            {eraise === false ?
                <Grid item xs={12} ml={6} mt={6}>
                    <Grid container>
                        <Grid xs={4} mt={-1} item>

                            <img src={"https://testbackend.nc-one.com" + dataParsed.src} alt="food" className={styles['cart-img']} />

                        </Grid>
                        <Grid xs={6} ml={1} mt={0.5} item>
                            <Typography className={styles['price-text']} component="p">
                                {name}
                            </Typography>
                        </Grid>
                        <Grid ml={16} mt={-5.5} xs={3} item>
                            <Typography className={styles['list-price']} component="p">
                                $ {dataParsed.price}
                            </Typography>
                        </Grid>
                        <Grid ml={3.5} mt={-5.5} xs={1} item>
                            <img className={styles['list-text']} onClick={() => toggleLocalStoreProd()} src={likeImg} alt="fsdf" />
                        </Grid>
                    </Grid>
                </Grid>
                : console.log('Rerendered cart item.')}
        </>
    )
}

export default Item;