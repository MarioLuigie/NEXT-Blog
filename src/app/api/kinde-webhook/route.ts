import { NextResponse } from 'next/server'
import jwksClient from 'jwks-rsa'
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken'

const client = jwksClient({
	jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
})

export async function POST(req: Request) {
	try {
		// Get the token from the request
		const token = await req.text()

    console.log('***TOKEN:', token)

		// Decode the token
		const decodedToken = jwt.decode(token, { complete: true }) as Jwt | null
		if (!decodedToken) {
			throw new Error('Failed to decode the JWT')
		}
		const { header } = decodedToken
		const { kid } = header

    console.log('***DECODEDTOKEN:', decodedToken)

		// Verify the token
		const key = await client.getSigningKey(kid)
		const signingKey = key.getPublicKey()
		const event = jwt.verify(token, signingKey) as JwtPayload // await?

		// Handle various events
    switch (event?.type) {
      case "user.created":
        // handle user created event
        // e.g add user to database with event.data
        console.log(event.data);
        break;
      case "user.updated":
        // handle user updated event
        // e.g update database with event.data
        console.log(event.data);
        break;
        case "user.deleted":
          // handle user updated event
          // e.g update database with event.data
          console.log(event.data);
          break;
      default:
        // other events that we don't handle
        break;
    }


	} catch (err) {
		if (err instanceof Error) {
			console.error(err.message)
			return NextResponse.json({ message: err.message }, { status: 400 })
		}
	}
	return NextResponse.json({ status: 200, statusText: 'success' })
}

// import { NextResponse } from 'next/server'
// import { connectToDB } from '@/lib/utils/database'
// import UserModel from '@/lib/models/user.model'
// import { handleError } from '@/lib/utils/dev'
// import { createUser } from '@/lib/actions/user.actions'

// export async function POST(req: Request) {
// 	try {
// 		const payload = await req.json()

//     console.log("***PAYLOAD:", payload)

// 		const { event, data } = payload

// 		if (!event || !data) {
// 			return NextResponse.json(
// 				{
// 					message:
// 						'Missing required data in POST request - kinde web-hook',
// 				},
// 				{ status: 400 }
// 			)
// 		}

// 		if (event === 'user.created') {
//       const {id, email, username, firstName, lastName, image} = data

//       const user = {
//         kindeId: id,
//         username,
//         email,
//         firstName,
//         lastName,
//         image,
//       }

// 		}
// 	} catch (error) {
// 		handleError(error)
// 	}
// }

// import { NextResponse } from 'next/server'
// import { connectToDB } from '@/lib/utils/database'
// import User from '@/lib/models/user.model'

// export async function POST(req: Request) {
//   try {
//     const { kindeId, email } = await req.json();

//     if (!kindeId || !email) {
//       return new NextResponse('Invalid data', { status: 400 });
//     }

//     await connectToDB();

//     // Sprawdzenie, czy użytkownik już istnieje
//     let user = await User.findOne({ kindeId });

//     if (!user) {
//       // Tworzenie nowego użytkownika w MongoDB
//       user = new User({
//         kindeId,
//         email,
//         // inne pola z danych przesłanych przez webhook
//       });

//       await user.save();
//     }

//     return new NextResponse(JSON.stringify({ message: 'User created successfully', user }), { status: 201 });
//   } catch (error) {
//     console.error(error);
//     return new NextResponse('Failed to create user', { status: 500 });
//   }
// }

//WEBHOOK TRIGGERS
// organization.created;
// organization.updated;
// user.created;
// user.updated;
// user.deleted;
// user.authentication_failed;
// user.authenticated;
// organization.deleted;
// role.created;
// role.updated;
// role.deleted;
// permission.created;
// permission.updated;
// permission.deleted;
// subscriber.created;
// access_request.created;

// Utwórz plik app/api/kinde-webhook/route.ts. Plik Route.ts to specyficzna konwencja plików w NextJS, która oznacza trasę jako trasę API, a nie stronę.

// Kinde wysyła webhooki jako JWT, aby były łatwe i bezpieczne. W tym przykładzie wykorzystamy 2 biblioteki do przeanalizowania JWT i sprawdzenia podpisu.

// Ilekroć w Kinde wystąpi jakieś zdarzenie, tą trasą wysyłane jest żądanie POST do określonego punktu końcowego, dzięki czemu Twój projekt może zareagować na zdarzenie. Na przykład odświeżenie tokena lub aktualizacja danych w bazie danych.


// ***TOKEN: eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwOjIxOjI4OjM4OjY2OmRkOjBhOmU2OmJmOjgyOmVhOjQ4OjQ2OmU5OmI2OmQyIiwidHlwIjoiSldUIn0.eyJkYXRhIjp7InVzZXIiOnsiZW1haWwiOiJrbGF1ZGlhLmsxOTkzQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJLIiwiaWQiOiJrcF84NDU4MjI5NDhmMTQ0Y2Q5YWMyM2VlOWNhODkyZDBlNCIsImlzX3Bhc3N3b3JkX3Jlc2V0X3JlcXVlc3RlZCI6ZmFsc2UsImlzX3N1c3BlbmRlZCI6ZmFsc2UsImxhc3RfbmFtZSI6IksiLCJvcmdhbml6YXRpb25zIjpbeyJjb2RlIjoib3JnXzBkNzZlNTEzNTdiIiwicGVybWlzc2lvbnMiOm51bGwsInJvbGVzIjpudWxsfV0sInBob25lIjpudWxsLCJ1c2VybmFtZSI6bnVsbH19LCJldmVudF9pZCI6ImV2ZW50XzAxOTA5MzJkNzU5MmM2OGJkYTUwZDYyYjJmZmE4Y2JiIiwic291cmNlIjoidXNlciIsInRpbWVzdGFtcCI6IjIwMjQtMDctMDlUMDI6Mjk6MDguMjQyOTY5KzEwOjAwIiwidHlwZSI6InVzZXIuY3JlYXRlZCJ9.nDQ7zSI4Qr4RY0Nq02JwMQWKS3kuko8gIO939Fz7gOmelAjC6FbW72FxP84JY-JedVZuEUHnqRbsYwef7HaiLkSfueD6fhaBwhbyGC7Ohromo7bM2X-V61QxrdHfwy0GnVAvw3WPQp_taSb8RDjElsWGi59jiKsKihjq_tHorK-VLRW_upKoQsPZyac-9V43fASWSjZgbJ2S8zpCyzHYYIdHUnBRrJ_1Og6GhDVW99ovphYN1K5PTMm3qG4XobwenCZ5MKNMkGn3HLMfL90o1LDer2RNs8eSX0b7Y742i4kJQYdMlxuQbZLiVvGgOQG6wLflwtBqrf7FY1vK3aESNA

// ***DECODEDTOKEN: {
//   header: {
//     alg: 'RS256',
//     kid: '10:21:28:38:66:dd:0a:e6:bf:82:ea:48:46:e9:b6:d2',
//     typ: 'JWT'
//   },
//   payload: {
//     data: { user: [Object] },
//     event_id: 'event_0190932d7592c68bda50d62b2ffa8cbb',
//     source: 'user',
//     timestamp: '2024-07-09T02:29:08.242969+10:00',
//     type: 'user.created'
//   },
//   signature: 'nDQ7zSI4Qr4RY0Nq02JwMQWKS3kuko8gIO939Fz7gOmelAjC6FbW72FxP84JY-JedVZuEUHnqRbsYwef7HaiLkSfueD6fhaBwhbyGC7Ohromo7bM2X-V61QxrdHfwy0GnVAvw3WPQp_taSb8RDjElsWGi59jiKsKihjq_tHorK-VLRW_upKoQsPZyac-9V43fASWSjZgbJ2S8zpCyzHYYIdHUnBRrJ_1Og6GhDVW99ovphYN1K5PTMm3qG4XobwenCZ5MKNMkGn3HLMfL90o1LDer2RNs8eSX0b7Y742i4kJQYdMlxuQbZLiVvGgOQG6wLflwtBqrf7FY1vK3aESNA'
// }


// CASE USER.CREATED PRZYKŁAD DLA EVENT.DATA czyli obiekt usera zwrócony przez webhook
// case "user.created": event.data
// {
//   user: {
//     email: 'klaudia.k1993@gmail.com',
//     first_name: 'K',
//     id: 'kp_845822948f144cd9ac23ee9ca892d0e4',
//     is_password_reset_requested: false,
//     is_suspended: false,
//     last_name: 'K',
//     organizations: [ [Object] ],
//     phone: null,
//     username: null
//   }
// }