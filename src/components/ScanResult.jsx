import "../styles/result.css";

const ScanResult = ({ result }) => {
  return (
    <div className="result-box">
      <h3>Scan Result</h3>
      <p>
        <strong>Breed:</strong> {result.breed}
      </p>
      <p>
        <strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%
      </p>
    </div>
  );
};

export default ScanResult;
