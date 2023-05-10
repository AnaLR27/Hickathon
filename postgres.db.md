1. psql postgres

2. CREATE DATABASE hicron;

3. \connect hicron

4. CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(50),
    role VARCHAR(25),
    number_absences INT,
    );

5. ALTER TABLE users ADD CONSTRAINT role_check CHECK (role IN ('manager', 'employee'));

6. CREATE TABLE absences (
    id SERIAL PRIMARY KEY,
    id_user INTEGER REFERENCES users(id),
    start_date DATE,
    end_date DATE,
    status VARCHAR(15) CHECK (status IN ('approved', 'pending', 'denied'))
    );

7. INSERT INTO users (name, email, password, role, number_absences) VALUES
    ('ana', 'ana@correo.com', '123', 'manager', '23');

8. ALTER TABLE absences ALTER COLUMN status SET DEFAULT 'pending';

9. ALTER TABLE users ALTER COLUMN number_absences SET DEFAULT 23;

10. ALTER TABLE users ALTER COLUMN role SET DEFAULT 'employee';

11. ALTER TABLE users
    ALTER COLUMN name SET NOT NULL,
    ALTER COLUMN email SET NOT NULL,
    ALTER COLUMN password SET NOT NULL,
    ALTER COLUMN absences SET NOT NULL;