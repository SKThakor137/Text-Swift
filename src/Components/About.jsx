import PropTypes from "prop-types";

const About = ({ mode }) => {
  let myStyle = {
    color: mode === "dark" ? "white" : "#010831",
    backgroundColor: mode === "dark" ? "#010831" : "white",
  };
  let strongColor = {
    color: mode === "dark" ? "lime" : "#010831",
  };
  return (
    <div className="container">
      <h1
        className="my-3"
        // style={{ color: mode === "dark" ? "white" : "#010831" }}
        style={myStyle}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h6>About Text Swift App :</h6>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              The Text Swift app is a versatile text editing tool designed to
              enhance your text processing experience. With a user-friendly
              interface built using Bootstrap and React JS, this app offers a
              range of powerful features to help you manage and refine your text
              content. Whether you are looking to convert text case, remove
              extra spaces, or estimate reading time, the LinkedIn Text Swift
              app provides the tools you need to improve the quality of your
              text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h6>Key Features :</h6>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <div>
                <strong style={strongColor}>Text Case Conversion : </strong>
                <span>Convert text to uppercase or lowercase.</span>
              </div>
              <div>
                <strong style={strongColor}>Text Manipulation : </strong>
                <span>
                  Remove extra spaces, words, or characters from your text.
                </span>
              </div>
              <div>
                <strong style={strongColor}>Copy and Clear : </strong>
                <span>
                  Copy your modified text to the clipboard or clear the text
                  area.
                </span>
              </div>

              <div>
                <strong style={strongColor}>Character and Word Count : </strong>
                <span>
                  Get real-time character and word count for your text.
                </span>
              </div>
              <div>
                <strong style={strongColor}>Reading Time : </strong>
                <span>Estimate the reading time of your text.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h6>Development Team :</h6>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <div>
                <strong style={strongColor}>Lead Developer : </strong>
                <span>Shailesh Thakor</span>
              </div>
              <div>
                <strong style={strongColor}>Development Stack : </strong>
                <span> React JS, Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default About;
