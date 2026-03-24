const MyButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="my-button">
            {children}
        </button>
    );
};
export default MyButton