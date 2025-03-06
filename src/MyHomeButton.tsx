import './App.css';

function CreateHomeButton({name}: {name: string} ) {
    return (
        <div className="button-container">
            <button className="main-button">{name}</button>
            <div className="options-menu">
                <button>Weather</button>
                <button>Photos</button>
                <button>Subscriptions</button>
            </div>
        </div>
    );
}

export default CreateHomeButton;
