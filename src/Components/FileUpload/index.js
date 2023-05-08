import React, { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubjectChange = (event) => {
    setEmailSubject(event.target.value);
  };

  const handleContentChange = (event) => {
    setEmailContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setMessage("Please select a file to upload");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("subject", emailSubject);
    formData.append("content", emailContent);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/upload`, formData);
      setMessage(response.data.message);
      alert("Email sent successfully");
    } catch (error) {
      setMessage("Error uploading file");
      console.error(error);
    }
  };
  const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);
  const handleLogout = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/signout`, {userCredentials: true});
    if(response){
        removeCookie('accessToken');
        navigate('/login')
    }
}

  return (
    <div className="container my-5">
    <h1 className="text-center">Bulk Email Sender</h1>
    <hr />

    <form onSubmit={handleSubmit} id="emailForm" className="my-5">
      <div className="form-group">
        <label for="fileInput">Upload Excel File with Email List </label>
        <input
          type="file"
          className="form-control-file m-3"
          id="fileInput"
          onChange={handleFileChange}
          name="file"
        />
      </div>
      <div className="form-group">
        <label for="subjectInput">Email Subject</label>
        <input
          type="text"
          className="form-control" value={emailSubject} onChange={handleSubjectChange}
          id="subjectInput"
          name="subject"
        />
      </div>
      <div className="form-group">
        <label for="contentInput">Email Content</label>
        <textarea
          className="form-control"
          id="contentInput"
          name="content" value={emailContent} onChange={handleContentChange}
          rows="5"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send Email</button>
      <button onClick={handleLogout} type="button" className="btn btn-danger m-3">Logout</button>
    </form>

    <div id="resultDiv"></div>
  </div>
  );
};

export default FileUpload;
