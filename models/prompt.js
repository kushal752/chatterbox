import {Schema, model, models} from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],
    },
});

//Either get the prompt that already exists on the models object
//Or if it doesnt exist, create a new model that will be called 'Prompt' based ont he PromptSchema.
const Prompt = models.Prompt || model('Prompt', PromptSchema);
export default Prompt; 