const mongoose=require('mongoose');

const TaskSchema = new mongoose.Schema({

      title: {
      type: String,
      required: [true, "Title is required."]
    },
      description: {
      type: String,
      required: [true, "description is required."]
    },
     status: {
      type: String,
      enum:["pending", "in-progress", "completed"],
      default:"pending"
    },
     priority: {
      type: String,
      enum:["low", "medium", "high"],
     
    },
     dueDate: {
      type: Date
    }
  },
  { timestamps: true }

)
const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);
module.exports = Task;