# Admin Dashboard

## Project setup
```
npm install
```
## Setting up local db on Mac OS
1. Download and install mysql server (use legacy option for authentication) from: https://dev.mysql.com/doc/refman/8.0/en/osx-installation-pkg.html
2. Validate version: `mysql --version`
3. Run to connect to local db server `mysql -u root -p`
4. Fix path if needed: `export PATH=${PATH}:/usr/local/mysql/bin/` and re-try step 3
5. Create database: `CREATE DATABASE admin_panel;`

### Starts and hot-reloads server for development
```
npm run dev
```
