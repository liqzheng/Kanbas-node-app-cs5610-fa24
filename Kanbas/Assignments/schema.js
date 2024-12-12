import mongoose from "mongoose";
const AssignmentSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        startDate: String,
        dueDate: String,
        points: Number,
        untilDate: String,
    },
    { collection: "assignments" }
);
export default AssignmentSchema;