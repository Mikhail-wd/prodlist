import { Box, Grid } from '@mui/material'
import ProductInStore from './prodlist items/item'
import styles from './prodlist.module.scss'
import { useEffect, useState, memo } from 'react'
import { FixedSizeList as List } from 'react-window';
import { setGlobalState } from '../../store/store'

interface arrayFormApi {
    key: number;
    id: number;
    name: string;
    price: number;
    src: string;
}

function ProdList() {
    const MemoProductInStore = memo (ProductInStore)
    const [dataList, useDataList] = useState<arrayFormApi[]>([])
    const ProdutsList = async () => {
        let requst = await fetch('https://testbackend.nc-one.com/image');
        let rework = await requst.json()
        useDataList(rework);
    }
    
    useEffect(() => {
        ProdutsList();
        setGlobalState('headerName', 'Product list page');
    },[]);
    return (
        <Box className={styles['product-list']}>
            <Grid container spacing={4}>
                {dataList.map((index) => (
                    <Grid key={index.id} item mt={6.8}>
                        <MemoProductInStore name={index.name} price={index.price} src={index.src} />
                    </Grid>
                ))}
            </Grid>
        </Box>

    )
}

export default ProdList;