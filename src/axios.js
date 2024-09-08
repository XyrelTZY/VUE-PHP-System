import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/backend/add-student.php', // Replace with your PHP backend URL
});

export default instance;
