import { set, connect } from 'mongoose';

set('strictQuery', false);

connect('mongodb://localhost:27017/kabadivala')