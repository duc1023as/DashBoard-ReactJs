import React,{ useState } from 'react'
import "./productList.css"
import { productRows } from '../../dummyData'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [productData,setProductData] = useState(productRows);
    const HandleDelete = (id) => {
      setProductData(productData.filter((item)=>item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 130,
          renderCell:(params) => {
            return(
              <div className='productListUser'>
                <img className='productListImg' src={params.row.avatar} alt="avatar" />
                {params.row.product}
              </div>
            )
          }  
        },
        { field: 'stock', headerName: 'Stock', width: 180 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 90,
        },
        {
          field:'action',
          headerName:'Action',
          width:120,
          renderCell : (params) =>{
            return(
              <>
                <Link to={"/product/" +params.row.id}>
                  <button className='productListEdit'>Edit</button>
                </Link>
                <DeleteOutlineIcon className='productListDelete' onClick={()=>HandleDelete(params.row.id)}></DeleteOutlineIcon>
              </>
            )
          }
        },
      ];
  return (
    <div className='productList'>
        <DataGrid
        rows={productData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
