import './App.css';

interface ButtonProps {
    onClick?: () => void;
    image?: string;
}

function CreateAddToCart({ onClick, image }: ButtonProps) {
    return (
        <div>
            <button onClick={onClick} style={{ fontSize: 25, display: 'flex', alignItems: 'center', gap: 10, padding: '10px 20px' }}>
            Add to cart <img src={image} style={{ width: 30, height: 30 }} />
            </button>
        </div>
    );
}

export default CreateAddToCart;
