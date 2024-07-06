import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  console.log("ARW CONNECT TO DB FUNCTION");
  console.log(process.env.MONGODB_URI);

  if (isConnected) {
    console.log('MongoDB is already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: 'cinexplore' 
    })

    isConnected = true

    console.log('ARW MongoDB connected', isConnected)

  } catch (err) {
    console.log('Something went wrong with mongodb connecting!', err)
  }

}