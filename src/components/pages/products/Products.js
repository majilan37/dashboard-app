import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productRows } from '../../../dummyData'
import '../../../styles/pages/Products.css'

const Products = () => {
    const [data, setData] = useState(productRows)
    const handleDelete = id => {
        let handler = data.filter(item => item.id !== id)
        setData(handler)
     }
    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
          field: 'product',
          headerName: 'Product',
          renderCell: (params) => (
              <div className='productListUser' >
                  <img className='productListImg' src={params.row.img} alt="" />
                  {params.row.name}
              </div>
          )
          ,
          width: 200,
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 130,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
           
            renderCell: (params) => (
                <>
                   <Link to={'/products/' + params.row.id} >
                      <button className="productListEdit">Edit</button>
                   </Link>
                    <DeleteOutline onClick={() => handleDelete(params.row.id)} className="productListDelete" />
                </>
            )
        },
    ];
    return (
        <div className='products' >
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={6}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default Products
