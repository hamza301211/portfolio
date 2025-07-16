import mongoose from "mongoose";

export const connect = async () => {
  if (!process.env.MONGODB_URL) {
    console.error("❌ MONGODB_URL is not defined in environment variables");
    return;
  }

  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Using existing database connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    // Exit process with failure
    process.exit(1);
  }
};

