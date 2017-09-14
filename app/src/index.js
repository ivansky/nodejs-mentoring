import config from './config/project.json';
import { Product, User } from './models/index';

console.log(Product, User);
console.log(config.name);

new User();
new Product();
