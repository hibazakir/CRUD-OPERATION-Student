const Student = require('../model/student.model');

exports.student_create = ((req, res) => {
    let student = new Student({
        name: req.body.name,
        age: req.body.age
    });

    student.save((err) => {
        if (err) {
            return next(err);
        }
        res.send("Student added to database")
    });
});

exports.student_details = ((req, res) => {
    Student.findById(req.params.id, (err, student) => {
        if (err) {
            return next(err);
        }
        res.send(student);
    });
});

exports.student_update = ((req, res) => {
    Student.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, student) => {
        if (err) {
            return next(err);
        }
        res.send("Student Updated");
    });
});

exports.student_delete = ((req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, student) => {
        if (err) {
            return next(err);
        }
        res.send("Student Deleted");
    });
});