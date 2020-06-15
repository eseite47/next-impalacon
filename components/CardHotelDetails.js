
const CardHotelDetails = ({address, imageUrl}) => {
  return (
		<>
			<div className="card">
				<p>{`${address.line1}, ${address.line2 ? address.line2 + ',' : '' }`}</p>
				<p>{`${address.city}, ${address.country}, ${address.postalCode}`}</p>
				<img src={imageUrl}/>
			</div>

			<style jsx>{`
				.title {
          margin: 0;
          line-height: 1.15;
					font-size: 1rem;
				}
				img {
					height: 200px;
					width: auto;
				}
				.card {
					width: 250px;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
				}
				
			`}</style>
		</>
	)
}



export default CardHotelDetails