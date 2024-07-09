'use server'

export async function getAuthToken() {
	try {
		const params = new URLSearchParams()
		params.append('client_id', process.env.KINDE_CLIENT_ID || '')
		params.append('client_secret', process.env.KINDE_CLIENT_SECRET || '')
		params.append('grant_type', 'client_credentials')
		params.append('audience', `${process.env.KINDE_ISSUER_URL}/api`)

		console.log('***Request Body:', params.toString())

		const res = await fetch(`${process.env.KINDE_ISSUER_URL}/oauth2/token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json',
			},
			body: params,
		})

		if (!res.ok) {
			throw new Error(`Failed to get auth token: ${res.statusText}`)
		}

		const data: any = await res.json()

		const accessToken = data['access_token'] as string

		return accessToken
	} catch (error) {
		console.error('Error getting auth token:', error)
		throw error
	}
}

export async function getUserFromKinde(accessToken: string, userId: string) {
	try {
		const res = await fetch(
			`https://cinexplore.kinde.com/api/v1/user?id=${userId}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		if (!res.ok) {
			throw new Error('Network response was not ok')
		}

		const data = await res.json()
		console.log(data)
		
    return data
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}
