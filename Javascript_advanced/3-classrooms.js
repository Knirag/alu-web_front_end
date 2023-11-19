// Define the createClassRoom function
function createClassRoom(numbersOfStudents) {
    // Define the studentSeat function
    function studentSeat(seat) {
      // Return a function that returns the seat number
      return () => seat;
    }
  
    // Create and populate the students array
    const students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    // Return the students array
    return students;
  }
  
  // Create a closure classRoom by calling createClassRoom with 10 students
  const classRoom = createClassRoom(10);
  
  // Test the closure
  console.log(classRoom[0]()); // Should return 1
  console.log(classRoom[3]()); // Should return 4
  console.log(classRoom[9]()); // Should return 10
  