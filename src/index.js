import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { pizzaData } from './data';



function App() {
    return (
        <div className='container header'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}


const Header = () => {
    return <header className='header footer'>
        <h1   >
            Fast React Pizza Co.</h1>
    </header>
}

const Menu = () => {
    const pizzas = pizzaData; 
    const numPizzas = pizzas.length
    return (
        <main className='menu'>
            <h2> Our Menu</h2>
            {numPizzas > 0 ? (
                <>
                <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone
                oven, all organic all delicious
            </p>
                    <ul className='pizzas'>
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>

            ) : <p>We're still working on our Menu, please come back later :)</p>
            }

        </main>
    )
}

function Pizza({ pizzaObj }) {
    return (
        <div className={`pizza ${pizzaObj.soldOut ? "sold-out": ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? <span>SOLD OUT</span> : pizzaObj.price}</span>
            </div>
        </div>
    )
}

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    
    return (
        <footer className='footer'>
            {isOpen ? (<Order closeHour={closeHour} openHour={openHour} />) : <p>We're happy to welcome you between {openHour}:00 and {closeHour}</p>

            }
        </footer>)
}

const Order = ({ closeHour, openHour }) => {
    return (
        <div className="order">
            <p>
                We'r currently open until {closeHour}:00. Come visit us or order online
            </p>
            <button className='btn'>Order</button>
        </div>
    )
}
//React v18
const root = ReactDOM.createRoot(document.getElementById
    ('root'));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>)

//React before 18
// React.render(<App />, document.getElementById("root"));