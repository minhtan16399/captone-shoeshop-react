import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Radio, Table } from 'antd';
const columns = [
    {
        title: 'Id',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Image',
        dataIndex: 'image',
        render: (text) => <img src={text} style={{width:50}}/>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        render:(text) => <span>{}</span>
    }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

export const Cart = () => {

    const cartItem = useSelector(state => state.cartReducer.cart);
    const showCart = () => {
        console.log(cartItem);
    };

    useEffect(() => {
        showCart()
    }, []);

    return (
        <div>
            <div className="products mx-auto mt-3">
                <div className='products-content mx-auto'>
                    <div className="py-1 row w-100">
                        <div className='title col-12 col-sm-6'>
                            <span>My Cart</span>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="products_show py-3 w-100 mx-auto">
                            <div className='container-fluid'>
                                <div>
                                    <Divider />
                                    <Table
                                        rowSelection={{
                                            ...rowSelection,
                                        }}
                                        columns={columns}
                                        dataSource={cartItem}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart