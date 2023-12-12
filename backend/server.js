import 'dotenv/config';
import { connectDB } from './app/db/db.js';
import instance from './app/instanse/instance.js';

const { PORT = 8080 } = process.env;

const init = () => {
  connectDB();
  instance.listen(PORT);
};

init();
