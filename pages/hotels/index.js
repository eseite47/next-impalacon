// import fs from 'fs'
import CardHotel from '../../components/CardHotel'

const AllHotels = ({hotels}) => {
	return (
		<>
			<h1>All Hotels</h1>
			<div className='container'>
			{
				hotels.map(hotel => {
					return <CardHotel hotel={hotel}/>
				})
			}
		</div>
			<style jsx>{`
			.container {
				padding: 0 0.5rem;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}`}</style>
		</>
	)
}

/** 
 * getStaticProps example
 * 
export async function getStaticProps() {
// call an api or query the DB
	const data = JSON.parse(await fs.readFileSync('hotels.json'));
	return {
		props: data
	}
}
*/

export async function getServerSideProps() {
	const res = await fetch(`https://gdapi.getimpala.com/v1/properties/search`,
	{ 
		method: 'POST',		
		headers: new Headers({
			'Content-Type': 'application/json',
			'x-api-key': 'insert-your-key', 
		}),
		body: '{"start":"2020-07-04","end":"2020-07-05","location":"LISBOA"}',
	})
	const data = await res.json()
	return {
		props: {
			hotels: data
		}
	}
}

export default AllHotels;