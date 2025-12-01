 const mongoose = require( 'mongoose')

// Database connection
mongoose.connect ( 'mongodb://localhost:27017/event_db')
.then ((res) => {
    console.log ('Connected to database');
})
.catch((error) => {
    console.log (error);
});

//schema
const personSchema = new mongoose.Schema ({
    name: {
        type: String, 
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: [18, 'Age must be 18 or above']
    }
})

//model
const Person = mongoose.model ('Person', personSchema);
const person = new Person ({name: 'Jack', age: 21});
(async () => {
     try {
        await person.save();
    } catch (err) {
         console.log (err)
    }
}) () ;