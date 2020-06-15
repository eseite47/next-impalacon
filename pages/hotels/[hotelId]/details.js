import CardHotelDetails from '../../../components/CardHotelDetails'

const HotelDetails = ({data}) => {
	return (
		<>
			<h1>{data.name}</h1>
			<CardHotelDetails
				address={data.address}
				imageUrl={data.images[0].url}
			/>
		</>
	)
}

export async function getServerSideProps(context) {
	const {params} = context
	const {hotelId} = params
	const res = await fetch(`https://gdapi.getimpala.com/v1/properties/${hotelId}?start=2020-07-05&end=2020-07-07`,
	{ 
		method: 'GET', 
		headers: new Headers({
			'x-api-key': 'insert-your-key', 
		})
	})
	const data = await res.json()
	return {
		props: {
			data
		}
	}
}

export default HotelDetails