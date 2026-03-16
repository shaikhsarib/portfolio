import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Project Developer</h4>
                <h5>Eatlytic — AI Food Label Analyzer</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built an OCR pipeline using OpenCV + Tesseract for extracting text
              from food label images. Developed a FastAPI backend that processes
              image uploads and returns extracted text with confidence scores.
              Implemented Docker containerization for deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Representative & AI Developer</h4>
                <h5>NEXATHON — Inter-College Hackathon (AIKTC)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Represented college in NEXATHON Hackathon organized by AIKTC.
              Presented Eatlytic — AI Food Analyzer as part of the competition,
              demonstrating real-world AI application development skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder & Lead Developer</h4>
                <h5>Vartistic Technology Team</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Co-founded and lead Vartistic, a 6-member development team. Built
              and maintain the live public website (vartistic.com). Responsible
              for project planning, full-stack development, and managing team
              workflow and project delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
