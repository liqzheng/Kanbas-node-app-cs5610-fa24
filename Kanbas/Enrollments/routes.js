import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.post("/api/courses/:courseId/enroll/:userId", (req, res) => {
        const { userId, courseId } = req.params;
        const status = dao.enrollUserInCourse(userId, courseId);
        res.send(status);
    });
    app.delete("/api/courses/:courseId/unenroll/:userId", (req, res) => {
        const { userId, courseId } = req.params;
        const status = dao.unenrollUserInCourse(userId, courseId);
        res.send(status);
    });

    app.get("/api/enrollments/:userId", (req, res) => {
        const { userId } = req.params;
        const enrollments = dao.findEnrollmentsForUser(userId);
        res.send(enrollments);
    });
}