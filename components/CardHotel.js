// const CardHotel = ({hotel}) => {
// 	console.log({hotel})
//   return (
// 	<div >
// 		<h4>{hotel.name}</h4>
// 		<img src={hotel.imageUrl}/>
// 	</div>
// 	)
// }

import Link from 'next/link'

const CardHotel = ({hotel}) => {
	console.log({hotel})
  return (
		<>
			<Link href={`/hotels/${hotel.propertyId}/details`}>
				<a>
					<div className="card">
						<p className="title">{hotel.name}</p>
						<img src={hotel.images[0].url}/>
					</div>
				</a>
			</Link>
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
				
				.card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
				}
				
				a {
          color: inherit;
          text-decoration: none;
				}
				
				.title a {
          color: #0070f3;
          text-decoration: none;
        }
			`}</style>
		</>
	)
}



export default CardHotel