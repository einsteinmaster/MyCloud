import React from 'react'
import './App.css';
import { useState } from 'react';
import Cookies from 'js-cookie';

const Upload = ({ onBack }) => {

	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const onUpload = () => {
		const formData = new FormData();

		formData.append('file', selectedFile);

		let headers = new Headers();

		headers.set('Authorization', 'Basic ' + Cookies.get('cookie'));

		fetch(
			'/upload/upload.php',
			{
				method: 'POST',
				headers: headers,
				body: formData,
			}
		)
			.then((result) => {
				if (result.status === 200) {
					console.log('Success:', result);
					onBack();
				} else {
					console.error('Error result: ' + result)
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};


	return (
		<div className="Upload">
			<div className="TopMenu">
				<div className="Spacer">
				</div>
				<div className="MenuButtonRight">
					<button type="button" onClick={onBack}>Back</button>
				</div>
			</div>
			<div className="MainBox">
				<div className="UploadBox">
					<p>
						File to upload:
					</p>
					{isFilePicked ? (
						<div>
							<p>Filename: {selectedFile.name}</p>
							<p>Filetype: {selectedFile.type}</p>
							<p>Size in bytes: {selectedFile.size}</p>
							<p>
								lastModifiedDate:{' '}
								{selectedFile.lastModifiedDate.toLocaleDateString()}
							</p>
						</div>
					) : (
						<p>Select a file to show details</p>
					)}
					<br />
					<input type="file" name="file" onChange={changeHandler} /><br />
					<br />
					<input type="button" value="Upload" onClick={onUpload} />
				</div>
			</div>
		</div>
	);
}

export default Upload;
