import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoSrc: {
    type: String,
    required: true,
  },
  documentLink: {
    type: String,
    required: true,
  },
});

const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema);
export default Course;
