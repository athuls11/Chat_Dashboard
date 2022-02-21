import mongoose from "mongoose";

export default (url: string) => {
    const cb = () => {
        console.log("DB connected");
    }
    const options: any = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    mongoose.Promise = global.Promise;
    mongoose.connect(url, options, cb)
    return mongoose
}