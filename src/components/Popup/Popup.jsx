export const Popup = ({ popupDate, message, onClick }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3>{message}</h3>
        <p>{popupDate}</p>
        <button className="btn" onClick={onClick}>
          D’accord
        </button>
      </div>
    </div>
  );
};
