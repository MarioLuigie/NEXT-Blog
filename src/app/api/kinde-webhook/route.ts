import { NextResponse } from 'next/server'
import { connectToDB } from '@/lib/utils/database'
import User from '@/lib/models/user.model'

export async function POST(req: Request) {
  try {
    const { kindeId, email } = await req.json();

    if (!kindeId || !email) {
      return new NextResponse('Invalid data', { status: 400 });
    }

    await connectToDB();

    // Sprawdzenie, czy użytkownik już istnieje
    let user = await User.findOne({ kindeId });

    if (!user) {
      // Tworzenie nowego użytkownika w MongoDB
      user = new User({
        kindeId,
        email,
        // inne pola z danych przesłanych przez webhook
      });

      await user.save();
    }

    return new NextResponse(JSON.stringify({ message: 'User created successfully', user }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new NextResponse('Failed to create user', { status: 500 });
  }
}