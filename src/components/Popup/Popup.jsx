export const Popup = ({ type, popupDate, message, onClick }) => {
  if (type === "load") {
    return (
      <div className="popup-overlay">
        <div className="popup">
          <div className="loader__spinner"></div>
        </div>
      </div>
    );
  } else {
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
  }
};
