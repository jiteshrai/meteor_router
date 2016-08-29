import React from 'react';

export const ContactUs = () => {
	return (
		<div>
			<h3>ContactUs</h3>
			<form>
				<div className="form-group">
					<label>Email</label>
					<input placeholder='enter your email id' className="form-control" />
				</div>
				<div className="text-danger"></div>
				<button className="btn btn-primary">Send!</button>
		    </form>
		</div>
		);
}