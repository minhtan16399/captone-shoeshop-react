import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Image',
        dataIndex: 'image',
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
    }
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};
const HistoryList = () => {
    return (
        <div className='container-fluid'>
            <div>
                <Divider />
                <Table
                    rowSelection={{
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </div>
    )
}

export default HistoryList