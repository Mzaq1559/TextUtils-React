import { useState, useRef } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Find & Replace state
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  // TTS state
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Char frequency toggle
  const [showFrequency, setShowFrequency] = useState(false);

  const utteranceRef = useRef(null);

  // ── Stats ─────────────────────────────────────────────────────────────────
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const readingTime = (0.008 * wordCount).toFixed(2);
  const sentenceCount = text
    .split(/[.!?]+/)
    .filter((s) => s.trim().length > 0).length;

  // ── Existing handlers ─────────────────────────────────────────────────────
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    stopSpeech();
    props.showAlert("Text cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.trim().split(/[ ]+/).join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  // ── 1. Download as .txt ───────────────────────────────────────────────────
  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "textutils-export.txt";
    a.click();
    URL.revokeObjectURL(url);
    props.showAlert("File downloaded!", "success");
  };

  // ── 2. Find & Replace ─────────────────────────────────────────────────────
  const handleReplace = () => {
    if (!findText) {
      props.showAlert("Please enter text to find.", "warning");
      return;
    }
    const regex = new RegExp(findText, "g");
    const count = (text.match(regex) || []).length;
    if (count === 0) {
      props.showAlert(`"${findText}" not found.`, "warning");
      return;
    }
    setText(text.replace(regex, replaceText));
    props.showAlert(`Replaced ${count} occurrence(s).`, "success");
  };

  // ── 3. Text-to-Speech ─────────────────────────────────────────────────────
  const handleSpeak = () => {
    if (!window.speechSynthesis) {
      props.showAlert(
        "Text-to-Speech not supported in this browser.",
        "danger",
      );
      return;
    }
    if (isSpeaking) {
      stopSpeech();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const stopSpeech = () => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  };

  // ── 4. Character Frequency ────────────────────────────────────────────────
  const getCharFrequency = () => {
    const freq = {};
    for (let ch of text.toLowerCase()) {
      if (/[a-z]/.test(ch)) {
        freq[ch] = (freq[ch] || 0) + 1;
      }
    }
    return Object.entries(freq).sort((a, b) => b[1] - a[1]);
  };

  const charFrequency = showFrequency ? getCharFrequency() : [];
  const maxFreq = charFrequency.length > 0 ? charFrequency[0][1] : 1;

  // ── Theme helpers ─────────────────────────────────────────────────────────
  const isDark = props.mode === "dark";
  const cardStyle = {
    backgroundColor: isDark ? "#343a40" : "#f8f9fa",
    border: "1px solid",
    borderColor: isDark ? "#495057" : "#dee2e6",
    color: isDark ? "white" : "#1b1846",
  };
  const inputStyle = {
    backgroundColor: isDark ? "#495057" : "white",
    color: isDark ? "white" : "#1b1846",
    borderColor: isDark ? "#6c757d" : "#ced4da",
  };

  return (
    <>
      {/* ── Main text area ── */}
      <div
        className="container"
        style={{ color: isDark ? "white" : "#1b1846" }}
      >
        <h3 className="my-3">{props.heading}</h3>
        <div className="mb-3">
          <textarea
            style={inputStyle}
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
            placeholder="Paste or type your text here..."
          />
        </div>

        {/* ── Action buttons ── */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          <button
            className="btn btn-primary"
            onClick={handleUpClick}
            disabled={!text}
          >
            Uppercase
          </button>
          <button
            className="btn btn-primary"
            onClick={handleLoClick}
            disabled={!text}
          >
            Lowercase
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={handleExtraSpaces}
            disabled={!text}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={handleCopy}
            disabled={!text}
          >
            Copy Text
          </button>
          <button
            className="btn btn-danger"
            onClick={handleClearClick}
            disabled={!text}
          >
            Clear
          </button>
          <button
            className="btn btn-success"
            onClick={handleDownload}
            disabled={!text}
          >
            ⬇ Download .txt
          </button>
          <button
            className={`btn ${isSpeaking ? "btn-warning" : "btn-info"}`}
            onClick={handleSpeak}
            disabled={!text}
          >
            {isSpeaking ? "⏹ Stop" : "🔊 Read Aloud"}
          </button>
          <button
            className={`btn ${showFrequency ? "btn-secondary" : "btn-outline-info"}`}
            onClick={() => setShowFrequency(!showFrequency)}
            disabled={!text}
          >
            {showFrequency ? "Hide Frequency" : "📊 Letter Frequency"}
          </button>
        </div>

        {/* ── Find & Replace panel ── */}
        <div className="p-3 rounded mb-4" style={cardStyle}>
          <h6 className="mb-3">🔍 Find &amp; Replace</h6>
          <div className="row g-2 align-items-end">
            <div className="col-12 col-md-5">
              <label className="form-label small mb-1">Find</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Text to find..."
                value={findText}
                onChange={(e) => setFindText(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div className="col-12 col-md-5">
              <label className="form-label small mb-1">Replace with</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Replacement text..."
                value={replaceText}
                onChange={(e) => setReplaceText(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div className="col-12 col-md-2">
              <button
                className="btn btn-primary btn-sm w-100"
                onClick={handleReplace}
                disabled={!text || !findText}
              >
                Replace All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats cards ── */}
      <div
        className="container mb-4"
        style={{ color: isDark ? "white" : "#1b1846" }}
      >
        <h5 className="mb-3">Text Summary</h5>
        <div className="row g-3">
          {[
            { label: "Words", value: wordCount },
            { label: "Characters", value: text.length },
            { label: "Sentences", value: sentenceCount },
            { label: "Min to Read", value: readingTime },
          ].map(({ label, value }) => (
            <div className="col-6 col-md-3" key={label}>
              <div className="p-3 rounded text-center" style={cardStyle}>
                <div className="fs-4 fw-bold">{value}</div>
                <div className="small text-muted">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Letter Frequency chart ── */}
      {showFrequency && charFrequency.length > 0 && (
        <div
          className="container mb-4"
          style={{ color: isDark ? "white" : "#1b1846" }}
        >
          <h5 className="mb-3">📊 Letter Frequency</h5>
          <div className="p-3 rounded" style={cardStyle}>
            {charFrequency.map(([char, count]) => (
              <div key={char} className="d-flex align-items-center mb-2 gap-2">
                <span
                  className="fw-bold"
                  style={{
                    width: "24px",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  {char}
                </span>
                <div
                  className="flex-grow-1"
                  style={{
                    height: "18px",
                    backgroundColor: isDark ? "#495057" : "#dee2e6",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${(count / maxFreq) * 100}%`,
                      height: "100%",
                      backgroundColor: "#0d6efd",
                      borderRadius: "4px",
                      transition: "width 0.3s ease",
                    }}
                  />
                </div>
                <span
                  className="small text-muted"
                  style={{ width: "28px", textAlign: "right" }}
                >
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Preview ── */}
      <div
        className="container mb-4"
        style={{ color: isDark ? "white" : "#1b1846" }}
      >
        <h5 className="mb-2">Preview</h5>
        <p
          className="p-3 rounded"
          style={{ ...cardStyle, minHeight: "60px", whiteSpace: "pre-wrap" }}
        >
          {text.length > 0
            ? text
            : "Enter text in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}
