import './App.css';

interface ShopCartProps {
    count: number;
    totalPrice: number;
}

function CreateShopCart({ count }: ShopCartProps) {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <span style={{ marginRight: '10px', fontSize: "30px"}}><img src= "./shopping-cart.png" style={{padding: 0, width: 100, height: 100}}/>{count}</span>
        </div>
    );
}

export default CreateShopCart;
