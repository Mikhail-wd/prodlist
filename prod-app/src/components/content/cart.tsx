import { Grid, Box, Typography } from '@mui/material';
import { useState, useEffect, memo } from 'react';
import { FixedSizeList as List } from 'react-window';
import CartItem from './cart item/item'
import styles from './cart.module.scss'


function Cart() {
    const MemoCartItem = memo(CartItem)
    const [eraise, setEraise] = useState<boolean>(false)
    const [data, setData] = useState<string[]>([])
    const [storage, setStorage] = useState<number>(0)
    const array: string[] = []

    function makeArray() {
        for (let x = 0; x < 5; x++) {
            array.push()
        }
    }
    useEffect(() => {
        setEraise(!eraise)
        setData(array)
    }, [])
    return (
        <Box mt={12} ml={12.5} className={styles['list-border']}>
            <Grid container>
                <Grid item mt={5.5} ml={4.2} xs={8}>
                    <Typography component="h2" className={styles.header}>
                        Favorites
                    </Typography>
                </Grid>
            </Grid>
            <List itemCount={window.localStorage.length} height={880} itemSize={5} width={407}>
                {CartItem}
            </List>
        </Box>
    )
}

export default Cart;