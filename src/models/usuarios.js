const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    matricula: {
        type: Number,
        require: true,
        min: 1,
        max: 9999,
        unique: true
    },
    ativo: {
        type: Boolean,
        default: true,
        require: true
    },
    endereco: {
        cidade: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 100
        }, 
        estado: {
            type: String,
            require: true,
            minlength: 2,
            maxlength: 2
        }
    },
    registro: {
        type: Date,
        default: Date.now
    }
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('Usuario', UserSchema);