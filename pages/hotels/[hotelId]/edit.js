const EditHotel = ({hotelId}) => {
	return (<h1>Edit Hotel {hotelId}</h1>)
}

export async function getServerSideProps(context) {
	const {params} = context
	return {
		props: {
			hotelId: params.hotelId
		}
	}
}

export default EditHotel