import React, { useState } from 'react';
import { slot } from './SlotAPI';

//Task Six
function Slot(props) {
    const [slotResult, setSlotResult] = useState([]);
    const [balance, setBalance] = useState("-");
    const [reward, setReward] = useState("-");
    const [error, setError] = useState("");

    const handleClick = e => {
        e.preventDefault();

        slot().then((data) => {
            //In case of auth error redirects the user to login
            if (data.auth === false) {
                props.history.push('/login');
            }

            //In case the user doesn't have balance in his/her wallet
            if (data.key === "NO_FUNDS") {
                setError(data.message);
            } else {
                setSlotResult(data.result);
                setBalance(data.balance);
                setReward(data.won);
            }
        });
    }; 

    return (
        <div>
            <h2>Slot Machine</h2>
            <button onClick={handleClick}>Spin</button>
            <small>{error}</small>
            <ul>
                {slotResult.map((slotResult,i) => (
                    <li key={i} data-testid="p">{slotResult}</li>
                ))}
            </ul>
            <h4>Reward: {reward}</h4>
            <h5>Balance: {balance}</h5>
        </div>
    );
}

export default Slot;
