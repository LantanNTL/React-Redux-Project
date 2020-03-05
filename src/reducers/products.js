var initialState = [
    {
        id : 1,
        name : 'iPhone 11 Pro Max',
        image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating : 5
    },
    {
        id : 2,
        name : 'Samsung galaxy Note 10',
        image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2020/1/17/637148757998466143_SS-note-10-do-1.png',
        description : 'Sản phẩm do SamSung sản xuất',
        price : 400,
        inventory : 15,
        rating : 4
    },
    {
        id : 3,
        name : 'Oppo Reno',
        image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/5/28/636946617688640554_oppo-reno-xanh-1.png',
        description : 'Sản phẩm do China sản xuất',
        price : 350,
        inventory : 5,
        rating : 3
    }
];

const products = (state = initialState, action) => {
    switch (action.type) { 
        default : return[...state];
    }
}
export default products;