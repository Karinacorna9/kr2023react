import { useDispatch } from "react-redux";

function MyComponent() {
    const dispatch = useDispatch();

    const handleClick = () => {
        // Dispatch an action to update the Redux store.
        dispatch({ type: "MY_ACTION_TYPE", payload: "The action payload goes here" });
    };

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}