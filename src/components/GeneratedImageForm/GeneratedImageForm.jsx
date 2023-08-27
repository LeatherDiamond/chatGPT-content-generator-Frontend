import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import { DisappearedLoading } from 'react-loadingg';

function GeneratedImageForm() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [description, setDescription] = useState('');
  const [fileDownloadUrl, setFileDownloadUrl] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${apiUrl}/response/generated-images/`, { description }, { responseType: 'arraybuffer' });
      const blob = new Blob([response.data], { type: 'image/png' });
      const imageUrl = URL.createObjectURL(blob);
      setImageSrc(imageUrl);
      setFileDownloadUrl(imageUrl);
    } catch (error) {
      console.error('Error when generating an image:', error);
    }

    setIsLoading(false);
  };

  return (
    <Layout>
      <div className="image-form">
        <h2>Generate an image</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div>
            <label>Insert the description:</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button type="submit" disabled={isLoading}>Generate an image</button>
        </form>
        {isLoading ? (
          <div>
            <DisappearedLoading />
          </div>
        ) : null}
        {!isLoading && imageSrc && (
          <div>
            <p>Checkout the result:</p>
            <img src={imageSrc} alt="Generated image" />
          </div>
        )}
        {!isLoading && fileDownloadUrl && (
          <div>
            <p>Download the image: <a href={fileDownloadUrl} download>Download</a></p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default GeneratedImageForm;