import "../styles/result.css";

const ScanResult = ({ result, loading, closeModal }) => {
  return (
    <div className="result-modal">
      <button className="close-btn" onClick={closeModal}>✕</button>

      <h3>Scan Result</h3>

      {loading ? (
        <>
          <div className="spinner"></div>
          <p>Scanning chicken...</p>
        </>
      ) : result ? (
        <>
          <p>
            <strong>Breed:</strong> {result.breed}
          </p>
          <p>
            <strong>Confidence:</strong>{" "}
            {(result.confidence * 100).toFixed(2)}%
          </p>
        </>
      ) : (
        <p>No result found</p>
      )}
    </div>
  );
};

export default ScanResult;