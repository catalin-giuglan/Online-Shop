import './App.css';

interface ButtonProps {
    name: string;
    onClick?: () => void;
}

function CreateButton({ name, onClick }: ButtonProps) {
    return (
        <div className="button-container">
            <button className="main-button" onClick={onClick}>{name}</button>
        </div>
    );
}

export default CreateButton;
