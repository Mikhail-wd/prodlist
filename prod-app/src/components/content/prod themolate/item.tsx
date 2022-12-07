import styles from './item.module.scss'
import likeButton from '../../../images/icons/fluent-emoji-high-contrast_heart-decorationhuge-like.svg'
import likeButtonWhite from '../../../images/icons/fluent-emoji-high-contrast_heart-decorationhuge-like_white.svg'
import loopa from '../../../images/icons/clarity_zoom-in-linemagni.svg'
import { Box, Grid } from '@mui/material'
import ReactImageMagnify from 'react-image-magnify'
import { setGlobalState } from '../../../store/store'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function HugeThemplate() {
    const [eraise, setEraise] = useState<boolean>(false)
    const productData = useLocation();
    const name = productData.state.name;
    const price = productData.state.price;
    const src = productData.state.src;
    setGlobalState('headerName', 'Product page');

    function toggleLocalStoreProd() {
        setEraise(!eraise)
        localStorage.getItem(productData.state.name) ? localStorage.removeItem(productData.state.name) : localStorage.setItem(productData.state.name, JSON.stringify({ price, src }));
    }
    return (
        <Box className={styles.item}>
            <Grid width={448} height={700} container>
                <Grid xs={10} ml={-6} mt={-6} item>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Product',
                            isFluidWidth: true,
                            src: "https://testbackend.nc-one.com" + productData.state.src
                        },
                        largeImage: {
                            src: "https://testbackend.nc-one.com" + productData.state.src,
                            width: 1000,
                            height: 1000
                        }
                    }} />
                </Grid>
                <Grid xs={3} ml={16.5} mt={-16} item>
                    <img src={loopa} alt="magni linse" />
                </Grid>
            </Grid>
            <Grid width={848} className={styles.content} container>
                <Grid xs={12} item className={styles['huge-letters']}>
                    {productData.state.name}
                </Grid>
                <Grid xs={10} item className={styles['huge-price']}>
                    $ {productData.state.price}
                </Grid>
                <Grid xs={2} item >
                    <Link to="/productslist" state={Math.random()}>
                        <img src={localStorage.getItem(productData.state.name) ? likeButton : likeButtonWhite} alt="button to like" onClick={() => toggleLocalStoreProd()} className={styles.prodimage} />
                    </Link>
                </Grid>
            </Grid>
        </Box >
    )
}

export default HugeThemplate;