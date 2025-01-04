import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  numeroDeTelephone: { type: Number, required: true }, 
  motDePasse: { type: String, required: true },
}, { timestamps: true });

const User = models.User || model('User', userSchema);

export default User;
