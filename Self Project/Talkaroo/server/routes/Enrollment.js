const enrollUser = async (req, res) => {
    const { email, username, firstName, lastName, courseId } = req.body;
  
    try {
      // Check if user exists
      const userCheck = await pool.query(
        'SELECT id FROM users WHERE email = $1 OR username = $2',
        [email, username]
      );
  
      let userId;
      if (userCheck.rows.length > 0) {
        userId = userCheck.rows[0].id;
      } else {
        // Create new user
        const newUser = await pool.query(
          'INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING id',
          [email, username, firstName, lastName]
        );
        userId = newUser.rows[0].id;
      }
  
      // Check existing enrollment
      const enrollmentCheck = await pool.query(
        'SELECT * FROM enrollments WHERE user_id = $1 AND course_id = $2',
        [userId, courseId]
      );
  
      if (enrollmentCheck.rows.length > 0) {
        return res.status(400).json({ message: 'User is already enrolled in this course' });
      }
  
      // Create enrollment
      await pool.query(
        'INSERT INTO enrollments (user_id, course_id) VALUES ($1, $2)',
        [userId, courseId]
      );
  
      res.json({ success: true });
    } catch (err) {
      console.error('Enrollment error:', err);
      res.status(500).json({ message: 'Server error during enrollment' });
    }
  };